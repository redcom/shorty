// @flow

import { ADD_URL, REMOVE_URL } from '../constants/ActionTypes';

export const addUrl = (url: string): Object => {
  return {
    type: ADD_URL,
    url,
  };
};

export const deleteUrl = (id: number): Object => {
  return {
    type: REMOVE_URL,
    id,
  };
};
