var expect = require('chai').expect;
var matLibrary = require('../src/mathLibrary');

describe('mathLibrary', function () {
   describe('add', function() {
       it('should get the sum of 2 numbers', function () {
           var res = matLibrary.add(3, 4);
           expect(res).to.equal(7);
       });
    });
});