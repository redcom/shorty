import links from '../links';

import { ADD_URL, REMOVE_URL } from '../../constants/ActionTypes';

describe('links() -> reducer: ADD_URL', () => {
  test('store contain newly addedd link', () => {
    const state = [];
    const action = { type: ADD_URL, url: 'http://some.url' };
    const actual = links(state, action);
    const expected = [
      {
        id: state.length + 1,
        url: action.url,
        shortUrl: action.url,
      },
    ];

    expect(actual).toEqual(expected);
  });

  test('newly added url received a property "id" equal to the length of store + 1', () => {
    const state = [{}, {}];
    const action = { type: ADD_URL, url: 'http://some.url' };
    const actual = links(state, action);
    const expected = [
      {
        id: state.length + 1,
        url: action.url,
        shortUrl: action.url,
      },
      ...state,
    ];

    expect(actual).toEqual(expected);
  });

  test('added url is prepend to the store', () => {
    const state = [{}, {}];
    const action = { type: ADD_URL, url: 'http://some.url' };
    const actual = links(state, action);
    const expected = {
      id: state.length + 1,
      url: action.url,
      shortUrl: action.url,
    };

    expect(actual[0]).toEqual(expected);
  });
});

describe('links() -> reducer: REMOVE_URL', () => {
  test('corresponding item is deleted from the store', () => {
    const state = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const action = { type: REMOVE_URL, id: 2 };
    const actual = links(state, action);
    const expected = [{ id: 1 }, { id: 3 }];

    expect(actual).toEqual(expected);
  });

  test('no item is deleted if item is not found', () => {
    const state = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const action = { type: REMOVE_URL, id: 8 };
    const actual = links(state, action);
    const expected = [{ id: 1 }, { id: 2 }, { id: 3 }];

    expect(actual).toEqual(expected);
  });

  test('the store is immutable', () => {
    const state = [{ id: 1 }];
    const action = { type: REMOVE_URL, id: 8 };
    const actual = links(state, action);
    const expected = [{ id: 1 }];

    expect(actual).toEqual(expected);
    expect(actual).not.toBe(state);
  });
});

describe('links() -> reducer: default', () => {
  test('store is not changed when no action matches', () => {
    const state = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const action = { type: 'NOTHING', id: 2, url: 'abbaa' };
    const actual = links(state, action);
    const expected = state;

    expect(actual).toEqual(expected);
    expect(actual).toBe(expected);
  });
});
