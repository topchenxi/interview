# jquery

## jQuery对象和DOM对象相互转换

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


## JQuery的源码看过吗？能不能简单概况一下它的实现原理？

## jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？

## jquery中如何将数组转化为json字符串，然后再转化回来？

## jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？

## jquery.extend 与 jquery.fn.extend的区别？

		* jquery.extend 为jquery类添加类方法，可以理解为添加静态方法
		* jquery.fn.extend:
			源码中jquery.fn = jquery.prototype，所以对jquery.fn的扩展，就是为jquery类添加成员函数
		使用：
		jquery.extend扩展，需要通过jquery类来调用，而jquery.fn.extend扩展，所有jquery实例都可以直接调用。


## jQuery 的队列是如何实现的？队列可以用在哪些地方？

## 谈一下Jquery中的bind(),live(),delegate(),on()的区别？

## JQuery一个对象可以同时绑定多个事件，这是如何实现的？

## 是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？

## jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）

## 针对 jQuery性能的优化方法？


## JQuery的源码看过吗？能不能简单说一下它的实现原理？

## jquery 中如何将数组转化为json字符串，然后再转化回来？

jQuery中没有提供这个功能，所以你需要先编写两个jQuery的扩展：

		$.fn.stringifyArray = function(array) {
		    return JSON.stringify(array)
		}

		$.fn.parseArray = function(array) {
		    return JSON.parse(array)
		}

		然后调用：
		$("").stringifyArray(array)

## jQuery和Zepto的区别？各自的使用场景？

## 针对 jQuery 的优化方法？

		*基于Class的选择性的性能相对于Id选择器开销很大，因为需遍历所有DOM元素。

		*频繁操作的DOM，先缓存起来再操作。用Jquery的链式调用更好。
         比如：var str=$("a").attr("href");

		*for (var i = size; i < arr.length; i++) {}
         for 循环每一次循环都查找了数组 (arr) 的.length 属性，在开始循环的时候设置一个变量来存储这个数字，可以让循环跑得更快：
         for (var i = size, length = arr.length; i < length; i++) {}



## Zepto的点透问题如何解决？

## jQueryUI如何自定义组件?

## 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？

## 如何判断当前脚本运行在浏览器还是node环境中？（阿里）

		this === window ? 'browser' : 'node';

		通过判断Global对象是否为window，如果不为window，当前脚本没有运行在浏览器中

## 移动端最小触控区域是多大？

## jQuery 的 slideUp动画 ，如果目标元素是被外部事件驱动, 当鼠标快速地连续触发外部元素事件, 动画会滞后的反复执行，该如何处理呢?

		jquery stop(): 如：$("#div").stop().animate({width:"100px"},100);


22. Jq中如何实现多库并存?

Noconfict 多库共存就是“$ ”符号的冲突。 

方法一： 利用jQuery的实用函数$.noConflict();这个函数归还$的名称控制权给另一个库，因此可以在页面上使用其他库。这时，我们可以用"jQuery "这个名称调用jQuery的功能。 $.noConflict(); 
jQuery('#id').hide(); 
.....
//或者给jQuery一个别名 
var $j=jQuery 
$j('#id').hide(); 
.....

方法二： (function($){})(jQuery) 

方法三： jQuery(function($){}) 
通过传递一个函数作为jQuery的参数，因此把这个函数声明为就绪函数。 我们声明$为就绪函数的参数，因为jQuery总是吧jQuery对象的引用作为第一个参数传递，所以就保证了函数的执行。


23.Jq中get和eq有什么区别？

get() :取得其中一个匹配的元素。num表示取得第几个匹配的元素，get多针对集合元素，返回的是DOM对象组成的数组 eq():获取第N个元素，下标都是从0开始，返回的是一个JQuery对象


24.如何通过原生js 判断一个元素当前是显示还是隐藏状态?

if( document.getElementById("div").css("display")==='none')
if( document.getElementById("div").css("display")==='block')
$("#div").is(":hidden"); // 判断是否隐藏
$("#div").is(":visible")


25.Jq如何判断元素显示隐藏？

