// @flow

import React from 'react';
import { connect } from 'react-redux';
import { addUrl } from '../actions/FormUrlShorterActions';

type FormUrlShorterProps = {
  addUrl: Function,
};

class FormUrlShorter extends React.Component {
  props: FormUrlShorterProps;

  input = undefined;

  onSubmitWithPreventDefault = onSubmit =>
    event => {
      if (!onSubmit) return;
      console.log(event);
      event.preventDefault();
      onSubmit(event, { url: this.input.value });
      this.input.value = null; // to show the palceholder again
    };

  render() {
    const { addUrl } = this.props;

    return (
      <form>
        <label htmlFor="url">Long url: </label>
        <input
          id="url"
          type="url"
          placeholder="http://long-url-here.com"
          ref={node => {
            this.input = node;
          }}
        />
        <button type="submit" onClick={this.onSubmitWithPreventDefault(addUrl)}>
          Transform
        </button>
      </form>
    );
  }
}

export default connect(
  state => ({
    links: state.links,
  }),
  { addUrl },
)(FormUrlShorter);
