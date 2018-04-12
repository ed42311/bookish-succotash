import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import ReactNative, { Text, Button, TouchableOpacity } from 'react-native';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

import BasicInput from '../comp/BasicInput.js';

const assert = chai.assert;
configure({ adapter: new Adapter() });

describe('BasicInput tests', () => {
  it('Basic Input should call on change', () => {
    const changeSpy = sinon.spy()
    const InputTest = shallow(
      <BasicInput
        placeholder="Name"
        higherUpdate={() => changeSpy()}
        updateKey="name"
        secure={false}
      />
    );
    InputTest.props().onChangeText();
    expect(changeSpy).to.have.property("callCount", 1)
  });
})
