import link from '../link';
import { ADD_URL, REMOVE_URL } from '../../constants/ActionTypes';

describe('link() -> reducer: ADD_URL', () => {
  test('a new link entry is returned', () => {
    const state = undefined;
    const action = { id: 0, type: ADD_URL, url: 'http://some.url' };
    const actual = link(state, action);
    const expected = {
      id: action.id,
      url: action.url,
      shortUrl: action.url,
    };

    expect(actual).toEqual(expected);
  });

  test('does not return link for empty strings', () => {
    const state = undefined;
    const action = { type: ADD_URL, url: '' };
    const actual = link(state, action);
    const expected = undefined;

    expect(actual).toEqual(expected);
  });

  test('does not return link for url formed from spaces', () => {
    const state = undefined;
    const action = { type: ADD_URL, url: '  ' };
    const actual = link(state, action);
    const expected = undefined;

    expect(actual).toEqual(expected);
  });

  test('does not return link for url undefined', () => {
    const state = undefined;
    const action = { type: ADD_URL, url: '  ' };
    const actual = link(state, action);
    const expected = undefined;

    expect(actual).toEqual(expected);
  });

  test('does not return link for null url', () => {
    const state = null;
    const action = { type: ADD_URL, url: '  ' };
    const actual = link(state, action);
    const expected = undefined;

    expect(actual).toEqual(expected);
  });
});

describe('link() -> reducer:  default', () => {
  test('returns the state that is given to the reducer', () => {
    const state = undefined;
    const action = { type: '' };
    const actual = link(state, action);
    const expected = state;

    expect(actual).toEqual(expected);
  });

  test('returns the store including items existing items in the store', () => {
    const state = { id: 1, url: 'http://aaa.aaa', shortUrl: '' };
    const action = { type: '' };
    const actual = link(state, action);
    const expected = state;

    expect(actual).toEqual(expected);
  });
});

describe('link() -> reducer:  REMOVE_URL', () => {
  test('returns true if the link item should be kept', () => {
    const state = { id: 1, url: 'http://aaa.aaa', shortUrl: '' };
    const action = { type: REMOVE_URL, id: 0 };
    const actual = link(state, action);
    const expected = true;

    expect(actual).toEqual(expected);
  });

  test('returns false if the link item should be deleted', () => {
    const state = { id: 1, url: 'http://aaa.aaa', shortUrl: '' };
    const action = { type: REMOVE_URL, id: 1 };
    const actual = link(state, action);
    const expected = false;

    expect(actual).toEqual(expected);
  });
});
