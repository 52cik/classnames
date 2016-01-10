var classNames = require('..');
var should = require('should');

Object.prototype.hehe = true; // 污染原形链
var re = /^[a b]{3}$/; // 通用输出正则

describe("index", function () {
  it("传入参数 'a', 'b' 应该输出 'a b' ", function () {
    classNames('a', 'b').should.match(re);
  });

  it("传入参数 [1,,2] 应该输出 '1 2' ", function () {
    classNames([1,,2]).should.match(/^[1 2]{3}$/);
  });

  it("传入参数 'a  b' 应该输出 'a b' ", function () {
    classNames('a  b').should.match(re);
  });

  it("传入参数 'a', 'b', 1 应该输出 '1 a b' ", function () {
    classNames('a', 'b', 1).should.match(/^[ab1 ]{5}$/);
  });

  it("传入参数 {a:false, b:true} 应该输出 'b' ", function () {
    classNames({a:false, b:true}).should.equal('b');
  });

  it("传入参数 {a:false}, {b:true} 应该输出 'b' ", function () {
    classNames({a:false}, {b:true}).should.equal('b');
  });

  it("传入参数 {a:false}, {b:true}, 'a' 应该输出 'b a' ", function () {
    classNames({a:false}, {b:true}, 'a').should.match(re);
  });

  it("传入参数 {a:false}, {b:true}, ['a'] 应该输出 'b a' ", function () {
    classNames({a:false}, {b:true}, ['a']).should.match(re);
  });

  it("传入参数 {__proto__:{test:true}} 应该输出 '' ", function () {
    classNames({__proto__:{test:true}}).should.equal('');
  });
});