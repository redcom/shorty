// @flow

import type { Link } from '../store/CommonStoreTypes';
import React from 'react';

import styled from 'styled-components';
import { defaultSpaceInBetween } from '../styles/vars';

const Item = styled.div`
  display: flex;
  padding: ${defaultSpaceInBetween};
  &:nth-child(2n+0) {
    background: #f0f0f0;
  }
}
`;

//TODO Drop itemId and clip long url on small screen size using media queries
const ItemId = styled.div`
  flex-grow: 1;
`;
const ItemLongUrl = styled.div`
  flex-grow: 3;
  min-width:300px;
`;
const ItemShortUrl = styled.div`
  flex-grow: 3;
  min-width: 200;
`;

const ItemActions = styled.div`
  flex-grow: 2;
`;

const LinkItem = (
  {
    id = 0,
    url = '',
    shortUrl = '',
  }: Link,
) => (
  <Item>
    <ItemId>{id}</ItemId>
    <ItemLongUrl>{url}</ItemLongUrl>
    <ItemShortUrl>{shortUrl}</ItemShortUrl>
    <ItemActions>Actions</ItemActions>
  </Item>
);

export default LinkItem;
