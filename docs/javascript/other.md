## 如何实现浏览器内多个标签页之间的通信? (阿里)
```
WebSocket、SharedWorker；
也可以调用localstorge、cookies等本地存储方式；

localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，
我们通过监听事件，控制它的值来进行页面信息通信；
注意quirks：Safari 在无痕模式下设置localstorge值时会抛出 QuotaExceededError 的异常；
```

## webSocket如何兼容低浏览器？(阿里)
```
Adobe Flash Socket 、
ActiveX HTMLFile (IE) 、
基于 multipart 编码发送 XHR 、
基于长轮询的 XHR
```

## 异步编程？
```
方法1：回调函数，优点是简单、容易理解和部署，缺点是不利于代码的阅读和维护，各个部分之间高度耦合（Coupling），流程会很混乱，而且每个任务只能指定一个回调函数。

方法2：时间监听，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以“去耦合”（Decoupling），有利于实现模块化。缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。

方法3：发布/订阅，性质与“事件监听”类似，但是明显优于后者。

方法4：Promises对象，是CommonJS工作组提出的一种规范，目的是为异步编程提供统一接口。
简单说，它的思想是，每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。
```

## 事件流?事件捕获？事件冒泡？
```
事件流：从页面中接收事件的顺序。也就是说当一个事件产生时，这个事件的传播过程，就是事件流。

IE中的事件流叫事件冒泡；事件冒泡：事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的节点（文档）。对于html来说，就是当一个元素产生了一个事件，它会把这个事件传递给它的父元素，父元素接收到了之后，还要继续传递给它的上一级元素，就这样一直传播到document对象（亲测现在的浏览器到window对象，只有IE8及下不这样

事件捕获是不太具体的元素应该更早接受到事件，而最具体的节点应该最后接收到事件。他们的用意是在事件到达目标之前就捕获它；也就是跟冒泡的过程正好相反，以html的click事件为例，document对象（DOM级规范要求从document开始传播，但是现在的浏览器是从window对象开始的）最先接收到click事件的然后事件沿着DOM树依次向下传播，一直传播到事件的实际目标；
```

## 事件委托？有什么好处?
```
1.利用冒泡的原理，把事件加到父级上，触发执行效果
2.好处：新添加的元素还会有之前的事件；提高性能。
```

## 强制转换 显式转换 隐式转换
```

//强制类型转换：
Boolean(0)                // => false - 零
           Boolean(new object())   // => true - 对象
               Number(undefined)       // =>   NaN
               Number(null)              // => 0
               String(null)              // => "null"
parseInt( )
parseFloat( )
JSON.parse( )
JSON.stringify ( )
隐式类型转换：
在使用算术运算符时，运算符两边的数据类型可以是任意的，比如，一个字符串可以和数字相加。之所以不同的数据类型之间可以做运算，是因为JavaScript引擎在运算之前会悄悄的把他们进行了隐式类型转换的
（例如：x+"" //等价于String(x)
+x //等价于Number(x)
x-0 //同上
!!x //等价于Boolean(x),是双叹号）

显式转换： 
如果程序要求一定要将某一类型的数据转换为另一种类型，则可以利用强制类型转换运算符进行转换，这种强制转换过程称为显示转换。
显示转换是你定义让这个值类型转换成你要用的值类型，是底到高的转换。例 int 到float就可以直接转，int i=5,想把他转换成char类型，就用显式转换（char）i
```


## 移动端上什么是点击穿透?

```
点击穿透现象有3种：
点击穿透问题：点击蒙层（mask）上的关闭按钮，蒙层消失后发现触发了按钮下面元素的click事件跨页面点击穿透问题：如果按钮下面恰好是一个有href属性的a标签，那么页面就会发生跳转另一种跨页面点击穿透问题：这次没有mask了，直接点击页内按钮跳转至新页，然后发现新页面中对应位置元素的click事件被触发了

解决方案：
1、只用touch
最简单的解决方案，完美解决点击穿透问题
把页面内所有click全部换成touch事件（ touchstart 、’touchend’、’tap’）

2、只用click
下下策，因为会带来300ms延迟，页面内任何一个自定义交互都将增加300毫秒延迟

3、tap后延迟350ms再隐藏mask
改动最小，缺点是隐藏mask变慢了，350ms还是能感觉到慢的

4、pointer-events
比较麻烦且有缺陷， 不建议使用mask隐藏后，给按钮下面元素添上 pointer-events: none; 样式，让click穿过去，350ms后去掉这个样式，恢复响应缺陷是mask消失后的的350ms内，用户可以看到按钮下面的元素点着没反应，如果用户手速很快的话一定会发现
```

