import { ADD_URL } from '../constants/ActionTypes';

const initialState = [];

export default function links(state = initialState, action) {
  switch (action.type) {
    case ADD_URL:
      console.log(action.url);
      return [action.url, ...state];
    default:
      return state;
  }
}
