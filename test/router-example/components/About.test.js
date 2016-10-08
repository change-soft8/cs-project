import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import About from '../../../src/router-example/components/About';

describe("src/router-example/components/About.js", function() {
  it("是否存在h1", function() {
    expect(shallow(<About />).contains(<h1>About</h1>)).to.equal(true);
  });

});