//@flow

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Toolbar as MaterialToolbar } from 'react-native-material-design';
import * as theme from '../theme'

class HRToolbar extends Component {
  render() {
    return(
      <View style={{ backgroundColor:theme.primaryColorHex, height : 40 }}>
        <Text style={{ zIndex : 2, position:'absolute', left : 10 , top:10, color : theme.textColor,
                        fontSize : 18}}>
          Happy Redditting
        </Text>
      </View>
    )
  }
}

export default HRToolbar;
