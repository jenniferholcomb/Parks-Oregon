import React, { useReducer, useRef } from "react";
import ParksList from "./ParksList";
import AddParkForm from './AddParkForm';
import EditParkForm from "./EditParkForm";
import ParkDetail from "./ParkDetail";
import SignIn from "./SignIn";
import parkInformationReducer from "../reducers/park-information-reducer";
import { getCurrentUser, getParksFailure, getParksSuccess, getFormVisible, getParkSelection,
         getEditParkSuccess, getEditFormVisible, getReset, getTokenSuccess, getSignOut } from '../actions/index';

const initialState = {
  currentUser: null,
  isLoaded: false,
  parks: [],
  error: null,
  formVisible: false,
  editFormVisible: false,
  parkSelected: null,
  token: null
};

function ParkController() {
  const [state, dispatch] = useReducer(parkInformationReducer, initialState);
  const currentParks = useRef(state.parks);
  const currentSelected = useRef(state.parkSelected);
  
  const handleGettingParks = (auth) => {
    
      fetch('https://localhost:5001/api/Parks/', {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${auth}`
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`There is an error`);
          } else {
            return response.json()
          }
        })
        .then((jsonifiedResponse) => {
          const action = getParksSuccess(jsonifiedResponse);
          dispatch(action);
        })
        .catch((error) => {
          const action = getParksFailure(error);
          dispatch(action);
        });
  }

  const handleGettingToken = (credentials) => {
    fetch('https://localhost:5001/api/token/', {
      method: 'POST',
      body: JSON.stringify({
          "userInfoId": 1,
          "displayName": "Test",
          "userName": "test123",
          "email": `${credentials.email}`,
          "password": `${credentials.password}`
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`There is an error`);
      } else {
        return response.text();
      }
    })
    .then((jsonifiedResponse) => {
      handleGettingParks(jsonifiedResponse);
      const action = getTokenSuccess(jsonifiedResponse);
      dispatch(action);
    })
    .catch((error) => {
      const action = getParksFailure(error);
      dispatch(action);
    });
  }

  const handleAddingParks = async (newBody) => {
    await fetch('https://localhost:5001/api/Parks/', {
      method: 'POST',
      body: JSON.stringify({
        name: newBody.name,
        location: newBody.location,
        state: newBody.state,
        type: newBody.type,
        terrain: newBody.terrain,
        features: newBody.features
      }),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`There is an error`);
      } else {
        return response.json()
      }
    })
    .then(() => {
      handleGettingParks(token);
    })
    .then(() => {
      const action = getReset();
      dispatch(action);
    })
    .catch((error) => {
      const action = getParksFailure(error);
      dispatch(action);
    });
  }

  const handleEditingPark = async (parkToEdit) => {
    await fetch(`https://localhost:5001/api/Parks/${parkToEdit.parkId}`, {
      method: 'PUT',
      body: JSON.stringify({
        parkId:parkToEdit.parkId,
        name: parkToEdit.name,
        location: parkToEdit.location,
        state: parkToEdit.state,
        type: parkToEdit.type,
        terrain: parkToEdit.terrain,
        features: parkToEdit.features
      }),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`There is an error`); 
      } 
    })
    .then(() => {
      handleGettingParks(token);
      setTimeout(() => {
        const action = getEditParkSuccess(
          currentParks.current.filter(park => park.parkId === parkSelected[0].parkId)
        );
        dispatch(action);
      }, 1000)
    })
    .catch((error) => {
      const action = getParksFailure(error);
      dispatch(action);
    });
  }

  const handleDeletingClick = async (id) => {
    await fetch(`https://localhost:5001/api/Parks/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    })
    .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Error(`There is an error`);
        }
    })
    .then(() => {
        const action = getReset();
        dispatch(action);
    })
    .then(() => {
      handleGettingParks(token);
    })
    .catch((error) => {
      const action = getParksFailure(error);
      dispatch(action);
    });
  };

  const handleSigningIn = (credentials) => {
    handleGettingToken(credentials);
    const action = getCurrentUser(credentials);
    dispatch(action);
  }

  const handleClick = () => {
    if (parkSelected !== null) {
      const action = getReset();
      dispatch(action);
    } else {
      const action = getFormVisible();
      dispatch(action);
    }
  };

  const handleChangingParkSelection = (id) => {
    const parkSelectedById = parks.filter(park => park.parkId === id);
    const action = getParkSelection(parkSelectedById);
    dispatch(action);
  };

  const { currentUser, error, isLoaded, parks, formVisible, editFormVisible, parkSelected, token } = state;
  currentParks.current = parks;
  currentSelected.current = parkSelected;

  if (currentUser === null) {
    return (
    <SignIn
      onSignInCredentials={handleSigningIn} />
    )
  } else if (error) {
    return <h1>Error: There is an error</h1>;
  } else if (!isLoaded) {
    return <h1 className="text-xl font-bold text-center">...Loading...</h1>;
  } else if (formVisible) {
    return (
      <React.Fragment>
        <div className="grid grid-cols-8">
          <div className="ml-6 mt-2">
            <button onClick={() => dispatch(getReset())}
                    className="mt-2 px-6 py-2 text-white bg-blue-600 rounded-lg w-48 hover:bg-blue-900">BACK TO LIST</button>
          </div>   
          <div className="col-span-7 mr-44 ">    
            <AddParkForm
              onNewParkCreation={handleAddingParks} />
          </div>
        </div>
      </React.Fragment>
    )
  } else if (editFormVisible) {
    return (
      <React.Fragment>
        <div className="grid grid-cols-8">
          <div className="ml-6 mt-2">
            <button onClick={() => dispatch(getReset())}
                    className="mt-2 px-6 py-2 text-white bg-blue-600 rounded-lg w-48 hover:bg-blue-900">BACK TO LIST</button>
          </div>  
          <div className="col-span-7 mr-44 ">  
            <EditParkForm
              onEditParkCreation={handleEditingPark}
              park={parkSelected} />
          </div>
        </div>
      </React.Fragment>
    )
  } else if (parkSelected !== null) {
    return (
      <React.Fragment>
        <ParkDetail
          park={currentSelected}
          onClickingEdit={() => dispatch(getEditFormVisible())}
          onClickingDelete={handleDeletingClick}
          onReturnToList={() => dispatch(getReset())}
        />
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <div className="grid grid-cols-8">
          <div className="pl-6">
            <button onClick={handleClick}
                    className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg w-48 hover:bg-blue-900">ADD NEW PARK</button><br />
            <button onClick={() => dispatch(getSignOut())}
                    className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg w-48 hover:bg-blue-900">SIGN OUT</button>
          </div> 
          <div className="col-span-7 mt-4"> 
            <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-4 space-x-2 ">
                <ParksList  
                  parksList={parks}
                  onParkSelection={handleChangingParkSelection} />
            </div>
            
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ParkController;

