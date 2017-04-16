import { randomBytes } from 'crypto';

const numberGenerator = size => Math.floor(Math.random() * size + 1);

const STRING = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';

export const shortRandomString = size => {
  let str = '';
  while (str.length < size) {
    str += STRING[
      randomBytes(size)[numberGenerator(size)] & 0x30 // eslint-disable-line no-bitwise
    ];
  }
  return str;
};
