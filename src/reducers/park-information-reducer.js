import * as c from '../actions/ActionTypes';

const parkInformationReducer = (state, action) => {
  switch (action.type) {
    case c.GET_PARKS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        parks: action.parks
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
        formVisible: false
      }
    case c.GET_EDIT_PARK_SUCCESS:
      return {
        ...state,
        editFormVisible: false,
        updateParks: true
      }
    case c.GET_PARK_SELECTION:
      return {
        ...state,
        parkSelected: action.park
      }
    case c.GET_EDIT_FORM_VISIBLE:
      return {
        ...state,
        editFormVisible: true
      }
    case c.GET_DELETE_SUCCESS:
      return {
        ...state,
        parkSelected: null,
        updateParks: true
      }
    case c.GET_RESET:
      return {
        ...state,
        formVisible: false,
        editFormVisible: false,
        parkSelected: null
      }
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
};

export default parkInformationReducer;