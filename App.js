import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Content
} from 'react-native';
import backgroundImg from './img/background.jpg'

export default class App extends Component {
 render() {
   return (
     <ImageBackground
       style={styles.backgroundImg}
       source={backgroundImg}
       id="backgroundImg"
     >
       <View style={styles.fluidContainer}>
         <Text style={styles.introText}>This is a Cat-></Text>
       </View>
     </ImageBackground>
   );
 }
}

const styles = StyleSheet.create({
  introText: {
    fontSize: 48,
    paddingLeft: 40,
  },
  fluidContainer: {
    width: "80%",
    height: "80%",
  },
  backgroundImg:{
    flex : 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: null,
    height: "100%"
  }
});
