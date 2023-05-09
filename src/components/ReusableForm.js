import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Park Name' />
        <input 
          type='text'
          name='location'
          placeholder='Location' />
        <input 
          type='text'
          name='state'
          placeholder='State' />
        <input
          type='text'
          name='type'
          placeholder='Type of park' />
        <textarea 
          name='terrain'
          placeholder='Terrain' />
        <textarea
          name='features'
          placeholder='Describe key features of this park.' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;