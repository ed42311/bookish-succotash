import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class transformButton extends Component {
  constructor(props) {
     super(props);
   }

   onButtonPress() {
     this.props.transformAction()
   }

   render() {
     return (
       <TouchableOpacity
         title={this.props.btnTitle}
         onPress={() => this.onButtonPress()}
         style={styles.transformButton}
       >
         <Text>{this.props.btnText}</Text>
       </TouchableOpacity>
     )
   }
}

const styles = StyleSheet.create({
  transformButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginLeft: 40
  }
});
