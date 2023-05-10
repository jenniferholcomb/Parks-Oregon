import React, { useReducer, useEffect } from "react";
import ParksList from "./ParksList";
import AddParkForm from './AddParkForm';
import parkInformationReducer from "../reducers/park-information-reducer";
import { getParksFailure, getParksSuccess, getFormVisible, getAddParkSuccess } from './../actions/index';
import { v4 } from "uuid";

const initialState = {
  isLoaded: false,
  parks: [],
  error: null,
  formVisible: false,
  updateParks: false
};

function ParkInformation() {
  const [state, dispatch] = useReducer(parkInformationReducer, initialState);
  
  useEffect(() => {
    fetch('https://localhost:5001/api/Parks/', {
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
  }, [])

  const handleClick = () => {
    const action = getFormVisible();
    dispatch(action);
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
        features: newBody.features,
        id: v4()
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
    .then((jsonifiedResponse) => {
      const action = getAddParkSuccess(jsonifiedResponse);
      dispatch(action);
    })
    .catch((error) => {
      const action = getParksFailure(error);
      dispatch(action);
    });
  }

  const { error, isLoaded, parks, formVisible } = state;
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
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <button onClick={handleClick}>ADD PARK</button>
        {parks.map((item, index) => 
          <ParksList
            key={index}
            name={item.name}
            location={item.location}
            state={item.state}
            type={item.type}
            terrain={item.terrain}
            features={item.features} />
        )}
      </React.Fragment>
    );
  }
}

export default ParkInformation;