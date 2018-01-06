# base

## JavaScript 的数据类型

原始类型 : `undefined`,`null`,`Boolean`,`Number`,`String`,`Symbol`(新增)
```
null（空）:JavaScript 的关键字，用于描述“空值”，对其执行 typeof 操作，返回“object”
undefined（未定义）:是预定义的全局变量，其值为“未定义”，它是变量的一种取值，表示变量没有初始化。

```

## 内置对象
```
- 数据封装类对象：Object、Array、Boolean、Number、String
- 其他对象：Function、Arguments、Math、Date、RegExp、Error
- ES6新增对象：Symbol、Map、Set、Promises、Proxy、Reflect
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

## 声明函数作用提升?声明变量和声明函数的提升有什么区别?
```
(1) 变量声明提升：变量申明在进入执行上下文就完成了。
只要变量在代码中进行了声明，无论它在哪个位置上进行声明， js引擎都会将它的声明放在范围作用域的顶部；

(2) 函数声明提升：执行代码之前会先读取函数声明，意味着可以把函数申明放在调用它的语句后面。
只要函数在代码中进行了声明，无论它在哪个位置上进行声明， js引擎都会将它的声明放在范围作用域的顶部；

(3) 变量or函数声明：函数声明会覆盖变量声明，但不会覆盖变量赋值。
同一个名称标识a，即有变量声明var a，又有函数声明function a() {}，不管二者声明的顺序，函数声明会覆盖变量声明，也就是说，此时a的值是声明的函数function a() {}。
注意：如果在变量声明的同时初始化a，或是之后对a进行赋值，此时a的值变量的值。
eg: var a; var c = 1; a = 1; function a() { return true; } console.log(a);
```

## 什么是闭包?* 堆栈溢出有什么区别？ 内存泄漏?
```
闭包：就是能够读取其他函数内部变量的函数。
特性:
1.函数嵌套函数
2.函数内部可以引用外部的参数和变量
3.参数和变量不会被垃圾回收机制回收

堆栈溢出：就是不顾堆栈中分配的局部数据块大小，向该数据块写入了过多的数据，导致数据越界，结果覆盖了别的数据。经常会在递归中发生。
内存泄露是指：用动态存储分配函数内存空间，在使用完毕后未释放，导致一直占据该内存单元。直到程序结束。指任何对象在您不再拥有或需要它之后仍然存在。

造成内存泄漏：
setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）
防止内存泄露：
1、不要动态绑定事件；
2、不要在动态添加，或者会被动态移除的dom上绑事件，用事件冒泡在父容器监听事件；
3、如果要违反上面的原则，必须提供destroy方法，保证移除dom后事件也被移除，这点可以参考Backbone的源代码，做的比较好；
4、单例化，少创建dom，少绑事件。

```

## 谈谈This对象的理解。

```
- this总是指向函数的直接调用者（而非间接调用者）；
- 如果有new关键字，this指向new出来的那个对象；
- 在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window；

```

## 简述下 this 和定义属性和方法的时候有什么区别?Prototype？
```
this表示当前对象，如果在全局作用范围内使用this，则指代当前页面对象window； 如果在函数中使用this，则this指代什么是根据运行时此函数在什么对象上被调用。 我们还可以使用apply和call两个全局方法来改变函数中this的具体指向。

prototype本质上还是一个JavaScript对象。 并且每个函数都有一个默认的prototype属性。

在prototype上定义的属性方法为所有实例共享，所有实例皆引用到同一个对象，单一实例对原型上的属性进行修改，也会影响到所有其他实例。
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



##  JavaScript原型，原型链 ? 有什么特点？
```js
每个对象都会在其内部初始化一个属性，就是prototype(原型)，当我们访问一个对象的属性时，
如果这个对象内部不存在这个属性，那么他就会去prototype里找这个属性，这个prototype又会有自己的prototype，
于是就这样一直找下去，也就是我们平时所说的原型链的概念。
关系：instance.constructor.prototype = instance.__proto__

特点：
JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。


当我们需要一个属性的时，Javascript引擎会先看当前对象中是否有这个属性， 如果没有的话，
就会查找他的Prototype对象是否有这个属性，如此递推下去，一直检索到 Object 内建对象。
function Func(){}
Func.prototype.name = "Sean";
Func.prototype.getInfo = function() {
  return this.name;
}
var person = new Func();//现在可以参考var person = Object.create(oldObject);
console.log(person.getInfo());//它拥有了Func的属性和方法
//"Sean"
console.log(Func.prototype);
// Func { name="Sean", getInfo=function()}
```

