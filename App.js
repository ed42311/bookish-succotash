import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Content,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import { Button } from 'react-native-elements';
import TransformButton from './comp/TransformButton';
import RegButton from './comp/RegButton';
import BasicInput from './comp/BasicInput';
import SignUpForm from './comp/SignupForm';
import backgroundImgCat from './img/background.jpg';
import backgroundImgFlower from './img/background2.jpg';
import backgroundTriangle from './img/background3.jpg';

export default class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
       isCat: true,
       backgroundImg: backgroundTriangle,
       mainText : "This is a Cat ->",
       btnText: "Transform to Cat",
       name: '',
       password: '',
       email: ''
     };
     this.transformAction = this.transformAction.bind(this)
     this.update = this.update.bind(this)
     this.signUp = this.signUp.bind(this)
   }

   signUp () {
     fetch('http://localhost:3000/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            'name': this.state.name,
            'password': this.state.password,
            'email': this.state.email
          })
        })
        .then((incoming) => incoming.json())
        .then((response) => {
          console.log(response);
          Alert.alert(JSON.stringify(response.message));
        }).catch((error) => {
          console.error(error)
        })
        .done();
   }

   update(key, value){
     let newState = {};
     newState[key] = value;
     this.setState(newState);
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
          <SignUpForm
            higherUpdate={this.update}
          />
          <Text style={{fontSize: 36}}>{this.state.name}</Text>
          <RegButton
            btnTitle={"meow"}
            action={this.signUp}
            btnIcon={"code"}
          />
        </ImageBackground>
     );
   }
}

const styles = StyleSheet.create({
  backgroundImg:{
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: "100%"
  },
  inputThing: {
    width: '80%',
    marginRight: 25,
    backgroundColor: '#DDDDDD',
    padding: 15,
    marginBottom: 5,
    borderRadius: 5
  },
  signUpBtn: {
    width: '60%',
    marginRight: 25,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    padding: 15,
    marginBottom: 5,
    borderRadius: 5
  }
});
