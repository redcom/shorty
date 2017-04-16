// @flow

import type { ErrorsType } from '../store/CommonStoreTypes';
import { isUrl } from '../helpers/validators';
import { apiAddUrl, apiRemoveUrl } from '../helpers/api';
import {
  ADD_URL,
  ADD_URL_FAILED,
  REMOVE_URL,
  REMOVE_URL_FAILED,
} from '../constants/ActionTypes';

export const addUrlFailed = (error: ErrorsType): Object => ({
  type: ADD_URL_FAILED,
  error,
});
export const removeUrlFailed = (error: ErrorsType): Object => ({
  type: REMOVE_URL_FAILED,
  error,
});

export const addUrl = (url: string): Function =>
  async dispatch => {
    if (!isUrl(url)) {
      return dispatch(addUrlFailed(new Error('Url is not correctly inserted')));
    }
    try {
      const { id, shortUrl } = await apiAddUrl({ url })();
      return dispatch({
        type: ADD_URL,
        newLink: {
          id,
          shortUrl,
          url,
        },
      });
    } catch (error) {
      return dispatch(addUrlFailed(error));
    }
  };

export const deleteUrl = (id: number): Function =>
  async dispatch => {
    if (!id) {
      dispatch(removeUrlFailed(new Error('Url can not be removed')));
    }
    try {
      await apiRemoveUrl({ id })();
      dispatch({
        type: REMOVE_URL,
        id,
      });
    } catch (error) {
      dispatch(removeUrlFailed(error));
    }
  };
