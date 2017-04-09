// @flow
import type { Links } from '../store/CommonStoreTypes';

import {
  ADD_URL,
  REMOVE_URL,
  GET_INITIAL_STATE,
} from '../constants/ActionTypes';

import link from './link';
import apiActions from './apiActions';

const initialState = [];

const links = (state: Links = initialState, action: Object) => {
  switch (action.type) {
    case ADD_URL:
      return ([link(undefined, { ...action, id: state.length + 1 }), ...state]);
    case REMOVE_URL:
      return state.filter(l => link(l, action));
    case GET_INITIAL_STATE:
      return apiActions(state, action);
    default:
      return state;
  }
};

export default links;
