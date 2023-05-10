import React, { useReducer, useEffect } from "react";
import ParksList from "./ParksList";
import AddParkForm from './AddParkForm';
import EditParkForm from "./EditParkForm";
import ParkDetail from "./ParkDetail";
import parkInformationReducer from "../reducers/park-information-reducer";
import { getParksFailure, getParksSuccess, getFormVisible, getParkSelection,
         getEditParkSuccess, getEditFormVisible, getReset } from '../actions/index';

const initialState = {
  isLoaded: false,
  parks: [],
  error: null,
  formVisible: false,
  editFormVisible: false,
  parkSelected: null
};

function ParkController() {
  const [state, dispatch] = useReducer(parkInformationReducer, initialState);
  
  const handleGettingParks = async () => {
    await fetch('https://localhost:5001/api/Parks/', {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000"
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

  useEffect(() => {
    handleGettingParks();
  }, [])

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
        'Content-Type': 'application/json; charset=utf-8',
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
      handleGettingParks();
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
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`There is an error`); 
        }
      })
      .then(() => {
        handleGettingParks();
      })
      .then(() => {
        // const id = parkSelected[0].parkId
        const parkSelectedById = parks.filter(park => park.parkId === parkSelected[0].parkId);
        console.log(parks)
        console.log(parkSelectedById)
        const action = getEditParkSuccess(parkSelectedById);
        dispatch(action);
      })
      .catch((error) => {
        const action = getParksFailure(error);
        dispatch(action);
      });
  }

  const handleDeletingClick = async (id) => {
    await fetch(`https://localhost:5001/api/Parks/${id}`, {
      method: 'DELETE'
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
      handleGettingParks();
    })
    .catch((error) => {
      const action = getParksFailure(error);
      dispatch(action);
    });
  };

  const handleClick = () => {
    if (parkSelected !== null) {
      const action = getReset();
      dispatch(action);
    } else {
      const action = getFormVisible();
      dispatch(action);
    }
  };

  const handleEditingClick = () => {
    const action = getEditFormVisible();
    dispatch(action);
  };

  const handleChangingParkSelection = (id) => {
    const parkSelectedById = parks.filter(park => park.parkId === id);
    const action = getParkSelection(parkSelectedById);
    dispatch(action);
  };

  const { error, isLoaded, parks, formVisible, editFormVisible, parkSelected } = state;
  console.log(parks);
  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>;
  } else if (formVisible) {
    return (
      <React.Fragment>
        <AddParkForm
          onNewParkCreation={handleAddingParks} />
          <button onClick={handleClick}>BACK TO LIST</button>
      </React.Fragment>
    )
  } else if (editFormVisible) {
    return (
      <React.Fragment>
        <EditParkForm
          onEditParkCreation={handleEditingPark}
          park={parkSelected} />
      </React.Fragment>
    )
  } else if (parkSelected !== null) {
    return (
      <React.Fragment>
        <ParkDetail
          park={parkSelected}
          onClickingEdit={handleEditingClick}
          onClickingDelete={handleDeletingClick}
        />
        <button onClick={handleClick}>BACK TO LIST</button>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <button onClick={handleClick}>ADD PARK</button>
        <ParksList  
          parksList={parks}
          onParkSelection={handleChangingParkSelection} />
      </React.Fragment>
    );
  }
}

export default ParkController;