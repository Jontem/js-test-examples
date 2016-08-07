var expect = require('chai').expect;
var library = require('../src/library');

describe('library', function () {

   describe('add', function() {
       it('should get the sum of 2 numbers', function () {
           var res = library.add(3, 4);
           expect(res).to.equal(7); // equal: Asserts that the target is strictly equal (===) to value. Alternately, if the deep flag is set, asserts that the target is deeply equal to value.
       });
    });

    describe('squareOf', function () {
       [1, 2, 3].forEach(n => {
          it(`should return square of ${n}`, function () {
              var res = library.squareOf(n);

              expect(res).to.equal(n * n);
          })
       });
    });

    describe('even', function () {
        it('should only return odd numbers', function () {
            var numbers = [1, 2, 3, 4, 5];
            var res = library.even(numbers);

            expect(res).to.eql([1, 3, 5]); // eql: Asserts that the target is deeply equal to value.
        });

        it('This is a test that we should write later');
    });
});