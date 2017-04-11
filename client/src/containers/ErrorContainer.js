// @flow

import type { State, ErrorsType } from '../store/CommonStoreTypes';
import React from 'react';
import { connect } from 'react-redux';
import { Errors } from '../components';

const ErrorContainer = (
  {
    error,
  }: ErrorsType,
) => {
  if (!error.error) return null;
  return (
    <Errors>
      URL is malformed or could not be ziped!
    </Errors>
  );
};

export default connect((state: State) => ({ error: state.error }))(
  ErrorContainer,
);
