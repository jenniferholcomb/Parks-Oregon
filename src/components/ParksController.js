import React from "react";
import PropTypes from 'prop-types';

function ParksController(props) {
  // props is an array, want to print data. Don't need to save data, will post to api
  return (
    <React.Fragment>

    </React.Fragment>
  );
}

ParksController.propTypes = {
  parks: PropTypes.array
};

export default ParksController;