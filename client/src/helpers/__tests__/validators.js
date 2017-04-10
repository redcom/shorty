import { isUrl } from '../validators';

describe('isUrl()', () => {
  test('string is an url', () => {
    const url = 'https://www.example.com/foo/?bar=baz&inga=42&quux';
    const actual = isUrl(url);
    const expected = true;

    expect(actual).toBe(expected);
  });

  test('empty string is not an url', () => {
    const url = '    ';
    const actual = isUrl(url);
    const expected = false;

    expect(actual).toBe(expected);
  });

  test('string is not an url', () => {
    const url = 'http s://www.example.com/foo/?bar=baz&inga=42&quux';
    const actual = isUrl(url);
    const expected = false;

    expect(actual).toBe(expected);
  });
});
