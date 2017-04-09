import styled from 'styled-components';

import {
  defaultSectionPadding,
  defaultSpaceInBetween,
  defaultSectionBackgroundColor,
} from '../styles/vars';

// Create a <Wrapper> react component that renders a <section> with a specific backfeound-color
const Wrapper = styled.section`
  margin: ${defaultSpaceInBetween};
  padding: ${defaultSectionPadding};
  background: ${defaultSectionBackgroundColor};
`;

export default Wrapper;
