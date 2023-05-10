import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';
import { v4 } from "uuid";

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
      parkId: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewParkSubmission}
                    buttonText="ADD PARK" />
    </React.Fragment>
  );
}

AddParkForm.propTypes = {
  onNewParkCreation: PropTypes.func
};

export default AddParkForm;