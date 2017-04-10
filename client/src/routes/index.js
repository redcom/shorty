// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppContainer } from '../containers';
import { Header } from '../components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getInitialState, hidrateStoreWithState } from '../actions/AppActions';

class Routes extends Component {
  props: {
    dispatch: Function,
  };

  hidrateStateFromServer = state => {
    this.props.dispatch(hidrateStoreWithState(state));
  };

  componentDidMount() {
    this.props.dispatch(getInitialState(this.hidrateStateFromServer));
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <Header />
          <Route path="/" component={AppContainer} />
        </div>
      </Router>
    );
  }
}

export default connect()(Routes);
