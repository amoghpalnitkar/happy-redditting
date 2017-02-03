//@flow

import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar
} from 'react-native';
import HRToolbar from './Toolbar';
import PostsContainer from './PostsContainer';
import * as theme from '../theme'


class Home extends Component {
  render() {
    return (

        <View style={{marginTop : 20 , flex : 1}}>
          <HRToolbar />
          <PostsContainer {...this.props}/>
        </View>

    )
  }
}

// const mapStateToProps = (dispatch) => {
//   return {
//
//   }
// }

//export default connect((state) => {return {}} , mapStateToProps)(Home);
export default Home;
