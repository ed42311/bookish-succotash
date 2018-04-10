import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import ReactNative, { Text, Button, TouchableOpacity } from 'react-native';
import enzyme, { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import tb from '../helpers/testBuilder.js'

import TransformButton from '../comp/TransformButton.js';
import App from '../App.js';

const assert = chai.assert;
configure({ adapter: new Adapter() });

const tObj = new tb(<TransformButton />);

describe('Transform Button meta meow!', () => {
  it('TransButton should have 1 meow Text objects', () => {
    expect(tObj.wrapper.find(Text).length).to.eql(1);
  });

  it('TransButton meow has a TouchableOpacity rendered', () => {
    expect(tObj.wrapper.find(TouchableOpacity).length == true).to.eql(true);
  });

  it('TransformButton transformAction press should call transformAction', () => {
    const transform = sinon.spy()
    const TransButton = shallow(
      <TransformButton
        btnTitle="transformButton"
        transformAction={() => transform()}
        btnText="transformButton"
      />
    );
    TransButton.simulate('press');
    expect(transform).to.have.property("callCount", 1)
  });
})

describe('Transform Button style meow!', () => {
  it('background color is set to #DDDDDD', () => {
    const styleArr = [tObj.appObj.props.style];
    const bkColor = tObj.styleTester(styleArr, 'backgroundColor', '#DDDDDD');
    expect(bkColor).to.eql(1)
  });
})
