'use strict';

var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('getPlural function test', () => {
  it('should return Boy', () => {
    var result = index.getPlural('Boy');
    expect(result).to.equal('Boy');
  });
});