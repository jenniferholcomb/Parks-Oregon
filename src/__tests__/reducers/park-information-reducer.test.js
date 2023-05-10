import parkInformationReducer from './../../reducers/park-information-reducer';
import * as c from './../../actions/ActionTypes';

describe('parkInformationReducer', () => {

  let action;

  const initialState = {
    isLoaded: false,
    parks: [],
    error: null,
    formVisible: false,
    updateParks: false
  };

  test('should successfully throw a new error if a non-matching action type is passed into it', () => {
    expect(
      () => {
        parkInformationReducer(initialState, {type: null})
      }
    ).toThrowError("There is no action matching null.");
  });

  test('successfully getting parks should change isLoaded to true and updateParks to false', () => {
    const parks = "A park";
    const updateParks = true;
    action = {
      type: c.GET_PARKS_SUCCESS,
      parks,
      updateParks
    };

    expect(parkInformationReducer(initialState, action)).toEqual({
      isLoaded: true,
      parks: "A park",
      error: null,
      formVisible: false,
      updateParks: false
    });
  });

  test('failing to get parks should change isLoaded to true and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_PARKS_FAILURE,
      error
    };

    expect(parkInformationReducer(initialState, action)).toEqual({
      isLoaded: true,
      parks: [],
      error: "An error",
      formVisible: false,
      updateParks: false
    });
  });

  test('should succesfully change formVisible to true', () => {
    action = {
      type: c.GET_FORM_VISIBLE
    };

    expect(parkInformationReducer(initialState, action)).toEqual({
      isLoaded: false,
      parks: [],
      error: null,
      formVisible: true,
      updateParks: false
    });
  });

  test('should successfully change formVisible to false, and update Parks to true', () => {
    const updateParks = false;
    action = {
      type: c.GET_ADD_PARK_SUCCESS,
      updateParks
    };

    expect(parkInformationReducer(initialState, action)).toEqual({
      isLoaded: false,
      parks: [],
      error: null,
      parks: [],
      formVisible: false,
      updateParks: true
    });
  });

})