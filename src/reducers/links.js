// @flow
import type { Links } from '../store/CommonStoreTypes';

import { ADD_URL } from '../constants/ActionTypes';
import link from './link';

const initialState = [
  {
    id: 0,
    url: 'http://khlahdsklhalkhfdalksdjhfs.com',
    shortUrl: 'asdasdasd.com',
  },
  {
    id: 1,
    url: 'http://khlahdsklhalkhfdalksdjhfs.com',
    shortUrl: 'asdasdasd.com',
  },
  {
    id: 2,
    url: 'http://khlahdsklhalkhfdalksdjhfs.com',
    shortUrl: 'asdasdasd.com',
  },
  {
    id: 3,
    url: 'http://khlahdsklhalkhfdalksdjhfs.com',
    shortUrl: 'asdasdasd.com',
  },
  {
    id: 4,
    url: 'http://khlahdsklhalkhfdalksdjhfs.com',
    shortUrl: 'asdasdasd.com',
  },
];

const links = (state: Links = initialState, action: Object) => {
  switch (action.type) {
    case ADD_URL:
      return [link(undefined, { ...action, id: state.length + 1 }), ...state];
    default:
      return state;
  }
};

export default links;
