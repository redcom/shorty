// @flow
import type { Link } from '../store/CommonStoreTypes';
import { isUrl } from '../helpers/validators';

import { ADD_URL, REMOVE_URL } from '../constants/ActionTypes';

const addUrl = ({ url = '', id = 0 }) => {
  // TODO check if the url is actually a url and add a error state to be displayed
  if (isUrl(url)) {
    return {
      id,
      url,
      shortUrl: url,
    };
  }
  return undefined;
};
const link = (state: ?Link, action: Object) => {
  switch (action.type) {
    case ADD_URL:
      return addUrl(action);
    case REMOVE_URL:
      return state && state.id !== action.id;
    default:
      return state;
  }
};

export default link;
