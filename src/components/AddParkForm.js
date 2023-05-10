import React from "react";
import PropTypes from 'prop-types';

function AddParkForm(props) {

  function handleNewParkSubmission(event) {
    event.preventDefault();
    props.onNewParkCreation({
      name: event.target.name.value,
      location: event.target.name.value,
      state: event.target.state.value,
      type: event.target.type.value,
      terrain: event.target.terrain.value,
      features: event.target.features.value,
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewParkSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Park Name' required/>
        <input 
          type='text'
          name='location'
          placeholder='Location' required/>
        <input 
          type='text'
          name='state'
          placeholder='State' required/>
        <input
          type='text'
          name='type'
          placeholder='Type of park' required/>
        <textarea 
          name='terrain'
          placeholder='Terrain' required/>
        <textarea
          name='features'
          placeholder='Describe key features of this park.' required/>
        <button type='submit'>ADD PARK</button>
      </form>
    </React.Fragment>
  );
}

AddParkForm.propTypes = {
  onNewParkCreation: PropTypes.func
};

export default AddParkForm;