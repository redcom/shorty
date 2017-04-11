import React from 'react';
import { Wrapper } from '../components';
import {
  ShortUrlContainer,
  LinksContainer,
  ErrorContainer,
} from '../containers';

const AppContainer = () => (
  <div>
    <Wrapper>
      <ShortUrlContainer />
      <ErrorContainer />
    </Wrapper>
    <Wrapper>
      <LinksContainer />
    </Wrapper>
  </div>
);

export default AppContainer;
