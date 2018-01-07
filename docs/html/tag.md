# Html - Tag

## html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和HTML5？

```
HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。

本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
sessionStorage 的数据在浏览器关闭后自动删除;
新的技术webworker, websocket, Geolocation;

新增标签
1、<article> 标记定义一篇文章
2、<header> 标记定义一个页面或一个区域的头部
3、<nav> 标记定义导航链接
4、<section> 标记定义一个区域
5、<aside> 标记定义页面内容部分的侧边栏
6、<hgroup> 标记定义文件中一个区块的相关信息
7、<figure> 标记定义一组媒体内容以及它们的标题
8、<figcaption> 标签定义 figure 元素的标题。
9、<footer> 标记定义一个页面或一个区域的底部
10、<dialog> 标记定义一个对话框(会话框)类似微信

11、<video> 标记定义一个视频
12、<audio> 标记定义音频内容
13、<source> 标记定义媒体资源
14、<canvas> 标记定义画布

15、<menu> 右键菜单
16、<meter> 范围条
17、<progress> 进度条
18、<datalist> 为input标记定义一个下拉列表，配合option

表单类型:
1、email 邮箱地址
2、url URL地址
3、date，time，month，week，datetime，datetime-local 日期类型
4、number 数字（max min step）
5、range 范围滑块（max min step）
6、search 搜索输入框
7、tel 电话号码输入框
8、color 颜色拾取器

表单属性
1、placeholder 输入框默认内容
2、required 必填内容（必须加name）
3、pattern 正则验证（必须加name）
4、autofocus 自动聚焦
5、autocomplete 自动完成（autocomplete="on/off"）
6、novalidate 不验证此表单（form属性）
7、multiple 多个值上传

移除的元素：
纯表现的元素：basefont，big，center，font, s，strike，tt，u;
对可用性产生负面影响的元素：frame，frameset，noframes；

支持HTML5新标签：

IE8/IE7/IE6支持通过document.createElement方法产生的标签，
可以利用这一特性让这些浏览器支持HTML5新标签，
浏览器支持新标签后，还需要添加标签默认的样式。
当然也可以直接使用成熟的框架、比如html5shim，

```


## 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

CSS规范规定，
每个元素都有`display`属性，确定该元素的类型，
每个元素都有默认的`display`值，如`div`的`display`默认值为`block`，
则为“块级”元素；`span`默认`display`属性值为`inline`，是“行内”元素。

```html
块级元素：div, p, form, ul, li, ol, dl, form, hr, table h1
行内元素：a b span img input select strong label textarea cite

常见的空元素：
<br> <hr> <img> <input> <link> <meta>
鲜为人知的是：
<area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>
```

## 行内元素和块级元素

```html
块级元素的前后都会自动换行，如同存在换行符一样。默认情况下，块级元素会独占一
行。

行内元素可以和其他行内元素位于同一行，在浏览器中显示时不会换行。(对于行内元素，不能设置其高度和宽度)

但是 <img> 、<input> 和其他行内元素位于同一行，同时可以设置其高度和宽度


```

## Label的作用

`label`标签来定义表单控制间的关系,当用户选择该标签时,
浏览器会自动将焦点转到和标签相关的表单控件上。

```html
<label for="Name">Number:</label>
<input type=“text“name="Name" id="Name"/>
<label>Date:<input type="text" name="B"/></label>
```

## 锚点的作用

在使用 `<a>` 元素创建锚点时，需要使用 `name` 属性为其命名，代码如下所示：

```html
<a id=”anchorname1”>锚点一</a>

<a href=”#anchorname1”>回到锚点一</a>
```

## disabled readyonly?

```
readonly只针对input(text / password)和textarea有效，
而disabled对于所有的表单元素都有效，当表单元素在使用了disabled后，
当我们将表单以POST或GET的方式提交的话，这个元素的值不会被传递出去，
而readonly会将该值传递出去。
```