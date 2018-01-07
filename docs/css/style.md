# CSS style

## CSS的盒子模型

```
1.w3c(标准) 盒子模型 : 范围包括 margin、border、padding、content (box-sizing: content-box;)
2.ie 盒子模型 : 范围包括 margin、border、padding、content (box-sizing: border-box;)

区别:IE 盒子模型(IE的content部分把 border 和 padding计算了进去)


```

## 对BFC规范的理解？
```
BFC，块级格式化上下文，一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素。在同一个BFC中的两个毗邻的块级盒在垂直方向（和布局方向有关系）的margin会发生折叠。
（W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行布局，以及与其他元素的关系和相互作用。）

创建规则：

1. 根元素
2. 浮动元素（``float``不是``none``）
3. 绝对定位元素（``position``取值为``absolute``或``fixed``）
4. ``display``取值为``inline-block``,``table-cell``, ``table-caption``,``flex``, ``inline-flex``之一的元素
5. ``overflow``不是``visible``的元素

作用：

1. 可以包含浮动元素
2. 不被浮动元素覆盖
3. 阻止父子元素的margin折叠

```

## 对BFC规范(块级格式化上下文：block formatting context)的理解？

```
（W3C CSS 2.1 规范中的一个概念,它是一个独立容器，决定了元素如何对其内容进行定位,以及与其他元素的关系和相互作用。）
一个页面是由很多个 Box 组成的,元素的类型和 display 属性,决定了这个 Box 的类型。
不同类型的 Box,会参与不同的 Formatting Context（决定如何渲染文档的容器）,因此Box内的元素会以不同的方式渲染,也就是说BFC内部的元素和外部的元素不会互相影响。
```


## CSS3有哪些新特性？

```
新增选择器     p:nth-child(n){color: rgba(255, 0, 0, 0.75)}
弹性盒模型     display: flex;
多列布局       column-count: 5;
媒体查询       @media (max-width: 480px) {.box: {column-count: 1;}}
个性化字体     @font-face{font-family: BorderWeb; src:url(BORDERW0.eot);}
颜色透明度     color: rgba(255, 0, 0, 0.75);
圆角           border-radius: 5px;
渐变           background:linear-gradient(red, green, blue);
阴影           box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3);
倒影           box-reflect: below 2px;
文字装饰       text-stroke-color: red;
文字溢出       text-overflow:ellipsis;
背景效果       background-size: 100px 100px;
边框效果       border-image:url(bt_blue.png) 0 10;
转换
	旋转          transform: rotate(20deg);
	倾斜          transform: skew(150deg, -10deg);
	位移          transform: translate(20px, 20px);
	缩放          transform: scale(.5);
平滑过渡       transition: all .3s ease-in .1s;
动画           @keyframes anim-1 {50% {border-radius: 50%;}} animation: anim-1 1s;

```

## link和import的区别

```
引入样式三种方式
1.<link rel="stylesheet" href="xx.css">
2.js里面 @import url(xx.css);
3.<style> p {margin: 0 } </style> 

1,2都是外部引用CSS的方式，但是存在一定的区别:

link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。
link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。
link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
link支持使用Javascript控制DOM去改变样式；而@import不支持

```



## css 选择器

```

!important > 内联 > id > 类 = 伪类 = 属性 > 标签 = 伪元素

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

## position:fixed;在android下无效怎么处理？

```
1. 使用transform样式的元素，不要包含fixed定位的子元素(因为会失效)

fixed的元素是相对整个页面固定位置的，你在屏幕上滑动只是在移动这个所谓的viewport，
原来的网页还好好的在那，fixed的内容也没有变过位置，
所以说并不是iOS不支持fixed，只是fixed的元素不是相对手机屏幕固定的。
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
```

## display有哪些值？说明他们的作用。

```
block       	块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
none        	缺省值。象行内元素类型一样显示。
inline      	行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
inline-block  默认宽度为内容宽度，可以设置宽高，同行显示。
list-item   	象块类型元素一样显示，并添加样式列表标记。
table       	此元素会作为块级表格来显示。
inherit     	规定应该从父元素继承 display 属性的值。
```

## 什么是外边距合并？
```
外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。
合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。
w3school介绍网址： http://www.w3school.com.cn/css/css_margin_collapsing.asp
```

## zoom:1的清除浮动原理?
```
清除浮动，触发hasLayout；
Zoom属性是IE浏览器的专有属性，它可以设置或检索对象的缩放比例。解决ie下比较奇葩的bug。
譬如外边距（margin）的重叠，浮动清除，触发ie的haslayout属性等。

来龙去脉大概如下：
当设置了zoom的值之后，所设置的元素就会就会扩大或者缩小，高度宽度就会重新计算了，这里一旦改变zoom值时其实也会发生重新渲染，运用这个原理，也就解决了ie下子元素浮动时候父元素不随着自动扩大的问题。

Zoom属是IE浏览器的专有属性，火狐和老版本的webkit核心的浏览器都不支持这个属性。然而，zoom现在已经被逐步标准化，出现在 CSS 3.0 规范草案中。

