import { ADD_URL } from '../constants/ActionTypes';

const initialState = [];

const links = (state = initialState, action) => {
  switch (action.type) {
    case ADD_URL:
      return [
        action.url,
        ...state
      ];
    default:
      return state;
  }
};

export default links;
