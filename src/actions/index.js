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

export const getAddParkSuccess = () => ({
  type: c.GET_ADD_PARK_SUCCESS
});

export const getParkSelection = (park) => ({
  type: c.GET_PARK_SELECTION,
  park
});

export const getEditParkSuccess = () => ({
  type: c.GET_EDIT_PARK_SUCCESS
});

export const getEditFormVisible = () => ({
  type: c.GET_EDIT_FORM_VISIBLE
});

export const getReset = () => ({
  type: c.GET_RESET
});

export const getDeleteSuccess = () => ({
  type: c.GET_DELETE_SUCCESS
});