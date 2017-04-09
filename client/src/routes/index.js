// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppContainer } from '../containers';
import { Header } from '../components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getInitialState } from '../actions/AppActions';

class Routes extends Component {
  props: {
    dispatch: Function,
  };

  componentDidMount() {
    this.props.dispatch(getInitialState());
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
