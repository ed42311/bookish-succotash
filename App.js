import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Content,
  Button,
  TouchableOpacity
} from 'react-native';
import TransformButton from './comp/TransformButton';
import backgroundImgCat from './img/background.jpg';
import backgroundImgFlower from './img/background2.jpg';

export default class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
       isCat: true,
       backgroundImg: backgroundImgCat,
       mainText : "This is a Cat ->",
       btnText: "Transform to Cat"
     };
     this.transformAction = this.transformAction.bind(this)
   }

   transformAction (e) {
    if(this.state.isCat){
      this.setState({
        backgroundImg: backgroundImgFlower,
        mainText : "This is a Watermelon ->",
        btnText : "Transform to Apple",
        isCat: false
      })
    } else {
      this.setState({
        backgroundImg: backgroundImgCat,
        mainText : "This is a Cat ->",
        btnText : "Transform to Cat",
        isCat: true
      })
    }
   }

   render() {
     return (
       <ImageBackground
         style={styles.backgroundImg}
         source={this.state.backgroundImg}
         id="backgroundImg"
       >
         <View style={styles.fluidContainer}>
           <Text style={styles.introText}>{this.state.mainText}</Text>
           <TransformButton
             btnTitle="transformButton"
             transformAction={this.transformAction}
             style={styles.transformButton}
             btnText={this.state.btnText}
           />
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
  },
  transformButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginLeft: 40
  }
});
