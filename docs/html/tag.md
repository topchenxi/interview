# Html - Tag

## html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和HTML5？

```
HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。

1.绘画 canvas;
2.用于媒介回放的 video 和 audio 元素;
3.本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
4.sessionStorage 的数据在浏览器关闭后自动删除;
5.语意化更好的内容元素，比如 article、footer、header、nav、section;
6.表单控件，calendar、date、time、email、url、search;
7.新的技术webworker, websocket, Geolocation;

移除的元素：
纯表现的元素：basefont，big，center，font, s，strike，tt，u;
对可用性产生负面影响的元素：frame，frameset，noframes；

支持HTML5新标签：

1.IE8/IE7/IE6支持通过document.createElement方法产生的标签.
2.直接使用成熟的框架、比如html5shim

```


## html5有哪些新特性？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

```html
(1)绘画 canvas;
(2)用于媒介回放的 video 和 audio 元素;
(3)本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
(4)sessionStorage 的数据在浏览器关闭后自动删除;
(5)语意化更好的内容元素，比如 article、footer、header、nav、section;
(6)表单控件，calendar、date、time、email、url、search;
(7)新的技术webworker, websocket, Geolocation;

兼容性:
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

（1）行内元素有：a b span img input select strong（强调的语气）
（2）块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p

（3）常见的空元素：
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
<a name=”anchorname1”>锚点一</a>

<a href=”#anchorname1”>回到锚点一</a>
```