## 如何将浮点数点左边的数每三位添加一个逗号，如12000000.11转化为『12,000,000.11』?
```js
function commafy(num){
return num && num
    .toString()
    .replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2){
        return $2 + ',';
    });
}
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

##  如何解决跨域问题?
```
jsonp、 iframe、window.name、window.postMessage、服务器上设置代理页面
```

## What is a Polyfill?
```
        polyfill 是“在旧版浏览器上复制标准 API 的 JavaScript 补充”,可以动态地加载 JavaScript 代码或库，在不支持这些标准 API 的浏览器中模拟它们。
        例如，geolocation（地理位置）polyfill 可以在 navigator 对象上添加全局的 geolocation 对象，还能添加 getCurrentPosition 函数以及“坐标”回调对象，
        所有这些都是 W3C 地理位置 API 定义的对象和函数。因为 polyfill 模拟标准 API，所以能够以一种面向所有浏览器未来的方式针对这些 API 进行开发，
        一旦对这些 API 的支持变成绝对大多数，则可以方便地去掉 polyfill，无需做任何额外工作。
```

## 做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？
```
比如： html5shiv、Geolocation、Placeholder
```



## JavaScript如何实现一个类，怎么实例化这个类？*

- 构造函数法（this + prototype） -- 用 new 关键字 生成实例对象
- 缺点：用到了 this 和 prototype，编写复杂，可读性差

```javascript
  function Mobile(name, price){
     this.name = name;
     this.price = price;
   }
   Mobile.prototype.sell = function(){
      alert(this.name + "，售价 $" + this.price);
   }
   var iPhone7 = new Mobile("iPhone7", 1000);
   iPhone7.sell();
```
- Object.create 法 -- 用 Object.create() 生成实例对象
- 缺点：不能实现私有属性和私有方法，实例对象之间也不能共享数据
```javascript
 var Person = {
     firstname: "Mark",
     lastname: "Yun",
     age: 25,
     introduce: function(){
         alert('I am ' + Person.firstname + ' ' + Person.lastname);
     }
 };

 var person = Object.create(Person);
 person.introduce();

 // Object.create 要求 IE9+，低版本浏览器可以自行部署：
 if (!Object.create) {
　   Object.create = function (o) {
　　　 function F() {}
　　　 F.prototype = o;
　　　 return new F();
　　};
　}
```
- 极简主义法（消除 this 和 prototype） -- 调用 createNew() 得到实例对象
- 优点：容易理解，结构清晰优雅，符合传统的"面向对象编程"的构造
```javascript
 var Cat = {
   age: 3, // 共享数据 -- 定义在类对象内，createNew() 外
   createNew: function () {
     var cat = {};
     // var cat = Animal.createNew(); // 继承 Animal 类
     cat.name = "小咪";
     var sound = "喵喵喵"; // 私有属性--定义在 createNew() 内，输出对象外
     cat.makeSound = function () {
       alert(sound);  // 暴露私有属性
     };
     cat.changeAge = function(num){
       Cat.age = num; // 修改共享数据
     };
     return cat; // 输出对象
   }
 };

 var cat = Cat.createNew();
 cat.makeSound();
```
- ES6 语法糖 class -- 用 new 关键字 生成实例对象      

```javascript
     class Point {
       constructor(x, y) {
         this.x = x;
         this.y = y;
       }
       toString() {
         return '(' + this.x + ', ' + this.y + ')';
       }
     }

  var point = new Point(2, 3);
```

## Javascript如何实现继承？

- 构造函数绑定：使用 call 或 apply 方法，将父对象的构造函数绑定在子对象上

```js
function Cat(name,color){
 　Animal.apply(this, arguments);
 　this.name = name;
 　this.color = color;
}
```

- 实例继承：将子对象的 prototype 指向父对象的一个实例     
 
```js
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
```

- 拷贝继承：如果把父对象的所有属性和方法，拷贝进子对象

```js
    function extend(Child, Parent) {
  　　　var p = Parent.prototype;
  　　　var c = Child.prototype;
  　　　for (var i in p) {
  　　　   c[i] = p[i];
  　　　}
  　　　c.uber = p;
  　 }
