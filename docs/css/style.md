# CSS - style

## CSS的盒子模型

```
1.w3c(标准) 盒子模型 : 范围包括 margin、border、padding、content
2.ie 盒子模型 : 范围包括 margin、border、padding、content

区别:IE 盒子模型(IE的content部分把 border 和 padding计算了进去)


```

## CSS3有哪些新特性？

```
新增各种CSS选择器	（: not(.input)：所有 class 不是“input”的节点）
圆角		    （border-radius:8px）
多列布局	    （multi-column layout）
阴影和反射	（Shadow\Reflect）
文字特效		（text-shadow、）
文字渲染		（Text-decoration）
线性渐变		（gradient）
旋转		 	（transform）
缩放,定位,倾斜,动画,多背景
例如:transform:\scale(0.85,0.90)\ translate(0px,-30px)\ skew(-9deg,0deg)\Animation:
```

## link和import的区别

```
引入样式三种方式
1.<link rel="stylesheet" href="xx.css">
2.js里面 @import url(xx.css);
3.<style> p {margin: 0 } </style> 

1,2都是外部引用CSS的方式，但是存在一定的区别:

- link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。
- link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。
- link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
- link支持使用Javascript控制DOM去改变样式；而@import不支持

```



## css 选择器

```
1.id选择器（ # myid）
2.类选择器（.myclassname）
3.标签选择器（div, h1, p）
4.相邻选择器（h1 + p）
5.子选择器（ul > li）
6.后代选择器（li a）
7.通配符选择器（ * ）
8.属性选择器（a[rel = "external"]）
9.伪类选择器（a:hover, li:nth-child）

指定只有当p元素是其父级的第一个子级的样式。(a:first-child)
选择每个p元素是其父级的最后一个子级。(a:last-child)
可继承的样式： font-size font-family color, UL LI DL DD DT;

不可继承的样式：border padding margin width height ;

```


## 为什么要初始化CSS样式

```
 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
```

## border:none以及border:0的区别

```
【border:0;】把border设为“0”像素效果等于border-width:0，浏览器依然对border-width、border-color 进行了渲染，即已经占用了内存值。

【border:none;】把border设为“none”，实际效果等同于border-style:none，浏览器解析“none”时将不作出渲染动作，即不会消耗内存值。

兼容性差异：

IE6、IE7中，border为“none”时，标签button、input边框依然存在。

input,button{border:0;}

```


## 清除浮动

```
（1）父级div定义height。
（2）结尾处加空div标签clear:both。
（3）父级div定义伪类:after和zoom。
（4）父级div定义overflow:hidden。
（5）父级div定义overflow:auto。
（6）父级div也浮动，需要定义宽度。
（7）父级div定义display:table。
（8）结尾处加br标签clear:both。

解析原理：
1) display:block 使生成的元素以块级元素显示,占满剩余空间;
2) height:0 避免生成内容破坏原有布局的高度。
3) visibility:hidden 使生成的内容不可见，并允许可能被生成内容盖住的内容可以进行点击和交互;
4）通过 content:"."生成内容作为最后一个元素，至于content里面是点还是其他都是可以的，
例如oocss里面就有经典的 content:".",有些版本可能content 里面内容为空,一丝冰凉是不推荐这样做的,firefox直到7.0 content:”"
仍然会产生额外的空隙；
5）zoom：1 触发IE hasLayout。

通过分析发现，除了clear：both用来闭合浮动的，其他代码无非都是为了隐藏掉content生成的内容，
这也就是其他版本的闭合浮动为什么会有font-size：0，line-height：0。

```

##  box-sizing

```
box-sizing: content-box | border-box | inherit ;

content-box:
宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框(元素默认效果)。
border-box:
元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。
通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。

```


## position的值relative和absolute定位原点是？

```
absolute:生成绝对定位的元素，相对于值不为 static的第一个父元素进行定位。
fixed   :（老IE不支持）生成绝对定位的元素，相对于浏览器窗口进行定位。
relative:生成相对定位的元素，相对于其正常位置进行定位。
static  :默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。
inherit :规定从父元素继承 position 属性的值。

```

## 对BFC规范(块级格式化上下文：block formatting context)的理解？

```
（W3C CSS 2.1 规范中的一个概念,它是一个独立容器，决定了元素如何对其内容进行定位,以及与其他元素的关系和相互作用。）
一个页面是由很多个 Box 组成的,元素的类型和 display 属性,决定了这个 Box 的类型。
不同类型的 Box,会参与不同的 Formatting Context（决定如何渲染文档的容器）,因此Box内的元素会以不同的方式渲染,也就是说BFC内部的元素和外部的元素不会互相影响。
```

## position:fixed;在android下无效怎么处理？

```
1. 使用transform样式的元素，不要包含fixed定位的子元素(因为会失效)

fixed的元素是相对整个页面固定位置的，你在屏幕上滑动只是在移动这个所谓的viewport，
原来的网页还好好的在那，fixed的内容也没有变过位置，
所以说并不是iOS不支持fixed，只是fixed的元素不是相对手机屏幕固定的。
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
```