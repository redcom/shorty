// @flow
import {
  GET_INITIAL_STATE,
  HIDRATE_INITIAL_STATE,
} from '../constants/ActionTypes';

export const hidrateStoreWithState = (state): Object => ({
  type: HIDRATE_INITIAL_STATE,
  links: state,
});
export const getInitialState = (cb): Object => ({
  type: GET_INITIAL_STATE,
  cb,
});
