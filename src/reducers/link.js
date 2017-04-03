// @flow
import type { Link } from '../store/CommonStoreTypes';

import { ADD_URL, REMOVE_URL } from '../constants/ActionTypes';

const link = (state: ?Link, action: Object) => {
  switch (action.type) {
    case ADD_URL:
      const { url = '' } = action;
      if (!!url.trim()) {
        return {
          id: action.id,
          url: action.url,
          shortUrl: action.url,
        };
      }
      return undefined;
    case REMOVE_URL:
      return state && state.id !== action.id;
    default:
      return state;
  }
};

export default link;
