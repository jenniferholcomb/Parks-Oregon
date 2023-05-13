import React from "react";
import PropTypes from 'prop-types';

function Park(props) {
  return (
    <React.Fragment>
      <div className="w-80 h-40 rounded-2xl hover:outline-4 hover:scale-105 shadow-xl p-8 bg-white">
        <div onClick = {() => props.whenParkClicked(props.parkId)}>
          <div className="">
            <h3 className="flex justify-center text-xl font-bold text-center">{props.name}</h3>
            <p className="text-base text-center">{props.location}, {props.state}</p>
            <p className="text-sm text-center"><strong>TYPE:</strong> {props.type}</p>
          </div>
        </div>
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