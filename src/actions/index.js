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

export const getParkSelection = (park) => ({
  type: c.GET_PARK_SELECTION,
  park
});

export const getEditParkSuccess = (park) => ({
  type: c.GET_EDIT_PARK_SUCCESS,
  park
});

export const getEditFormVisible = () => ({
  type: c.GET_EDIT_FORM_VISIBLE
});

export const getReset = () => ({
  type: c.GET_RESET
});
