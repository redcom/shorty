import React from 'react';
import {
  defaultBorderStyle,
  defaultFontSize,
  defaultSpaceBetweenElements,
  defaultPrimaryActionColor,
} from '../styles/vars';

import styled from 'styled-components';

// Styled component used bellow
const ShortForm = styled.form`
  display: flex;
  margin: ${defaultSpaceBetweenElements};
  > input {
    margin: ${defaultSpaceBetweenElements};
    font-size: ${defaultFontSize};
    border: ${defaultBorderStyle};
    width: 70%;
}
`;

const Button = styled.button`
  margin: ${defaultSpaceBetweenElements};;
  font-size: ${defaultFontSize};
  border: none;
  background: ${defaultPrimaryActionColor};
`;

const Label = styled.label`
  margin: ${defaultSpaceBetweenElements};
  font-size: calc(${defaultFontSize} + 0.5em);
`;

const ShortUrl = (
  {
    onAddUrl,
  }: {
    onAddUrl: Function,
  },
) => {
  let input;

  const submitForm = evt => {
    evt.preventDefault();
    onAddUrl(input.value);
    input.value = null;
  };

  return (
    <ShortForm onSubmit={submitForm}>
      <Label htmlFor="url">Long url:</Label>
      <input
        id="url"
        type="url"
        required="required"
        placeholder="http://long-url-here.com"
        ref={url => {
          input = url;
        }}
      />
      <Button onClick={submitForm}>
        Make it short
      </Button>
    </ShortForm>
  );
};

export default ShortUrl;
