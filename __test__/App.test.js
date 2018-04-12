import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import ReactNative, { Text, TouchableOpacity } from 'react-native';
import enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import tb from '../helpers/testBuilder.js'

import App from '../App';
import RegButton from '../comp/RegButton';

const assert = chai.assert;
configure({ adapter: new Adapter() });
const tObj = new tb(<App />);

describe('Testing all the metaMeow, meow', () => {
  it('App renders meow View without crashing', () => {
    expect(tObj.appObj.type === "View").to.eql(true);
  });
  it('meow! Shallow render builds meow App without crashing', () => {
    expect(tObj.wrapper.length == true).to.eql(true);
  });
  it('App should have 1 meow Text objects', () => {
    expect(tObj.wrapper.find(Text).length).to.eql(1);
  });
  it('App should meow have one RegButton', () => {
    expect(tObj.wrapper.find(RegButton).length).to.eql(1);
  });
})

describe('Testing all the meowStyles, meow', () => {
  it('should render an android View', () => {
    expect(tObj.appObj.type == "View");
  });
  it('should have at least one image, meow', () => {
    expect(tObj.getImage().length >= 1).to.eql(true);
  });
  it('background image should have height 100%', () => {
    const bkImg = tObj
       .getImage()
       .filter(
         (v) => v.props.id === "backgroundImg"
       )[0];
    const benHeight =
      tObj.styleTester(
        bkImg.props.style,
        "height",
         "100%"
       ) == true;
    expect(benHeight).to.eql(true);
  });
  it('Header should be present with correct text', () => {
    expect(tObj.wrapper.state().mainText).to.eql("This is a Cat ->");
  });
  describe('transformAction should switch between cat and watermelon', () => {
    it('transformAction called once should set mainText to This is a Watermelon ->', () => {
      tObj.wrapper.instance().transformAction();
      expect(tObj.wrapper.state().mainText).to.eql("This is a Watermelon ->");
    });
    it('transformAction called twice should set mainText to This is a Cat ->', () => {
      tObj.wrapper.instance().setState({isCat: false})
      tObj.wrapper.instance().transformAction();
      expect(tObj.wrapper.state().mainText).to.eql("This is a Cat ->");
    });
  })
})
