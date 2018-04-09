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
const metaStyle = [tObj.appObj.props.style];
const testStyleKeyCorrect = "flex";
const testStyleKeyInCorrect = "fle";
const testStyleValue = 1;

describe('Test the builder', () => {
  it('Undefined tester returns false when passed undef', () => {
    expect(
      tObj.retTrueIfNotUndefined(undefined)
    ).to.eql(false);
  });

  // inside describe block for elems
  describe('Native elem selector works on all types', () => {
    it('Text Types', () => {
      expect(
        tObj.nativeElemSelector(
          tObj.appObj,
          tObj.text
        )
      ).to.be.an('array');
    });
    it('View Types', () => {
      expect(
        tObj.nativeElemSelector(
          tObj.appObj,
          tObj.view
        )
      ).to.be.an('array');
    });
    it('Image Types', () => {
      expect(
        tObj.nativeElemSelector(
          tObj.appObj,
          tObj.image
        )
      ).to.be.an('array');
    });
  });

  // only test if items are present
  if(tObj.getText().length > 1) {
    it('getText returns only text elements', () => {
      const allTheSame = !!tObj
        .getText()
        .map( (elem) => elem.type )
        .reduce( (a, b) => (a === b) ? a : NaN )
      expect(allTheSame).to.eql(true)
    });
  }
  if(tObj.getView().length > 1) {
    it('getView returns only view elements', () => {
      const allTheSame = !!tObj
        .getView()
        .map( (elem) => elem.type )
        .reduce( (a, b) => (a === b) ? a : NaN )
      expect(allTheSame).to.eql(true)
    });
  }
  if(tObj.getImage().length > 1) {
    it('getImage returns only image elements', () => {
      const allTheSame = !!tObj
        .getImage()
        .map( (elem) => elem.type )
        .reduce( (a, b) => (a === b) ? a : NaN )
      expect(allTheSame).to.eql(true)
    });
  }

  // styletests
  it('styleTester should returns a 0, not present', () => {
      const styleTestInc = tObj.styleTester(
        metaStyle,
        testStyleKeyInCorrect,
        testStyleValue
      )
      expect(styleTestInc).to.eql(0);
  });
  it('styleTester should returns a 1, meow present', () => {
      const styleTestCorrect = tObj.styleTester(
        metaStyle,
        testStyleKeyCorrect,
        testStyleValue
      )
      expect(styleTestCorrect).to.eql(1);
  });
})