## 什么是移动端的300ms延迟？什么是点击穿透？解决方案?
```
移动端300ms延迟：假定这么一个场景。用户在 浏览器里边点击了一个链接。由于用户可以进行双击缩放或者双击滚动的操作，当用户一次点击屏幕之后，浏览器并不能立刻判断用户是确实要打开这个链接，还是想要进行双击操作。因此，浏览器 就等待 300 毫秒，以判断用户是否再次点击了屏幕。也就是说，当我们点击页面的时候移动端浏览器并不是立即作出反应，而是会等上一小会儿才会出现点击的效果。

点击穿透：假如页面上有两个元素A和B。B元素在A元素之上。我们在B元素的touchstart事件上注册了一个回调函数，该回调函数的作用是隐藏B元素。我们发现，当我们点击B元素，B元素被隐藏了，随后，A元素触发了click事件。这是因为在移动端浏览器，事件执行的顺序是touchstart > touchend > click。而click事件有300ms的延迟，当touchstart事件把B元素隐藏之后，隔了300ms，浏览器触发了click事件，但是此时B元素不见了，所以该事件被派发到了A元素身上。如果A元素是一个链接，那此时页面就会意外地跳转。

300ms延迟解决方案：
(1) 禁用缩放，在html文档头部加meta标签如下：
<meta name=”viewport” content=”user-scalable=no”/>

(2) 更改默认的视口宽度 （响应式布局，消除了站点上可能存在的双击绽放的请求）
<meta name=”viewport” content=”width=device-width”/>

(3) Css touch-action
touch-action:none;在该元素上的操作不会触发用户代理的任何行为，无需进行3000ms延迟判断。

(4) FastClick为解决移动端浏览器300毫秒延迟开发的一个轻量级的库
点击穿透解决方案：
（1）只用touch
（2）只用click
（3）tap后延迟350ms再隐藏mask
（4）pointer-events
```



## 开发时如何对项目进行管理?gulp?
```
利用gulp等前端工作流管理工具管理项目。 gulp是新一代的前端项目构建工具，你可以使用gulp及其插件对你的项目代码（less,sass）进行编译，还可以压缩你的js和css代码，甚至压缩你的图片，能够合并文件，压缩文件，语法检查，监听文件变化，测试，转换二进制，转换图片等一系列功能。gulp仅有少量的API，所以非常容易学习。实现良好的项目管理。
```

## commonjs?requirejs?AMD|CMD|UMD?
```
1.CommonJS就是为JS的表现来制定规范，NodeJS是这种规范的实现，webpack 也是以CommonJS的形式来书写。因为js没有模块的功能，所以CommonJS应运而生。但它不能在浏览器中运行。 CommonJS定义的模块分为:{模块引用(require)} {模块定义(exports)} {模块标识(module)} 

2.RequireJS 是一个JavaScript模块加载器。 RequireJS有两个主要方法(method): define()和require()。这两个方法基本上拥有相同的定义(declaration) 并且它们都知道如何加载的依赖关系，然后执行一个回调函数(callback function)。与require()不同的是， define()用来存储代码作为一个已命名的模块。 因此define()的回调函数需要有一个返回值作为这个模块定义。这些类似被定义的模块叫作AMD (Asynchronous Module Definition，异步模块定义)。 

3.AMD 是 RequireJS 在推广过程中对模块定义的规范化产出 AMD异步加载模块。它的模块支持对象 函数 构造器 字符串 JSON等各种类型的模块。 适用AMD规范适用define方法定义模块。

4.CMD是SeaJS 在推广过程中对模块定义的规范化产出
AMD与CDM的区别：
（1）对于于依赖的模块，AMD 是提前执行(好像现在也可以延迟执行了)，CMD 是延迟执行。
（2）AMD 推崇依赖前置，CMD 推崇依赖就近。
（3）AMD 推崇复用接口，CMD 推崇单用接口。
（4）书写规范的差异。

5.umd是AMD和CommonJS的糅合。
AMD 浏览器第一的原则发展 异步加载模块。
CommonJS模块以服务器第一原则发展，选择同步加载，它的模块无需包装(unwrapped modules)。这迫使人们又想出另一个更通用的模式UMD ( Universal Module Definition ), 希望解决跨平台的解决方案。UMD先判断是否支持Node.js的模块( exports )是否存在，存在则使用Node.js模块模式。
```

## 哪些操作会造成内存泄漏？
```
内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）
```

## 说说你对Promise的理解

依照 `Promise/A+` 的定义，`Promise` 有四种状态：

	pending: 初始状态, 非 fulfilled 或 rejected.
	fulfilled: 成功的操作.
	rejected: 失败的操作.
	settled: Promise已被fulfilled或rejected，且不是pending

另外， `fulfilled` 与 `rejected` 一起合称 `settled`。

`Promise` 对象用来进行延迟(deferred) 和异步(asynchronous ) 计算。

## Promise 的构造函数

构造一个 `Promise`，最基本的用法如下：

	var promise = new Promise(function(resolve, reject) {
	    if (...) {  // succeed
	        resolve(result);
	    } else {   // fails
	        reject(Error(errMessage));
	    }
	});

`Promise` 实例拥有 `then` 方法（具有 `then` 方法的对象，通常被称为 `thenable`）。它的使用方法如下：

	promise.then(onFulfilled, onRejected)

接收两个函数作为参数，一个在 `fulfilled` 的时候被调用，一个在 `rejected` 的时候被调用，接收参数就是 `future，onFulfilled` 对应 `resolve`, `onRejected` 对应 `reject`。


## js数组常用函数
```
1.push() 尾部添加。
2.pop() 尾部删除。
3.unshift() 头部添加。
4.shift() 头部删除。
5.splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。（该方法会改变原始数组）
6.slice() 方法可从已有的数组中返回选定的元素。（该方法不不不会改变原始数组）
7.concat() 方法用于连接两个或多个数组。（该方法不不不会改变原始数组）
8.reverse() 方法用于颠倒数组中元素的顺序。（该方法会改变原始数组）
9.sort() 方法用于对数组的元素进行排序。（该方法会改变原始数组）
10.join() 方法用于把数组中的所有元素放入一个字符串
```