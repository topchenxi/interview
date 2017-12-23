## code

```js
var a = [];
var b = a;
b[0] = 1;
console.log(a[0]);// 1
console.log(b[0]);// 1
console.log(a===b);// true
//将对象赋值给变量，仅仅是赋值的引用，对象本身并没有赋值一次，因此，变量 a 和 b 指向同一个数组
```

```js
10 + "objects" // 10objects  转换为字符串
"7" * "4"      // 28         转换为字符
1 - "x"        // NaN        无法转换为数值进行计算，因此返回 NaN
1 + {}         // 1[object Ojbect] 返回对象的 toString()结果，按照字符串相加
true + true    // 2  bool    类型转换为数值类型
2 + null       // 2  null    转换为数值 0

```

```js
var x = 10;
var y = 20;
var z = x < y ? x++ : ++y;

console.log('x : ', x, 'y :', y, 'z :', z);// x :  11 y : 20 z : 10

// 运行第三行代码时，只执行？后的第一个语句，因此，y 的值不发生变化，
// 仍为 20；并返回 x 的值赋值给变量 z，因此 z 的值为 10；然后将 x 的值增加 1，变为 11。

```

```js
function Foo() {
    getName = function() {
        console.log(1);
    };
    return this;
}
Foo.getName = function() {
    console.log(2);
};
Foo.prototype.getName = function() {
    console.log(3);
};
var getName = function() {
    console.log(4);
};

function getName() {
    console.log(5);
}

//请写出以下输出结果：
Foo.getName(); // 2  访问Foo函数上存储的静态属性
getName(); // 4  访问当前上文作用域内的叫getName的函数
Foo().getName(); // 1 执行了Foo函数，然后调用Foo函数的返回值对象的getName属性函数
getName(); // 1 直接调用getName函数，相当于window.getName() Foo执行后把全局的getName函数给重写了一次
new Foo.getName(); // 2 == new (Foo.getName)();
new Foo().getName(); // 3 == (new Foo()).getName()
new new Foo().getName(); // 3 == new ((new Foo()).getName)();

```


```javascript
// 创建 “原生(native)” 方法
String.prototype.repeatify = String.prototype.repeatify || function(times) {
   var str = '';
 
   for (var i = 0; i < times; i++) {
      str += this;
   }
 
   return str;
};
```

```javascript
function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}
 
test();
// console
// undefined
// 2
// 变量和函数都被提升(hoisted) 到了函数体的顶部 
// 虽存在于函数体（因为a已经被声明），但仍然是undefined
```

```javascript
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//Aurelio De Rosa
// 等于
console.log(obj.prop.getFullname.call(obj.prop));//Aurelio De Rosa
 
var test = obj.prop.getFullname;

console.log(test());//John Doe
// 等于
console.log(test.call(undefined));//John Doe

console.log(test.call(obj.prop));//Aurelio De Rosa

// 谁调用，this指向谁
```

```javascript
// 闭包
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function() {
        console.log('You clicked element #' + i);
    });
}
// es6
var nodes = document.getElementsByTagName('button');
for (let i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function() {
        console.log('You clicked element #' + i);
    });
}

// 闭包
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', (function(i) {
        return function() {
            console.log('You clicked element #' + i);
        }
    })(i));
}

// 函数移到循环的外面
function handlerWrapper(i) {
    return function() {
        console.log('You clicked element #' + i);
    }
}

var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', handlerWrapper(i));
}

```

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
printing();

// console
1
4
3
2
// 当调用setTimeout()函数时，即使延迟的时间被设置为0，提供的回调也会被排队。
```

```javascript
// isPrime()函数，当其为质数
function isPrime(number) {
   // If your browser doesn't support the method Number.isInteger of ECMAScript 6,
   // you can implement your own pretty easily
   if (typeof number !== 'number' || !Number.isInteger(number)) {
      // Alternatively you can throw an error.
      return false;
   }
   if (number < 2) {
      return false;
   }
 
   if (number === 2) {
      return true;
   } else if (number % 2 === 0) {
      return false;
   }
   var squareRoot = Math.sqrt(number);
   for(var i = 3; i <= squareRoot; i += 2) {
      if (number % i === 0) {
         return false;
      }
   }
   return true;
}

```

```js
function foo() {
    foo.abc = function() { console.log(1) };
    this.abc = function() { console.log(2) };
    abc = function() { console.log(3) }
    var abc = function() { console.log(4) };
}
foo.prototype.abc = function() { console.log(5) }
foo.abc = function() { console.log(6) }
foo.abc(); //6
var myfoo = new foo();
myfoo.abc(); //2
foo.abc(); //1

```

```js
["5" + 3, '5' + '3', 5 + '3', +'3', '5' - 3, '5' - '3', 5 - '3']
// ["53", "53", "53", 3, 2, 2, 2]
```