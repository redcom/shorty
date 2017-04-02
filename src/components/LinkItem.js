// @flow

import type { Link } from '../store/CommonStoreTypes';
import React from 'react';

const LinkItem = (
  {
    id = 0,
    url = '',
    shortUrl = '',
  }: Link,
) => (
  <div className="linkItem">
    <div>{id}</div>
    <div>{url}</div>
    <div>{shortUrl}</div>
  </div>
);

export default LinkItem;
