import * as c from './ActionTypes';

export const getParksSuccess = (parks) => ({
  type: c.GET_PARKS_SUCCESS,
  parks
});

export const getParksFailure = (error) => ({
  type: c.GET_PARKS_FAILURE,
  error
});

export const getFormVisible = () => ({
  type: c.GET_FORM_VISIBLE
});

export const getAddParkSuccess = (parks) => ({
  type: c.GET_ADD_PARK_SUCCESS,
  parks
})