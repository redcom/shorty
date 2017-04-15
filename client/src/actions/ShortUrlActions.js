// @flow

import type { ErrorsType } from '../store/CommonStoreTypes';
import { isUrl } from '../helpers/validators';
import { apiAddUrl } from '../helpers/api';
import { ADD_URL, ADD_URL_FAILED, REMOVE_URL } from '../constants/ActionTypes';

export const addUrlFailed = (error: ErrorsType): Object => ({
  type: ADD_URL_FAILED,
  error,
});

export const addUrl = (url: string): Object =>
  async dispatch => {
    if (!isUrl(url)) {
      dispatch(addUrlFailed(new Error('Url is not correctly inserted')));
    }
    try {
      const { id, shortUrl } = await apiAddUrl({ url })();
      dispatch({
        type: ADD_URL,
        newLink: {
          id,
          shortUrl,
          url,
        },
      });
    } catch (error) {
      dispatch(addUrlFailed(error));
    }
  };

export const deleteUrl = (id: number): Object => ({
  type: REMOVE_URL,
  id,
});
