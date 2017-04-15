// @flow
import type { Links } from '../store/CommonStoreTypes';

import {
  ADD_URL,
  REMOVE_URL,
  GET_INITIAL_STATE,
  HIDRATE_INITIAL_STATE,
} from '../constants/ActionTypes';

import apiActions from './apiActions';

const initialState = [];

const links = (state: Links = initialState, action: Object) => {
  switch (action.type) {
    case ADD_URL:
      return [action.newLink, ...state];
    case REMOVE_URL:
      return state.filter(l => l.id !== action.id);
    case GET_INITIAL_STATE:
      return apiActions(state, action);
    case HIDRATE_INITIAL_STATE:
      return [...state, ...action.links];
    default:
      return state;
  }
};

export default links;
