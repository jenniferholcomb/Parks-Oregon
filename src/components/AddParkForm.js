import React from "react";
import PropTypes from 'prop-types';

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
    });
  }

  return (
    <React.Fragment>
      <div className="flex items-center justify-center min-h-min ">
        <div className="px-8 py-6 mt-4 text-left bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center">ADD PARK</h1><br /><hr />
          <form onSubmit={handleNewParkSubmission}>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block" htmlFor="name">PARK NAME</label>
                <input
                  type='text'
                  name='name' 
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div>
                <label classNameclass="block" htmlFor="Location">LOCATION</label>
                <input
                  type='text'
                  name='location' 
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div>
                <label className="block" htmlFor="State">STATE</label>
                <input
                  type='text'
                  name='state' 
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div>
                <label className="block" htmlFor="type">TYPE OF PARK</label>
                <input
                  type='text'
                  name='name' 
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div>
                <label class="block" htmlFor="terrain">TERRAIN</label>
                <textarea
                  type='text'
                  name='terrain' 
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div>
                <label className="block" htmlFor="features">PARK FEATURES</label>
                <textarea
                  type='text'
                  name='features' 
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <button className="col-span-2 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 center">ADD NEW PARK</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

AddParkForm.propTypes = {
  onNewParkCreation: PropTypes.func
};

export default AddParkForm;