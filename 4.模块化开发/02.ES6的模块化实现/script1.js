let name = 'script1';
let type = 'module';
function sum(num1, num2) {
  return num1 + num2;
}

// 1.导出方式一： 对象导出
export {
  name, type, sum
}

// 2.导出方式二： 直接导出
export let age = 18
export let height = 1.88

// 3.导出方式三： 导出函数
export function mul(num1, num2) {
  return num1 * num2;
}

// 4.导出方式四： 导出类
export class Person {
  sleep() {
    console.log('sleeping...');
  }
}

// 4.导出方式五： default导出（一个模块只能有一个default）
const address = '北京';
export default address;

// 5.导出方式五

