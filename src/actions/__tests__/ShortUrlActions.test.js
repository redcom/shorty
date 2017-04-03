import { addUrl, deleteUrl } from '../../actions/ShortUrlActions';

describe('addUrl', () => {
  test('returns a correctly object formated for adding an url', () => {
    const url = 'http://url.url';
    const actual = addUrl(url);
    const expected = {
      type: 'ADD_URL',
      url,
    };

    expect(actual).toEqual(expected);
  });

  test('returns an object when the request param is empty', () => {
    const url = '';
    const actual = addUrl(url);
    const expected = {
      type: 'ADD_URL',
      url,
    };

    expect(actual).toEqual(expected);
  });

  test('returns an object when the request param is empty', () => {
    const url = undefined;
    const actual = addUrl(url);
    const expected = {
      type: 'ADD_URL',
      url,
    };

    expect(actual).toEqual(expected);
  });
});

describe('deleteUrl', () => {
  test('returns a correctly formatted object for deleting an url', () => {
    const id = 0;
    const actual = deleteUrl(id);
    const expected = {
      type: 'REMOVE_URL',
      id,
    };

    expect(actual).toEqual(expected);
  });

  test('returns an object when the request param is empty', () => {
    const id = null;
    const actual = deleteUrl(id);
    const expected = {
      type: 'REMOVE_URL',
      id,
    };

    expect(actual).toEqual(expected);
  });

  test('returns an object when the request param is undefiend', () => {
    const id = undefined;
    const actual = deleteUrl(id);
    const expected = {
      type: 'REMOVE_URL',
      id,
    };

    expect(actual).toEqual(expected);
  });
});
