import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

export const increment = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};

export const incrementIfOdd = () => {
  return (dispatch, getState) => {
    const { links } = getState();

    if (links % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
};
