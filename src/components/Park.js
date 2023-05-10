import React from "react";
import PropTypes from 'prop-types';

function Park(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenParkClicked(props.parkId)}>
        <h3>{props.name}</h3>
        <p>{props.location}, {props.state}</p>
        <p>{props.type}</p>
        <p>{props.terrain}</p>
        <p>{props.features}</p>
      </div>
    </React.Fragment>
  );
}

Park.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  state: PropTypes.string,
  type: PropTypes.string,
  terrain: PropTypes.string,
  features: PropTypes.string,
  whenParkClicked: PropTypes.func
};

export default Park;