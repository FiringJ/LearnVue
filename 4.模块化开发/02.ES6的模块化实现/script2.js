// 导入方式一：对象导入
import {name, type, sum} from "./script1.js";
console.log(sum(10, 20));

import {mul ,Person} from "./script1.js";
console.log(mul(10, 20));
const p = new Person();
p.sleep();

// 导入方式二：default导入
import addr from './script1.js'

console.log(addr);

// 导入方式三：全部导入
import * as obj from './script1.js'

console.log(obj);