```

- 原型继承：将子对象的 prototype 指向父对象的 prototype

```js
    function extend(Child, Parent) {
        var F = function(){};
      　F.prototype = Parent.prototype;
      　Child.prototype = new F();
      　Child.prototype.constructor = Child;
      　Child.uber = Parent.prototype;
    }
```

- ES6 语法糖 extends：class ColorPoint extends Point {}

```js
    class ColorPoint extends Point {
       constructor(x, y, color) {
          super(x, y); // 调用父类的constructor(x, y)
          this.color = color;
       }
       toString() {
          return this.color + ' ' + super.toString(); // 调用父类的toString()
       }
    }
```

## 解释一下这段代码的意思吗？*

```js
  [].forEach.call($$("*"), function(el){
      el.style.outline = "1px solid #" + (~~(Math.random()*(1<<24))).toString(16);
  })
```
解释：获取页面所有的元素，遍历这些元素，为它们添加1像素随机颜色的轮廓(outline)
1. `$$(sel)` // $$函数被许多现代浏览器命令行支持，等价于 document.querySelectorAll(sel)
2. `[].forEach.call(NodeLists)` // 使用 call 函数将数组遍历函数 forEach 应到节点元素列表
3. `el.style.outline = "1px solid #333"` // 样式 outline 位于盒模型之外，不影响元素布局位置
4. `(1<<24)` // parseInt("ffffff", 16) == 16777215 == 2^24 -1 // 1<<24 == 2^24 == 16777216
5. `Math.random()*(1<<24)` // 表示一个位于 0 到 16777216 之间的随机浮点数
6. `~~Math.random()*(1<<24)` // `~~` 作用相当于 parseInt 取整
7. `(~~(Math.random()*(1<<24))).toString(16)` // 转换为一个十六进制- 

### offsetWidth/offsetHeight,clientWidth/clientHeight与scrollWidth/scrollHeight的区别
```
- offsetWidth/offsetHeight返回值包含**content + padding + border**，效果与e.getBoundingClientRect()相同
- clientWidth/clientHeight返回值只包含**content + padding**，如果有滚动条，也**不包含滚动条**
- scrollWidth/scrollHeight返回值包含**content + padding + 溢出内容的尺寸**
```

## 评价一下三种方法实现继承的优缺点,并改进

```js
function Shape() {}

function Rect() {}

// 方法1
Rect.prototype = new Shape();

// 方法2
Rect.prototype = Shape.prototype;

// 方法3
Rect.prototype = Object.create(Shape.prototype);

Rect.prototype.area = function () {
  // do something
};
```

方法1：

1. 优点：正确设置原型链实现继承
2. 优点：父类实例属性得到继承，原型链查找效率提高，也能为一些属性提供合理的默认值
3. 缺点：父类实例属性为引用类型时，不恰当地修改会导致所有子类被修改
4. 缺点：创建父类实例作为子类原型时，可能无法确定构造函数需要的合理参数，这样提供的参数继承给子类没有实际意义，当子类需要这些参数时应该在构造函数中进行初始化和设置
5. 总结：继承应该是继承方法而不是属性，为子类设置父类实例属性应该是通过在子类构造函数中调用父类构造函数进行初始化

方法2：

1. 优点：正确设置原型链实现继承
2. 缺点：父类构造函数原型与子类相同。修改子类原型添加方法会修改父类

方法3：

1. 优点：正确设置原型链且避免方法1.2中的缺点
2. 缺点：ES5方法需要注意兼容性

改进：

1. 所有三种方法应该在子类构造函数中调用父类构造函数实现实例属性初始化

```
function Rect() {
    Shape.call(this);
}
```


2. 用新创建的对象替代子类默认原型，设置``Rect.prototype.constructor = Rect;``保证一致性
3. 第三种方法的polyfill：

```
function create(obj) {
    if (Object.create) {
        return Object.create(obj);
    }

    function f() {};
    f.prototype = obj;
    return new f();
}
```