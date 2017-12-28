# jquery

> jQuery对象和DOM对象相互转换

```js
// 1. DOM 对象转成 jQuery 对象
var v = document.getElementById("v");
var $v = $(v); 
// 2. jQuery 对象转成 DOM 对象 
var $v = $("#v");
var v = $v[0]; 
// 或
var v = $v.get(0); 
```


>  JQuery的源码看过吗？能不能简单概况一下它的实现原理？

>  jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？

>  jquery中如何将数组转化为json字符串，然后再转化回来？

>  jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？

>  jquery.extend 与 jquery.fn.extend的区别？

		* jquery.extend 为jquery类添加类方法，可以理解为添加静态方法
		* jquery.fn.extend:
			源码中jquery.fn = jquery.prototype，所以对jquery.fn的扩展，就是为jquery类添加成员函数
		使用：
		jquery.extend扩展，需要通过jquery类来调用，而jquery.fn.extend扩展，所有jquery实例都可以直接调用。


>  jQuery 的队列是如何实现的？队列可以用在哪些地方？

>  谈一下Jquery中的bind(),live(),delegate(),on()的区别？

>  JQuery一个对象可以同时绑定多个事件，这是如何实现的？

>  是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？

>  jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）

>  针对 jQuery性能的优化方法？


>  JQuery的源码看过吗？能不能简单说一下它的实现原理？

>  jquery 中如何将数组转化为json字符串，然后再转化回来？

jQuery中没有提供这个功能，所以你需要先编写两个jQuery的扩展：

		$.fn.stringifyArray = function(array) {
		    return JSON.stringify(array)
		}

		$.fn.parseArray = function(array) {
		    return JSON.parse(array)
		}

		然后调用：
		$("").stringifyArray(array)

>  jQuery和Zepto的区别？各自的使用场景？

>  针对 jQuery 的优化方法？

		*基于Class的选择性的性能相对于Id选择器开销很大，因为需遍历所有DOM元素。

		*频繁操作的DOM，先缓存起来再操作。用Jquery的链式调用更好。
         比如：var str=$("a").attr("href");

		*for (var i = size; i < arr.length; i++) {}
         for 循环每一次循环都查找了数组 (arr) 的.length 属性，在开始循环的时候设置一个变量来存储这个数字，可以让循环跑得更快：
         for (var i = size, length = arr.length; i < length; i++) {}



>  Zepto的点透问题如何解决？

>  jQueryUI如何自定义组件?

>  需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？

>  如何判断当前脚本运行在浏览器还是node环境中？（阿里）

		this === window ? 'browser' : 'node';

		通过判断Global对象是否为window，如果不为window，当前脚本没有运行在浏览器中

>  移动端最小触控区域是多大？

>  jQuery 的 slideUp动画 ，如果目标元素是被外部事件驱动, 当鼠标快速地连续触发外部元素事件, 动画会滞后的反复执行，该如何处理呢?

		jquery stop(): 如：$("#div").stop().animate({width:"100px"},100);