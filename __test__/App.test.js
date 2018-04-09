import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import ReactNative, { Text } from 'react-native';
import enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import tb from '../helpers/testBuilder.js'

import App from '../App';

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
})

describe('Testing all the meowStyles, meow', () => {
  it('should render an android View', () => {
    expect(tObj.appObj.type == "View");
  });
  it('should have at least two images', () => {
    console.log(tObj.getImage());
    expect(tObj.getImage().length >= 2).to.eql(true);
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
    const nestTest = tObj.appObj.children[1].children[0].children[0];
    expect(nestTest === "This is a Cat->").to.eql(true);
  });
  // it('Header text size should be 48', () => {
  //   expect(texts[0].props.style.fontSize === 48).to.eql(true);
  // });
  // it('Header text size should be 48', () => {
  //   console.log(texts)
  // });
})
