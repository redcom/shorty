// @flow
import type {Link} from '../store/CommonStoreTypes'

import { ADD_URL } from '../constants/ActionTypes';

const link = (
  state:?Link,
  action:Object
) => {
  switch (action.type) {
    case ADD_URL:
      return {
        id: action.id,
        url: action.url,
        shortUrl: action.url,
      };
    default:
      return state;
  }
};

export default link;
