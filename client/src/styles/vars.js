import { keyframes } from 'styled-components';

export const defaultSectionPadding = '0.5em 1em';
export const defaultSpaceInBetween = '1em 0';
export const defaultSpaceBetweenElements = '0em 1em';
export const defaultSectionBackgroundColor = '#f6f8fa';

export const defaultFontSize = '1em';
export const defaultBorderStyle = '1px solid #797979';
export const defaultPrimaryActionColor = '#0ff';

export const slideInAnimation = keyframes`
  0% {
    transform: translateX(-10%);
    opacity: 0.4;
  }
  50% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
