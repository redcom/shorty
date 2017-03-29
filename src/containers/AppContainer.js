import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Wrapper, FormUrlShorter } from '../components';
import * as AppActions from '../actions/AppActions';

class AppContainer extends React.Component {
  render() {
    return (
      <Wrapper>
        <FormUrlShorter />
      </Wrapper>
    );
  }
}

AppContainer.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  incrementIfOdd: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    links: state.links,
  };
}

export default connect(mapStateToProps, { ...AppActions })(AppContainer);
