// @flow
import type { Link } from '../store/CommonStoreTypes';

import { ADD_URL, REMOVE_URL } from '../constants/ActionTypes';

const link = (state: ?Link, action: Object) => {
  switch (action.type) {
    case ADD_URL:
      const { url = '' } = action;
      // TODO check if the url is actually a url and add a error state to be displayed
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