//第一种：使用CSS属性 
var display =$('#id').css('display'); 
if(display == 'none'){    alert("我是隐藏的！"); }
//第二种：使用jquery内置选择器 
<div id="test"> <p>仅仅是测试所用</p> </div>
if($("#test").is(":hidden")){        $("#test").show();    //如果元素为隐藏,则将它显现 }else{       $("#test").hide();     //如果元素为显现,则将其隐藏 }
//第三种：jQuery判断元素是否显示 是否隐藏
var node=$('#id');
if(node.is(':hidden')){　　//如果node是隐藏的则显示node元素，否则隐藏
　　node.show();　
}else{
　　node.hide();
}



27.Jq绑定事件的几种方式？on bind ?

jQuery中提供了四种事件监听方式，分别是bind、live、delegate、on，对应的解除监听的函数分别是unbind、die、undelegate、off

Bind( )是使用频率较高的一种，作用就是在选择到的元素上绑定特定事件类型的监听函数;

Live( )可以对后生成的元素也可以绑定相应的事件,处理机制就是把事件绑定在DOM树的根节点上，而不是直接绑定在某个元素上;

Delegate( )采用了事件委托的概念，不是直接为子元素绑定事件，而是为其父元素（或祖先元素也可）绑定事件，当在div内任意元素上点击时，事件会一层层从event target向上冒泡，直至到达你为其绑定事件的元素；

on( )方法可以绑定动态添加到页面元素的事件，on()方法绑定事件可以提升效率；


28.Jq中如何将一个jq对象转化为dom对象？

方法一：
jQuery对象是一个数据对象，可以通过[index]的方法，来得到相应的DOM对象。 
如：var $v =$("#v") ; //jQuery对象 
var v=$v[0]; //DOM对象 
alert(v.checked) //检测这个checkbox是否被选中 

方法二：
jQuery本身提供，通过.get(index)方法，得到相应的DOM对象 
如：var $v=$("#v"); //jQuery对象 
var v=$v.get(0); //DOM对象 
alert(v.checked) //检测这个checkbox是否被选中


29.Jq中有几种选择器?分别是什么?

层叠选择器、基本过滤选择器、内容过滤选择器、可视化过滤选择器、属性过滤选择器、子元素过滤选择器、表单元素选择器、表单元素过滤选择器


30.Jq中怎么样编写插件?

//第一种是类级别的插件开发：
//1.1 添加一个新的全局函数 添加一个全局函数，我们只需如下定义： 
jQuery.foo = function() {
     alert('This is a test. This is only a test.');  };   

//1.2 增加多个全局函数 添加多个全局函数，可采用如下定义： 
jQuery.foo = function() {
       alert('This is a test. This is only a test.');  };  
jQuery.bar = function(param) {
      alert('This function takes a parameter, which is "' + param + '".');  };   调用时和一个函数的一样的:jQuery.foo();jQuery.bar();或者$.foo();$.bar('bar');
//1.3 使用jQuery.extend(object);　 
jQuery.extend({
      foo: function() {
          alert('This is a test. This is only a test.');
        },
      bar: function(param) {
          alert('This function takes a parameter, which is "' + param +'".');
        }
     }); 
//1.4 使用命名空间
// 虽然在jQuery命名空间中，我们禁止使用了大量的javaScript函数名和变量名。
// 但是仍然不可避免某些函数或变量名将于其他jQuery插件冲突，因此我们习惯将一些方法
// 封装到另一个自定义的命名空间。
jQuery.myPlugin = {         
foo:function() {         
  alert('This is a test. This is only a test.');         
 },         
 bar:function(param) {         
  alert('This function takes a parameter, which is "' + param + '".');   
 }        
}; 
//采用命名空间的函数仍然是全局函数，调用时采用的方法： 
$.myPlugin.foo();        
$.myPlugin.bar('baz');
//通过这个技巧（使用独立的插件名），我们可以避免命名空间内函数的冲突。

//第二种是对象级别的插件开发
//形式1： 
(function($){    
  $.fn.extend({    
   pluginName:function(opt,callback){    
             // Our plugin implementation code goes here.      
   }    
  })    
})(jQuery);  

//形式2：
(function($) {      
   $.fn.pluginName = function() {    
        // Our plugin implementation code goes here.    
   };     
})(jQuery);
//形参是$，函数定义完成之后,把jQuery这个实参传递进去.立即调用执行。
//这样的好处是,我们在写jQuery插件时,也可以使用$这个别名,而不会与prototype引起冲突


31.$('div+.ab')和$('.ab+div') 哪个效率高？

$('div+.ab')效率高


32.$.map和$.each有什么区别

map()方法主要用来遍历操作数组和对象，会返回一个新的数组。$.map()方法适用于将数组或对象每个项目新阵列映射到一个新数组的函数；
each()主要用于遍历jquery对象，返回的是原来的数组，并不会新创建一个数组。



37. jquery和zepto有什么区别?

1.针对移动端程序，Zepto有一些基本的触摸事件可以用来做触摸屏交互（tap事件、swipe事件），Zepto是不支持IE浏览器的，这不是Zepto的开发者Thomas Fucks在跨浏览器问题上犯了迷糊，而是经过了认真考虑后为了降低文件尺寸而做出的决定，就像jQuery的团队在2.0版中不再支持旧版的IE（6 7 8）一样。因为Zepto使用jQuery句法，所以它在文档中建议把jQuery作为IE上的后备库。那样程序仍能在IE中，而其他浏览器则能享受到Zepto在文件大小上的优势，然而它们两个的API不是完全兼容的，所以使用这种方法时一定要小心，并要做充分的测试。

2.Dom操作的区别：添加id时jQuery不会生效而Zepto会生效。

3.zepto主要用在移动设备上，只支持较新的浏览器，好处是代码量比较小，性能也较好。
jquery主要是兼容性好，可以跑在各种pc，移动上，好处是兼容各种浏览器，缺点是代码量大，同时考虑兼容，性能也不够好。


38. $(function(){})和window.onload 和 $(document).ready(function(){})

window.onload:用于当页面的所有元素，包括外部引用文件，图片等都加载完毕时运行函数内的函数。load方法只能执行一次，如果在js文件里写了多个，只能执行最后一个。

$(document).ready(function(){})和$(function(){})都是用于当页面的标准DOM元素被解析成DOM树后就执行内部函数。这个函数是可以在js文件里多次编写的，对于多人共同编写的js就有很大的优势，因为所有行为函数都会执行到。而且$(document).ready()函数在HMTL结构加载完后就可以执行，不需要等大型文件加载或者不存在的连接等耗时工作完成才执行，效率高。


39. Jq中 attr 和 prop 有什么区别

对于HTML元素本身就带有的固有属性，在处理时，使用prop方法。
对于HTML元素我们自己自定义的DOM属性，在处理时，使用attr方法。
