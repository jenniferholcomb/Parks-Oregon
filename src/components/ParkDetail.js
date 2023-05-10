import React from "react";
import PropTypes from 'prop-types';

function ParkDetail(props) {
  const { park, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Park Detail</h1>
      <h3>Park Name: {park[0].name}</h3>
      <p><strong>Park Location: </strong>{park[0].location}<br />
         <strong>State: </strong>{park[0].state}</p>
      <p><strong>Type of Park: </strong>{park[0].type}</p>
      <p><strong>Terrain: </strong>{park[0].terrain}<br />
         <strong>Park Features: </strong>{park[0].features}</p>
      <hr />
      <button onClick={props.onClickingEdit}>UPDATE PARK</button>
      <button onClick={ () => onClickingDelete(park[0].parkId) }>DELETE PARK</button>
      <br />
    </React.Fragment>
  );
}

ParkDetail.propTypes = {
  park: PropTypes.array,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ParkDetail;
