import { expect } from 'chai';
import Utils from '../src/utils.js';


describe("src/utils.js", function() {

    describe('#isEmpty(obj)', function() {

        it("为空，为真断言", function() {

            var result = Utils.isEmpty();
            expect(result).to.equal(true);

        });

        it("为空对象，为真断言", function() {

            var result = Utils.isEmpty({});
            expect(result).to.equal(true);

        });

        it("为空数组，为真断言", function() {

            var result = Utils.isEmpty([]);
            expect(result).to.equal(true);

        });

        it("为有值对象，为假断言", function() {

            var result = Utils.isEmpty({ a: 1 });
            expect(result).to.equal(false);

        });

        it("为有值字符串，为假断言", function() {

            var result = Utils.isEmpty('string');
            expect(result).to.equal(false);

        });

    });

    describe('#isObject(obj)', function() {

        it("为空，为假断言", function() {

            var result = Utils.isObject();
            expect(result).to.equal(false);

        });

        it("为空对象，为真断言", function() {

            var result = Utils.isObject({});
            expect(result).to.equal(true);

        });

        it("为空数组，为真断言", function() {

            var result = Utils.isObject([]);
            expect(result).to.equal(true);

        });

        it("为有值数组，为真断言", function() {

            var result = Utils.isObject([1, 2]);
            expect(result).to.equal(true);

        });

    });

    describe('#isArray(obj)', function() {

        it("为空，为假断言", function() {

            var result = Utils.isArray();
            expect(result).to.equal(false);

        });

        it("为空对象，为假断言", function() {

            var result = Utils.isArray({});
            expect(result).to.equal(false);

        });

        it("为空数组，为真断言", function() {

            var result = Utils.isArray([]);
            expect(result).to.equal(true);

        });

        it("为有值数组，为真断言", function() {

            var result = Utils.isArray([1, 2]);
            expect(result).to.equal(true);

        });

    });

})
