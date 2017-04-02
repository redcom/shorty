import React from 'react';
import { Wrapper } from '../components';
import { ShortUrlContainer, LinksContainer } from '../containers';

const AppContainer = () => (
  <div>
    <Wrapper>
      <ShortUrlContainer />
    </Wrapper>
    <Wrapper>
      <LinksContainer />
    </Wrapper>
  </div>
);

export default AppContainer;
