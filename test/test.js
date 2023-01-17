var expect = require("expect.js");
var clone = require("../src/index.js").clone;
// 在Mocha中使用describe来组织测试结构，describe可以嵌套，describe的语义也可以自己定义
// it 代表一个测试用例，一个测试用例中可以有多个expect断言
describe("function clone", function () {
    describe("param data", function () {
        it("正确用例", function () {
            // 基本数据类型
            expect(clone("abc")).to.equal("abc");

            // 数组
            var arr = [1, [2]];
            var cloneArr = clone(arr);
            expect(cloneArr).not.to.equal(arr);
            expect(cloneArr).to.eql(arr);

            // 对象
            var obj = { a: { b: 1 } };
            var cloneObj = clone(obj);
            expect(cloneObj).not.to.equal(obj);
            expect(cloneObj).to.eql(obj);
        });

        it("边界值用例", function () {
            expect(clone(1)).to.equal(undefined);

            expect(clone(undefined)).to.equal(undefined);

            expect(clone(null)).to.equal(null);
        });
    });
});
