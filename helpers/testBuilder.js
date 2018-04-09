import enzyme, { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

export default class testBuilder {
  constructor(comp) {
    this.wrapper = shallow(comp);
    this.appObj = renderer.create(comp).toJSON();
    this.text = "Text";
    this.image = "Image";
    this.view = "View";
  }

  retTrueIfNotUndefined(elem) {
    return typeof elem !== "undefined"
  }

  nativeElemSelector(app, selector) {
    return this.appObj.children.filter((childElem) => childElem.type === selector);
  }

  getText() {
    return this.nativeElemSelector(this.appObj.children, this.text)
  }

  getImage() {
    return this.nativeElemSelector(this.appObj.children, this.image)
  }

  getView() {
    return this.nativeElemSelector(this.appObj.children, this.view)
  }

  styleTester(styleArr, keyValue, matchValue) {
    return styleArr
     .filter(this.retTrueIfNotUndefined)
     .filter(( style ) => style.hasOwnProperty(keyValue))
     .filter(( style ) => style[keyValue] === matchValue)
     .length;
  }
}
