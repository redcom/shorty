// @flow

import type { Links } from '../store/CommonStoreTypes';
import { GET_INITIAL_STATE } from '../constants/ActionTypes';
import { API_URL } from '../config';

const opts = {
  mode: 'cors',
  headers: new Headers({
    Accept: 'application/json',
  }),
};
const fetchStateFromServer = opts => async () => {
    const response = await fetch(`${API_URL}/links`, opts);
    const body = await response.json();
    return body;
  };

const apiActions = (state: Links, action: Object) => {
  switch (action.type) {
    case GET_INITIAL_STATE:
      fetchStateFromServer(opts)();
      return state;
    default:
      return state;
  }
};

export default apiActions;
