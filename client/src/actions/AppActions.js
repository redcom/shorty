// @flow
import { GET_INITIAL_STATE } from '../constants/ActionTypes';

export const getInitialState = (): Object => {
  return {
    type: GET_INITIAL_STATE,
  };
};
