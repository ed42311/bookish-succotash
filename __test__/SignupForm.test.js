import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import ReactNative, { Text, Button, TouchableOpacity } from 'react-native';
import enzyme, { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import tb from '../helpers/testBuilder.js'

import SignupForm from '../comp/SignupForm.js';
import BasicInput from '../comp/BasicInput.js';

const assert = chai.assert;
configure({ adapter: new Adapter() });

describe('Signup Form tests', () => {

  it('Signup Form has three input fields', () => {
    const changeSpy = sinon.spy()
    const SignupTest = shallow(
      <SignupForm
        higherUpdate={() => {}}
      />
    );
    expect(SignupTest.find(BasicInput).length).to.eql(3)
  });

  it('All BasicInputs should call on change', () => {
    const changeSpy = sinon.spy()
    const SignupTest = shallow(
      <SignupForm
        higherUpdate={() => changeSpy()}
      />
    );
    const allInputs = SignupTest
      .props()
      .children
      .map(
        (item) => {
          if(item.type === BasicInput){
            item.props.higherUpdate();
          }
        }
      );
    expect(changeSpy).to.have.property("callCount", 3)
  });
})
