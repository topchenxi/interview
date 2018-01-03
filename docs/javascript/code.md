# code

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

```js
 var arr1=[1,2,3];
               var arr2=[4,5,6];
               arr1 = arr1.concat(arr2);
               console.log(arr1); 
 var arr1=[1,2,3];
               var arr2=[4,5,6];
               Array.prototype.push.apply(arr1,arr2);
               console.log(arr1);
 var arr1=[1,2,3];
               var arr2=[4,5,6];
               for (var i=0; i < arr2.length; i++) {
                   arr1.push( arr2[i] );
               }
               console.log(arr1);   
```

```html

<input type="submit" id = "sub" class="ss confirm btn" value="提交"/>   
<script> window.onload = function(){ 
//方法一         
    var Opt = document.getElementById('sub');
    var getClass = function(className,tagName){
        if(document.getElementsByTagName){
            var Inp = document.getElementsByTagName(tagName);
            for(var i=0; i<Inp.length; i++){
                if((new RegExp('(\\s|^)' +className +'(\\s|$)')).test(Inp[i].className)){
                      return Inp[i];
                    }
                }
            }else if(document.getElementsByClassName){
                return document.getElementsByClassName(className);
        }
    }                 
//方法二
    var aa = getClass("confirm", "input");
        function getClass(className, targetName){
            var ele = [];
            var all = document.getElementsByTagName(targetName || "*");
            for(var i=0; i<all.length; i++){
                if(all[i].className.match(new RegExp('(\\s|^)'+confirm+'(\\s|$)'))){    
                    ele[ele.length] = all[i];
                }
            }
            return ele;
        }
//方法三
    function getObjsByClass(tagName, className){
           if(document.getElementsByClassName){
               alert("document.getElementsByClassName");
               return document.getElementsByClassName(className);
           }else{
               var el = [];
               var _el = document.getElementsByTagName(tagName);
               for(var i=0; i<_el.length; i++){
                   if(_el[i].className.indexOf(className) > -1){
                       alert(_el[i]);
                       el[_el.length] = _el[i];
                   }
               }
               alert(el);
               return el;
           }
       }
   }
 </script>
```

## 实现每隔两秒输出数组中的一个元素

```js
// method 1:类似C语言，通过使空载CPU实现，在时间小于2000ms内不跳出循环
let sleep = (n) => {
    let startTime = new Date().getTime();
    while (true) {
        if (new Date().getTime() - startTime > n) {
            break;
        }
    }
}
let printArrElement = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        sleep(2000);
        console.log(arr[i]);
    }
};
// method 2：使用setInterval计数器实现，需要注意的是不要把计数的部分放在外面，会导致计数器运行时只能得到循环结束的值
let printArrElement2 = (arr) => {
    let len = arr.length;
    let i = 0;
    let timer = setInterval(() => {
        console.log(arr[i]);
        if (i > len - 2) {
            window.clearInterval(timer);
        }
        i++;
    }, 1000);
};

```

## 拷贝

```js
// 浅拷贝
let shadowCopy = (src) => {
    let dst = {};
    for (let key in src) {
        if (src.hasOwnProperty(key)) {
            dst[key] = src[key];
        }
    }
    return dst;
};

// 深拷贝
// 1：使用ES5新增的create
let newObj1 = Object.create(oldObj);
// 2: 使用ES6新增的.extend
let newObj1 = Object.assign({}, oldObj);
// 3：使用JSON.parse(JSON.stringify())
// Note： 无法复制函数，会丢失原型链，原型指向Object，但是一般情况都够用了
let newObj = JSON.parse(JSON.stringify(oldObj));
// 4：使用递归
const deepCopy = (origin, traget) => {
    let target = target || {};
    for (let key in origin) {
        if (typeof origin[key] === "object") {
            // 还要区分一下对象和数组
            if (origin[key].constructor === Array) {
                target[key] = [];
            } else {
                target[key] = {};
            }
            deepCopy(origin[key], target[key]);
        } else {
            target[key] = origin[key];
        }
    }
    return target;
};

```

## 继承

```js
// 1.原型链
// 利用原型让一个引用类型继承另外一个引用类型的属性和方法
function SuperType() {
    this.name = 'c.c.';
}
SuperType.prototype.getSuperValue = function() {
    return this.name;
}

function SubType() {
    this.name = 'v.v.';
}
//继承了SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function() {
    return this.name;
}
var instance = new SubType();



// 2.借用构造函数
// 在子类型构造函数的内部调用超类构造函数，通过使用call()和apply()方法可以在新创建的对象上执行构造函数
function SuperType() {
    this.name = 'c.c.';
}

function SubType() {
    SuperType.call(this); //继承了SuperType
}



// 3.组合继承
// 将原型链和借用构造函数的技术组合在一块
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
    console.log(this.name);
}
//继承属性
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
    console.log(this.age);
}



// 4.寄生式继承
// 就是克隆和扩展
function createAnother(original) {
    var clone = Object.create(original);
    clone.sayHi = function() {
        console.log("hi");
    };
    return clone;
}
var person = {
    name: "EvanChen",
    friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi(); ///"hi"

// 5.es6
class SuperType1 {
    constructor() {
        this.name = "I am SuperType";
        this.type = "SuperType";
    }
}
class SubType1 extends SuperType1 {
    constructor() {
        super(); //相当于constructor
    }
}
```

模拟ajax

