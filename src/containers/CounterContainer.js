import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Counter } from '../components'
import * as CounterActions from '../actions/CounterActions'

class CounterContainer extends Component {
  increment = () => {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }

  incrementIfOdd = () => {
    this.props.incrementIfOdd();
  }

  render() {
    return (
      <Counter
        counter={this.props.counter}
        increment={this.increment}
        decrement={this.decrement}
        incrementIfOdd={this.incrementIfOdd}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    counter: state.counter,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer)