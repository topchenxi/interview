# ES6

## 谈一谈你了解ECMAScript6的新特性？

* 块级作用区域              `let a = 1;`
* 可定义常量                `const PI = 3.141592654;`
* 变量解构赋值              `var [a, b, c] = [1, 2, 3];`
* 字符串的扩展(模板字符串)  ` var sum = `${a + b}`;`
* 数组的扩展(转换数组类型)   `Array.from($('li'));`
* 函数的扩展(扩展运算符)     `[1, 2].push(...[3, 4, 5]);`
* 对象的扩展(同值相等算法)   ` Object.is(NaN, NaN);`
* 新增数据类型(Symbol)      `let uid = Symbol('uid');`
* 新增数据结构(Map)        ` let set = new Set([1, 2, 2, 3]);`
* for...of循环            `for(let val of arr){};`
* Promise对象            ` var promise = new Promise(func);`
* Generator函数          ` function* foo(x){yield x; return x*x;}`
* 引入Class(类)          ` class Foo {}`
* 引入模块体系            ` export default func;`
* 引入async函数[ES7]
```js
async function asyncPrint(value, ms) {
      await timeout(ms);
      console.log(value)
     }
```

## 什么是 Promise ？

```
Promise 就是一个对象，用来表示并传递异步操作的最终结果
Promise 最主要的交互方式：将回调函数传入 then 方法来获得最终结果或出错原因
Promise 代码书写上的表现：以“链式调用”代替回调函数层层嵌套（回调地狱）
```

## 说说你对Promise的理解*
```
- 依照 Promise/A+ 的定义，Promise 有四种状态：
  pending: 初始状态, 非 fulfilled 或 rejected.

  fulfilled: 成功的操作.

  rejected: 失败的操作.

  settled: Promise已被fulfilled或rejected，且不是pending

  另外， fulfilled 与 rejected 一起合称 settled
- Promise 对象用来进行延迟(deferred) 和异步(asynchronous ) 计算
```

## Promise 的构造函数

```js
// 构造一个 Promise，最基本的用法如下：
var promise = new Promise(function(resolve, reject) {
    if (...) {  // succeed
        resolve(result);
    } else {   // fails
        reject(Error(errMessage));
    }
});
```

## 变量的值的交换
```js
let a = 1;
let b = 2;
[a, b] = [b, a];
```

## module模块用法
```js
// -----模块A------- //
let name = "kitty";
let age = 15;
let say = function() {
    //....
};
export { name, age, say }

// ---module-B.js文件--- //
import { name as nickname, say } from "模块A的相对路径";
```