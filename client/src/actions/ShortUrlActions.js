// @flow

import type { ErrorsType } from '../store/CommonStoreTypes';

import { ADD_URL, ADD_URL_FAILED, REMOVE_URL } from '../constants/ActionTypes';

export const addUrl = (url: string): Object => ({
  type: ADD_URL,
  url,
});

export const deleteUrl = (id: number): Object => ({
  type: REMOVE_URL,
  id,
});

export const addUrlFailed = (error: ErrorsType): Object => ({
  type: ADD_URL_FAILED,
  error,
});
