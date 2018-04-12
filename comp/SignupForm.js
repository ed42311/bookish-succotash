import React, { Component } from 'react';
import { View } from 'react-native';
import BasicInput from './BasicInput';

export default class SignUpForm extends Component {
  constructor(props) {
     super(props);
     this.lowerUpdate = this.lowerUpdate.bind(this);
   }

   lowerUpdate(lowerKey, lowerValue) {
     this.props.higherUpdate(lowerKey, lowerValue);
   }

   render() {
     return (
       <View>
         <BasicInput
           placeholder="Name"
           higherUpdate={this.lowerUpdate}
           updateKey="name"
           secure={false}
         />
         <BasicInput
           placeholder="Email"
           higherUpdate={this.lowerUpdate}
           updateKey="email"
           secure={false}
         />
         <BasicInput
           placeholder="Password"
           higherUpdate={this.lowerUpdate}
           updateKey="password"
           secure={true}
         />
       </View>
     );
   }
}
