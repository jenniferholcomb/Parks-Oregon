import React from "react";
import PropTypes from 'prop-types';
import './../index.css';

function ParkDetail(props) {
  const { park, onClickingDelete } = props;
  console.log(park.current[0].name);
  return (
    <React.Fragment>
      <div className="grid grid-cols-8">
        <div className="flex items-center justify-center min-h-min ">        
        <div className="ml-6 mt-2">
          <button onClick={props.onClickingEdit}
            className="mt-2 px-6 py-2 text-white bg-blue-600 rounded-lg w-48 hover:bg-blue-900">UPDATE PARK</button>
         <button onClick={ () => onClickingDelete(park.current[0].parkId) }
            className="mt-2 px-6 py-2 text-white bg-blue-600 rounded-lg w-48 hover:bg-blue-900">DELETE PARK</button><br/><br/>
         <button onClick={props.onReturnToList}
            className="mt-2 px-6 py-2 text-white bg-blue-600 rounded-lg w-48 hover:bg-blue-900">BACK TO LIST</button>
        </div> 
        <div className="px-8 py-6 mt-4 text-left bg-white rounded-2xl shadow-lg">
      <h1 className="text-lg text-black font-semibold">Park Detail</h1>
      <h3>Park Name: {park.current[0].name}</h3>
      <p className='text-slate-500 font-medium'><strong>Park Location: </strong>{park.current[0].location}<br />
         <strong>State: </strong>{park.current[0].state}</p>
      <p><strong>Type of Park: </strong>{park.current[0].type}</p>
      <p><strong>Terrain: </strong>{park.current[0].terrain}<br />
         <strong>Park Features: </strong>{park.current[0].features}</p>
         </div>
        </div>
      </div>
    </React.Fragment>
  );
}

ParkDetail.propTypes = {
  park: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onReturnToList: PropTypes.func
};

export default ParkDetail;
