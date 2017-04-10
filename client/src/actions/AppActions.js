// @flow

import type { Links } from '../store/CommonStoreTypes';

import {
  GET_INITIAL_STATE,
  HIDRATE_INITIAL_STATE,
} from '../constants/ActionTypes';

export const hidrateStoreWithState = (state: Links): Object => ({
  type: HIDRATE_INITIAL_STATE,
  links: state,
});
export const getInitialState = (cb: Function): Object => ({
  type: GET_INITIAL_STATE,
  cb,
});
