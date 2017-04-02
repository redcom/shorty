// @flow
import type { Links } from '../store/CommonStoreTypes';

import { ADD_URL } from '../constants/ActionTypes';
import link from './link';

const initialState = [];

const links = (state: Links = initialState, action: Object) => {
  switch (action.type) {
    case ADD_URL:
      return [link(undefined, { ...action, id: state.length + 1 }), ...state];
    default:
      return state;
  }
};

export default links;
