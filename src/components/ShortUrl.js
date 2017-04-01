// @flow

import React from 'react';

const ShortUrl = ({
  onAddUrl,
}:{
 onAddUrl: Function,
}) => {
  let input;

  const submitForm = (evt) => {
    onAddUrl(input.value);
    input.value = null;
  };

  return (
    <div>
      <label htmlFor="url">Long url: </label>
      <input
        id="url"
        type="url"
        required="required"
        placeholder="http://long-url-here.com"
        ref={(url) => {
          input = url;
        }}
      />
      <button
        onClick={submitForm}
      >
      Make it short
      </button>
      </div>
  );
};

export default ShortUrl;

