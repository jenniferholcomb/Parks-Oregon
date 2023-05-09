import parkInformationReducer from './../../reducers/park-information-reducer';
import * as c from './../../actions/ActionTypes';

describe('parkInformationReducer', () => {

  let action;

  const initialState = {
    isLoaded: false,
    parks: [],
    error: null
  };

  test('should successfully throw a new error if a non-matching action type is passed into it', () => {
    expect(
      () => {
        parkInformationReducer(initialState, {type: null})
      }
    ).toThrowError("There is no action matching null.");
  });

  test('successfully getting parks should change isLoaded to true and update parks', () => {
    const parks = "A park";
    action = {
      type: c.GET_PARKS_SUCCESS,
      parks
    };

    expect(parkInformationReducer(initialState, action)).toEqual({
      isLoaded: true,
      parks: "A park",
      error: null
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
      error: "An error"
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
      formVisible: true
    })
  })
})