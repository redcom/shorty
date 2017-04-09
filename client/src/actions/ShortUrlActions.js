// @flow

import { ADD_URL, REMOVE_URL } from '../constants/ActionTypes';

export const addUrl = (url: string): Object => ({
  type: ADD_URL,
  url,
});

export const deleteUrl = (id: number): Object => ({
  type: REMOVE_URL,
  id,
});
