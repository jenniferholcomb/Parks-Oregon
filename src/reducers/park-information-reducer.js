import * as c from '../actions/ActionTypes';

const parkInformationReducer = (state, action) => {
  switch (action.type) {
    case c.GET_PARKS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        parks: action.parks,
        updateParks: false
      };
    case c.GET_PARKS_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error
      };
    case c.GET_FORM_VISIBLE:
      return {
        ...state,
        formVisible: true
      }
    case c.GET_ADD_PARK_SUCCESS:
      return {
        ...state,
        formVisible: false,
        updateParks: true
      }
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
};

export default parkInformationReducer;