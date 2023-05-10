import React from "react";
import PropTypes from 'prop-types';

function EditParkForm(props) {

  const { park } = props;
  console.log(park);
  function handleEditParkSubmission(event) {
    event.preventDefault();
    props.onEditParkCreation({
      name: event.target.name.value,
      location: event.target.name.value,
      state: event.target.state.value,
      type: event.target.type.value,
      terrain: event.target.terrain.value,
      features: event.target.features.value,
      parkId: park[0].parkId
    });
  }

  return (

    <React.Fragment>
      <form onSubmit={handleEditParkSubmission}>  
        <input
          label='name'
          type='text'
          name='name'
          placeholder={park[0].name} 
          defaultValue={park[0].name} required/>
        <input 
          label='location'
          type='text'
          name='location'
          placeholder={park[0].location} 
          defaultValue={park[0].location} required/>
        <input 
          label='state'
          type={park[0].state}
          name='state'
          placeholder={park[0].state}
          defaultValue={park[0].state}  required/>
        <input
          label='type'
          type='text'
          name='type'
          placeholder={park[0].type}
          defaultValue={park[0].type}  required/>
        <textarea 
          label='terrain'
          name='terrain'
          placeholder={park[0].terrain}
          defaultValue={park[0].terrain}  required/>
        <textarea
          label='features'
          name='features'
          placeholder={park[0].features}
          defaultValue={park[0].features}  required/>
        <button type='submit'>UPDATE PARK</button>
      </form>
    </React.Fragment>
  );
}

EditParkForm.propTypes = {
  park: PropTypes.array,
  onEditParkCreation: PropTypes.func
};

export default EditParkForm;