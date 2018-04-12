import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import ReactNative, { Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import tb from '../helpers/testBuilder.js'

import RegButton from '../comp/RegButton.js';

const assert = chai.assert;
configure({ adapter: new Adapter() });

const onButtonPress = sinon.spy()
const tObj = new tb(<RegButton />);

describe('Reg Button Tests', () => {
  it('Reg button to have a react native elem button', () => {
    expect(tObj.wrapper.find(Button).length).to.eql(1);
  });

  it('Reg Button press should call onButtonPress', () => {
    const onButtonPress = sinon.spy()
    const testBtn = shallow(
      <RegButton
        btnTitle={"meow"}
        action={() => onButtonPress()}
        btnIcon={"code"}
      />
    );
    testBtn.simulate('press');
    expect(onButtonPress).to.have.property("callCount", 1)
  });
  
  it('Reg Button should be small', () => {
    expect(tObj.wrapper.props().small).to.eql(true)
  });
})
