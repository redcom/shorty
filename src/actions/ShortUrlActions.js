import { ADD_URL } from '../constants/ActionTypes';

export const addUrl = url => {
  return {
    type: ADD_URL,
    url,
  };
};