目前非ie由于不支持这个属性，它们又是通过什么属性来实现元素的缩放呢？
可以通过css3里面的动画属性scale进行缩放。
```

## 在网页中的应该使用奇数还是偶数的字体？为什么呢
```
1.为了迁就ie6，万恶的ie6会把定义为13px的字渲染成14px(因为最早的IE6是没有13px点阵的。)
2.Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵
3.知乎和豆瓣的正文字号都是 13 px，而中文维基百科的正文字号是 15 px，并没有什么不好。
```

## 如何修改chrome记住密码后自动填充表单的黄色背景 ？
```css
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill
{
    color: rgb(0, 0, 0);
    background-color: rgb(250, 255, 189);
    background-image: none;
}
```

## 设置元素浮动后，该元素的display值是多少？
```
自动变成了 display:block
```

## 怎么让Chrome支持小于12px 的文字？
```
1、用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观。
2、使用12px及12px以上字体大小：为了兼容各大主流浏览器，建议设计美工图时候设置大于或等于12px的字体大小，如果是接单的这个时候就需要给客户讲解小于12px浏览器不兼容等事宜。
3、继续使用小于12px字体大小样式设置：如果不考虑chrome可以不用考虑兼容，同时在设置小于12px对象设置-webkit-text-size-adjust:none，做到最大兼容考虑。
4、使用12px以上字体：为了兼容、为了代码更简单 从新考虑权重下兼容性。
```

## font-style属性可以让它赋值为“oblique” oblique是什么意思？
```
倾斜的字体样式
```

## 如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）
```
多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms
```

## overflow: scroll时不能平滑滚动的问题怎么处理？
```
1.-webkit-overflow-scrolling: touch;
2.iScroll
```

## 什么是CSS 预处理器 / 后处理器？
```
预处理器例如：LESS、Sass、Stylus，用来预编译Sass或less，增强了css代码的复用性，
  还有层级、mixin、变量、循环、函数等，具有很方便的UI组件模块化开发能力，极大的提高工作效率。

后处理器例如：PostCSS，通常被视为在完成的样式表中根据CSS规范处理CSS，让其更有效；目前最常做的
  是给CSS属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。
```


## 介绍一下box-sizing属性？
```
`box-sizing`属性主要用来控制元素的盒模型的解析模式。默认值是`content-box`。

`content-box`：让元素维持W3C的标准盒模型。元素的宽度/高度由border + padding + content的宽度/高度决定，设置width/height属性指的是content部分的宽/高

`border-box`：让元素维持IE传统盒模型（IE6以下版本和IE6~7的怪异模式）。设置width/height属性指的是border + padding + content

标准浏览器下，按照W3C规范对盒模型解析，一旦修改了元素的边框或内距，就会影响元素的盒子尺寸，就不得不重新计算元素的盒子尺寸，从而影响整个页面的布局。
```


## CSS3的Flexbox（弹性盒布局模型）,以及适用场景？**
```
一个用于页面布局的全新CSS3功能，Flexbox可以把列表放在同一个方向（从上到下排列，从左到右），并让列表能延伸到占用可用的空间
较为复杂的布局还可以通过嵌套一个伸缩容器（flex container）来实现
采用Flex布局的元素，称为Flex容器（flex container），简称"容器"。
它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称"项目"
常规布局是基于块和内联流方向，而Flex布局是基于flex-flow流可以很方便的用来做局中，能对不同屏幕大小自适应
在布局上有了比以前更加灵活的空间
```

## li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？**
```
行框的排列会受到中间空白（回车\空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了
```

## display,float,position的关系

```
如果 `display` 为`none`，那么`position`和`float`都不起作用，这种情况下元素不产生框
否则，如果`position`值为`absolute`或者`fixed`，框就是绝对定位的，`float`的计算值为`none`，`display`根据下面的表格进行调整
否则，如果`float`不是`none`，框是浮动的，`display`根据下表进行调整
否则，如果元素是根元素，`display`根据下表进行调整
其他情况下`display`的值为指定值 总结起来：绝对定位、浮动、根元素都需要调整 `display`
```

## 外边距折叠(collapsing margins)
```
毗邻的两个或多个 `margin` 会合并成一个`margin`，叫做外边距折叠。规则如下：
两个或多个毗邻的普通流中的块元素垂直方向上的`margin`会折叠
浮动元素或`inline-block`元素或绝对定位元素的`margin`不会和垂直方向上的其他元素的margin折叠
创建了块级格式化上下文的元素，不会和它的子元素发生margin折叠
元素自身的`margin-bottom`和`margin-top`相邻时也会折
```

## CSS有哪些继承属性
```
[font]
[word-break]
[letter-spacing]
[text-align]
[text-rendering]
[word-spacing]
[white-space]
[text-indent]
[text-transform]
[text-shadow]
[line-height]
[color]
[visibility]
[cursor]
```


## flexbox布局及相关设置**
```
容器属性（采用Flex布局的元素，container）：  
**flex-direction**：决定主轴的方向（即项目的排列方向）；row | row-reverse | column | column-reverse;  
**flex-wrap**：设置是否换行；nowrap | wrap | wrap-reverse  
**flex-flow**：flex-direction属性和flex-wrap属性的简写形式，flex-direction || flex-wrap  
**justify-content**：定义了项目在主轴上的对齐方式；flex-start | flex-end | center | space-between | space-around  
**align-items**：定义项目在交叉轴上如何对齐；flex-start | flex-end | center | baseline | stretch  
**align-content**：定义了多根轴线的对齐方式；flex-start | flex-end | center | space-between | space-around | stretch  

项目属性（子元素为项目，item）
**order**：定义项目的排列顺序。数值越小，排列越靠前，默认为0。  
**flex-grow**：定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。  
**flex-shrink**：定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。  
**flex-basis**：定义了在分配多余空间之前，项目占据的主轴空间。  
**flex**：flex-grow, flex-shrink 和 flex-basis的简写。
**align-self**：允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。  
```
[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)  
[Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)