// @flow

import React from 'react';
import { connect } from 'react-redux';
import { ShortUrl } from '../components';
import {addUrl} from '../actions/ShortUrlActions';

const ShortUrlContainer = ({
  dispatch
}: {
  dispatch: Function
}) => {

  const onAddUrl = (url) => {
    dispatch(addUrl(url));
  };

  return (
    <ShortUrl
      onAddUrl={onAddUrl}
    />
  )
}

export default connect()(ShortUrlContainer);
