# base

## JavaScript 的数据类型

```js
1. 原始类型
Undefined、Null、Boolean、Number、String
字符串、数字、布尔、数组、对象、Null、Undefined
2. js有哪些内置对象？
数据封装类对象：Object、Array、Boolean、Number 和 String
其他对象：Function、Arguments、Math、Date、RegExp、Error

原始值:
1.null（空）:JavaScript 的关键字，用于描述“空值”，对其执行 typeof 操作，返回“object”
2.undefined（未定义）:是预定义的全局变量，其值为“未定义”，它是变量的一种取值，表示变量没有初始化。

```

## JavaScript原型，原型链 ? 有什么特点？

```js
每个对象都会在其内部初始化一个属性，就是 prototype (原型)，当我们访问一个对象的属性时，
如果这个对象内部不存在这个属性，那么他就会去prototype里找这个属性，这个prototype又会有自己的prototype，
于是就这样一直找下去，也就是我们平时所说的原型链的概念。
关系：instance.constructor.prototype = instance.__proto__

特点：
JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。

当我们需要一个属性的时，Javascript引擎会先看当前对象中是否有这个属性， 如果没有的话，
就会查找他的Prototype对象是否有这个属性，如此递推下去，一直检索到 Object 内建对象。

```


## 谈谈This对象的理解。

```
- this总是指向函数的直接调用者（而非间接调用者）；
- 如果有new关键字，this指向new出来的那个对象；
- 在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window；
```

## new操作符具体干了什么呢?

```js
（1）创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
（2）属性和方法被加入到 this 引用的对象中。
（3）新创建的对象由 this 所引用，并且最后隐式的返回 this 。

var obj  = {};
obj.__proto__ = Base.prototype;
Base.call(obj);
```

## call() 和 apply() 的区别和作用？

```
apply( )函数有两个参数：第一个参数是上下文，第二个参数是参数组成的数组。如果上下文是null，则使用全局对象代替。
如：function.apply(this,[1,2,3]);
call() 的第一个参数是上下文，后续是实例传入的参数序列。
如：function.call(this,1,2,3);
```

##  什么是闭包（closure），为什么要用它？

```js
// 闭包是指有权访问另一个函数作用域中变量的函数，
// 创建方式:在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。
闭包的特性：
1.函数内再嵌套函数
2.内部函数可以引用外层的参数和变量
3.参数和变量不会被垃圾回收机制回收
// 执行say667()后,say667()闭包内部变量会存在,而闭包内部函数的内部变量不会存在
// 使得Javascript的垃圾回收机制GC不会收回say667()所占用的资源
// 因为say667()的内部函数的执行需要依赖say667()中的变量
// 这是对闭包作用的非常直白的描述
function say667() {
    var num = 666;
    var sayAlert = function() {
        alert(num);
    }
    num++;
    return sayAlert;
}
var sayAlert = say667();
sayAlert()//执行结果应该弹出的667
```


## JSON 的了解？
```js
JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。
它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小
```

## Ajax 是什么? 如何创建一个Ajax？
```
ajax的全称：Asynchronous Javascript And XML。
异步传输+js+xml。
所谓异步，在这里简单地解释就是：向服务器发送请求的时候，我们不必等待结果，而是可以同时做其他的事情，等到有了结果它自己会根据设定进行后续操作，与此同时，页面是不会发生整页刷新的，提高了用户体验。
(1)创建XMLHttpRequest对象,也就是创建一个异步调用对象
(2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
(3)设置响应HTTP请求状态变化的函数
(4)发送HTTP请求
(5)获取异步调用返回的数据
(6)使用JavaScript和DOM实现局部刷新
```

## Ajax 解决浏览器缓存问题？
```
1、在ajax发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0")。
2、在ajax发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。
3、在URL后面加上一个随机数： "fresh=" + Math.random();。
4、在URL后面加上时间搓："nowtime=" + new Date().getTime();。
5、如果是使用jQuery，直接这样就可以了 $.ajaxSetup({cache:false})。这样页面的所有ajax都会执行这条语句就是不需要保存缓存记录。
```


## 同步和异步的区别?

```
同步的概念应该是来自于OS中关于同步的概念:不同进程为协同完成某项工作而在先后次序上调整(通过阻塞,唤醒等方式).同步强调的是顺序性.谁先谁后.异步则不存在这种顺序性.

同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,等请求完，页面刷新，新内容出现，用户看到新内容,进行下一步操作。

异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。等请求完，页面不刷新，新内容也会出现，用户看到新内容。
```

## 异步加载JS的方式有哪些？

```
(1) defer，只支持IE
(2) async：
(3) 创建script，插入到DOM中，加载完毕后callBack
```

## innerHTML,outerHTML,innerText,outerText

```
innerHTML: 设置或获取标签内的 HTML
outerHTML: 设置或获取标签内的 HTML 及 自身的HTML
innerText: 设置或获取位于对象起始和结束标签内的文本
outerText: 设置(包括标签) 或获取(不包括标签) 对象的文本
```

## 添加 删除 替换 插入到某个接点的方法

```js
obj.appendChidl();
obj.innersetBefore();
obj.replaceChild();
obj.removeChild();
```

## 如何阻止事件的冒泡

```js
function stopPP(e) {
    var evt = e || window.event;
    //IE用cancelBubble=true来阻止而FF下需要用stopPropagation方法
    evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble = true);
}
```

## 异步加载js方案

```js
1.defer，只支持IE
2.async：
3.创建script，插入到DOM中，加载完毕后callBack，见代码：
function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) { //IE
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        //Others: Firefox, Safari, Chrome, and Opera
        script.onload = function() {
            callback();
        };
    }
    script.src = url;
    document.body.appendChild(script);
}
```

## 如何在HTML中添加事件方法

```js
1、标签之中直接添加 onclick="fun()";
2、JS添加 Eobj.onclick = method;
3、现代事件  IE：obj.attachEvent('onclick', method)；
            FF: obj.addEventListener('click', method, false);
```

