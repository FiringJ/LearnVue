/*var module1 = (function() {
  var obj = {}

  var name = 'Script1';
  var flag = true;
  function sum(num1, num2) {
    return num1 + num2;
  }

  obj.name = name;
  obj.flag = flag;
  obj.sum = sum;
  return obj
}())*/

//CommonJS
/*
var name = 'Script1';
var flag = true;
function sum(num1, num2) {
  return num1 + num2;
}
module.exports = {
  name,
  flag,
  sum
}
*/
module.exports = {
  name: 'Script1',
  flag: true,
  sum(num1, num2) {
    return num1 + num2;
  }
}
