import React from "react";
import Park from "./Park";
import PropTypes from 'prop-types';

function ParksList(props) {
  return (
    <React.Fragment>
      {props.parksList.map((park) => 
        <Park 
          whenParkClicked= {props.onParkSelection}
          name={park.name}
          location={park.location}
          state={park.state}
          type={park.type}
          terrain={park.terrain}
          features={park.features}
          parkId={park.parkId}
          key={park.parkId} />
      )}
    </React.Fragment>
  );
}

ParksList.propTypes = {
  park: PropTypes.array,
  whenParkClicked: PropTypes.func
};

export default ParksList;