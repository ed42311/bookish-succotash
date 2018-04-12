import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class BasicInput extends Component {
  constructor(props) {
     super(props);
     this.lowerUpdate = this.lowerUpdate.bind(this);
   }

   lowerUpdate(lowerKey, lowerValue) {
    this.props.higherUpdate(lowerKey, lowerValue);
   }

   render() {
     return (
       <TextInput
         style={styles.inputThing}
         secureTextEntry={this.props.secure}
         autoCapitalize="none"
         autoCorrect={false}
         placeholder={this.props.placeholder}
         onChangeText={(value) => this.lowerUpdate(this.props.updateKey, value)}
       />
     );
   }
}

const styles = StyleSheet.create({
  inputThing: {
    width: '80%',
    marginRight: 25,
    backgroundColor: '#DDDDDD',
    padding: 15,
    marginBottom: 5,
    borderRadius: 5
  }
});
