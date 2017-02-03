//@flow
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Home from './Home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions'

class AppContainer extends Component {
  render() {
    return (
      <Home {...this.props} />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => {return {}} , mapDispatchToProps)(AppContainer);
