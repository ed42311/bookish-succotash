import React, { Component } from 'react';

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { Button } from 'react-native-elements';

export default class transformButton extends Component {
  constructor(props) {
     super(props);
   }

   onButtonPress() {
     this.props.action()
   }

   render() {
     return (
       <Button
         small
         iconRight={{ name: this.props.btnIcon }}
         title={this.props.btnTitle}
         onPress={() => this.onButtonPress()}
       />
     )
   }
}

const styles = StyleSheet.create({
  regButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    height: 30
  }
});
