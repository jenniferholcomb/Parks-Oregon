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
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
};

export default parkInformationReducer;