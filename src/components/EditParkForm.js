import React from "react";
import PropTypes from 'prop-types';

function EditParkForm(props) {

  const { park } = props;

  function handleEditParkSubmission(event) {
    event.preventDefault();
    props.onEditParkCreation({
      name: event.target.name.value,
      location: event.target.name.value,
      state: event.target.state.value,
      type: event.target.type.value,
      terrain: event.target.terrain.value,
      features: event.target.features.value,
      parkId: park[0].parkId
    });
  }

  return (

    <React.Fragment>
      <div className="flex items-center justify-center min-h-min ">
        <div className="px-8 py-6 mt-4 text-left bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center">UPDATE PARK</h1><br /><hr />
          <form onSubmit={handleEditParkSubmission}>
            <div class="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label class="block" for="name">PARK NAME</label>
                <input
                  type='text'
                  name='name'
                  placeholder={park[0].name} 
                  defaultValue={park[0].name}
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div>
                <label class="block" for="Location">LOCATION</label>
                <input
                  type='text'
                  name='location'
                  placeholder={park[0].location} 
                  defaultValue={park[0].location}            
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div>
                <label class="block" for="State">STATE</label>
                <input
                  type='text'
                  name='state'
                  placeholder={park[0].state}
                  defaultValue={park[0].state}                   
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div>
                <label class="block" for="type">TYPE OF PARK</label>
                <input
                  type='text'
                  name='type'
                  placeholder={park[0].type}
                  defaultValue={park[0].type}                
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div>
                <label class="block" for="terrain">TERRAIN</label>
                <textarea
                  name='terrain'
                  placeholder={park[0].terrain}
                  defaultValue={park[0].terrain} 
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div>
                <label class="block" for="features">PARK FEATURES</label>
                <textarea
                  name='features'
                  placeholder={park[0].features}
                  defaultValue={park[0].features}                 
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <button class="col-span-2 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 center">UPDATE PARK</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

EditParkForm.propTypes = {
  park: PropTypes.array,
  onEditParkCreation: PropTypes.func
};

export default EditParkForm;