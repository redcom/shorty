import React from 'react';
import { Wrapper } from '../components';
import {
  ShortUrlContainer,
  LinksContainer,
} from '../containers';

const AppContainer = () => (
  <div>
    <Wrapper>
      <ShortUrlContainer />
    </Wrapper>
    <Wrapper>
      <h4>List of links</h4>
      <LinksContainer />
    </Wrapper>
 </div>
);

export default AppContainer;
