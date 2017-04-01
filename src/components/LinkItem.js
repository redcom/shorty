// @flow

import React from 'react';

const LinkItem = ({
  url='',
  shortUrl='',
}:{
  url: string,
  shortUrl: string,
}) => (
  <div className='linkItem'>
    <div>{url}</div>
    <div>{shortUrl}</div>
  </div>
);


export default LinkItem;
