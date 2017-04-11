// @flow
import type { ErrorsType } from '../store/CommonStoreTypes';

import { ADD_URL_FAILED } from '../constants/ActionTypes';

const initialState = {};

const links = (state: ErrorsType = initialState, action: Object) => {
  switch (action.type) {
    case ADD_URL_FAILED:
      return { error: action.error };
    default:
      return state;
  }
};

export default links;
