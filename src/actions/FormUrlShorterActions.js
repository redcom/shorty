import { ADD_URL } from '../constants/ActionTypes';

export const addUrl = () => {
  return {
    type: ADD_URL,
  };
};

export const getUrl = () => {
  return (dispatch, getState) => {
    const { links } = getState();

    if (links % 2 === 0) {
      return;
    }

    dispatch(addUrl());
  };
};
