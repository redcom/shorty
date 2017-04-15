jest.mock('../../helpers/api');
jest.mock('../../helpers/validators');

import { deleteUrl } from '../../actions/ShortUrlActions';

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
