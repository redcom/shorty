// @flow

import React from 'react';
import { connect } from 'react-redux';
import { ShortUrl } from '../components';
import { addUrl, addUrlFailed } from '../actions/ShortUrlActions';

const ShortUrlContainer = (
  {
    dispatch,
  }: {
    dispatch: Function,
  },
) => {
  const onAddUrl = url => {
    try {
      dispatch(addUrl(url));
    } catch (error) {
      dispatch(addUrlFailed(error));
    }
  };

  return <ShortUrl onAddUrl={onAddUrl} />;
};

export default connect()(ShortUrlContainer);
