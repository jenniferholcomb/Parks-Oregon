import * as c from '../actions/ActionTypes';

const parkInformationReducer = (state, action) => {
  switch (action.type) {
    case c.GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.credentials
      };
    case c.GET_PARKS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        parks: action.parks,
        tokenLoaded: false
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
    case c.GET_EDIT_PARK_SUCCESS:
      console.log(state.parkSelected)
      return {
        ...state,
        editFormVisible: false,
        parkSelected: action.park
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
    case c.GET_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.token
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