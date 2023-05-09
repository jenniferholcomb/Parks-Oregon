import React from "react";
import PropTypes from 'prop-types';

function ParksList(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.location}, {props.state}</p>
      <p>{props.type}</p>
      <p>{props.terrain}</p>
      <p>{props.features}</p>
    </React.Fragment>
  );
}

ParksList.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  state: PropTypes.string,
  type: PropTypes.string,
  terrain: PropTypes.string,
  features: PropTypes.string
};

export default ParksList;