```js
// 封装一个简单的Ajax
// options是一个对象，里面可以包括的参数为：
// type: post或者get，可以有一个默认值
// data: 发送的数据，为一个键值对象或者为一个用&连接的赋值字符串
// onsuccess: 成功时的调用函数
// onfail: 失败时的调用函数
let myAjax = (url, options) => {
    let ajax,
        data,
        param = "",
        type;
    // create XML object
    ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
    // parse data
    data = options.data ? options.data : -1;
    if (typeof data == "object") {
        for (let key in data) {
            param += `${key}=${data[key]}&`;
        }
    } else {
        param = `${data}?timeStamp=${new Date().getTime()}`;
    }
    param = param.replace(/&$/, "");
    type = options.type ? options.type.toUpperCase() : "GET";
    if (type == "GET") {
        ajax.open("GET", `${url}?${param}`, true);
        ajax.send();
    } else {
        ajax.open("POST", url, true);
        ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        ajax.send(param);
    }
    //solve result
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                options.onsuccess(ajax.responseText, ajax);
            } else {
                if (options.onfail) {
                    options.onfail(ajax);
                }
            }
        }
    };
    return ajax;
}
```

cookie

```js
const setCookie = (key, value, expiresTime) => {
    let date = new date();
    date.setTime(date.getTime() + expiresTime * 24 * 3600 * 1000);
    document.cookie(`${key}=${value};expires=${date.toGMTString()};`);
};
// 删除cookie
const deleteCookie = (key) => {
    let date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie(`${key}=expire;expires=${date.setGMTString()}`);
};
// 读取指定的cookie
const findCookie = (key) => {
    let arrCookie = document.cookie.split(";");
    arrCookie.forEach((value, index, array) => {
        let arrSigleCookie = value.split("=");
        if (arrSigleCookie[0] == key) {
            return arrSigleCookie[1];
        }
    });
};
```

## 随机生成颜色
```js
function getbgColor() {
    // return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}
```

## 替换空格
```js
let reg1 = new RegExp(" +", "g");
let reg2 = new RegExp("^( +)|( +)$", "g");
str.replace(reg2, "");
```

## 获取样式
```js
function getStyle(element, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    } else {
        return element.currentStyle[attr];
    }
}
```

## 去重
```js
// 1
if (!Array.prototype.unique) { // 判断必需加上
    Array.prototype.unique = function() {
        var _array = this,
            res = {},
            result = [];
        for (var i = 0, len = _array.length; i < len; i++) {
            if (!res[_array[i]]) {
                result.push(_array[i]);
                res[_array[i]] = 1;
            }
        }
        return result;
    }
}

Array.prototype.unique.call([1, 1, 3, 5, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
[1, 1, 1, 2, 2, 2].unique();

// 2
let arrUnique2 = arr => Array.from(new Set(arr));
let arrUnique3 = arr => [...new Set(arr)];

// 3
let arrUnique4 = (arr) => {
    let resultArr = [],
        tempMap = new Map();
    arr.forEach(value => {
        if (!tempMap.get(value)) {
            tempMap.set(value, true);
            resultArr.push(value);
        }
    });
    return resultArr;
};

```


## [1,2,3,4,5].duplicator(); 
```js
// [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
Array.prototype.duplicator = function() {
    Array.prototype.push.apply(this, this);
    return this;
}
// [1, 2, 3, 4, 5, 4, 3, 2, 1]
Array.prototype.dupRev = function() {
    if (this.length <= 1) return this;
    var array = Array.from(this).reverse();
    array.shift();
    Array.prototype.push.apply(this, array);
    return this;
}

```

## 简单路由器实现

```js
var myRou = {}; //这个不用解释吧
myRou.Router = function() {
    function Router() {} //构造器。
    Router.prototype.setup = function(routemap, defaultFunc) {
        //基本参数路由表，默认回调。
        var that = this,
            rule, func;
        this.routemap = []; //路由表其实是个数组。
        this.defaultFunc = defaultFunc;
        for (var rule in routemap) { //遍历
            if (!routemap.hasOwnProperty(rule)) continue;
            //知识点：hasOwnProperty这个怎么用？
            that.routemap.push({
                rule: new RegExp(rule, 'i'),
                func: routemap[rule]
                //路由函数
            });
        }
    };
    Router.prototype.start = function() {
        // 知识点：location.hash
        // 监听 hashchange(onhashchange) 事件
        var hash = location.hash,
            route, matchResult;
        for (var routeIndex in this.routemap) {
            route = this.routemap[routeIndex];
            matchResult = hash.match(route.rule);
            //知识点：match返回的是一个还是多个
            if (matchResult) {
                route.func.apply(window, matchResult.slice(1));
                //call和apply的区别 关于改变函数this的事  slice(-1)是什么意思
                return;
            }
        }
        this.defaultFunc();
    };
    return Router;
}();
var router = new myRou.Router();
router.setup({
    '#/list/(.*)/(.*)': function(cate, id) {
        console.log('list', cate, id);
    },
    '#/show/(.*)': function(id) {
        console.log('show', id);
    }
}, function() {
    console.log('default router');
});
router.start();
```

## 获取对象属性个数
```js
// 1
var attributeCount = function(obj) {
    var count = 0;
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            // 建议加上判断,如果没有扩展对象属性可以不加
            count++;
        }
    }
    return count;
}
// 2
Object.getOwnPropertyNames(obj).length
```

## 判断是否是数组

```js

let array = [1, 2, 3, 4];
// 1
Object.prototype.toString.call(array) == "[object Array]"
// 2
Array.isArray(array)
// 3
array.constructor === Array
// 4
array instanceof Array

```