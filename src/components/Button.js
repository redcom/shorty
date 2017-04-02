import styled from 'styled-components';
import {
  defaultFontSize,
  defaultSpaceBetweenElements,
  defaultPrimaryActionColor,
} from '../styles/vars';

const Button = styled.button`
  margin: ${defaultSpaceBetweenElements};;
  font-size: ${defaultFontSize};
  border: none;
  background: ${defaultPrimaryActionColor};
`;

export default Button;
