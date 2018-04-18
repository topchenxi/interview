# 兼容性 - IE

## hack
```css
.hack {
    background-color: #f1ee18;
    /*所有识别*/
    .background-color: #00deff\9;
    /*IE6、7、8识别*/
    +background-color: #a200ff;
    /*IE6、7识别*/
    _background-color: #1e0bd1;
    /*IE6识别*/
}
```
## ie6.0 横向`margin`加倍
```
产生因素：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或margin-right，margin值会加倍。
解决方法：display：inline；
```

## ie6.0下默认有行高
```
解决方法：overflow:hidden;或font-size:0;或line-height：xx px；
```

## 在各个浏览器下img有空隙
```
产生因素：回车
解决方法：display：inline；
```

## ie6.0 下，min-width/height和 max-width/height在ie6.0中没效果，
```css
.target {
    min-height: 100px;
    height: auto !important;
    height: 100px;
}
/* IE6下内容高度超过会自动扩展高度 */
/* 因为ie6有一个特征，当定义一个高度时，如果内容超过高度，元素会自动调整高度。*/
```

## li之间有间距
```
li 设置vertical-align:middle;
```

## ie6.0 下，当浮动元素与流动元素并列显示时，他们之间会存在三像素问题
```
解决方法：用hack技术， 例如：所有浏览器通用 
height:100px; 
ie6专用_height:100px;
ie7专用*+height:100px; 
ie6/ie7共用*height:100px;
```

## 当定义行内元素为包含框时，且包含框包含的绝对定位元素以百分比为单位进行定位时，会出现混乱。
```
解决方法：在行内元素里加入{zoom：1；}
```

## 当多个浮动元素中间夹杂着HTML注释语句时，如果浮动元素宽度为100%，则在下一行多显示一个上一行最后一个字符
```
解决办法：给浮动元素添加display:inline;
```

## opacity 定义元素的不透明度
```css
.opacity {
    opacity: 0.4;
    filter: alpha(opacity=60);
    /* for IE5-7 */
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)";
    /* for IE 8*/
}
```

## Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示
```css
span
{
    -webkit-text-size-adjust: none;
}

```

## png24位的图片在iE6浏览器上出现背景
```
解决方案 : 做成PNG8.也可以引用一段脚本处理(DD_belatedPNG.js).
```

## IE6中图片的下方会存在一定的缝隙
```
将img标签定义为display:block或为img对应的样式写入font-size:0。
```

## IE6-7不支持`display: inline-block`
```css
.inline {
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
```

## 通过为块级元素设置宽度和左右margin为auto时，IE6不能实现水平居中
```
为父元素设置``text-align: center;``
```

## 注意事项

- ie6.0 不支持 fixed
- ie6.0 中`!important`具有一个bug:在同一组css属性中，`!important`不起作用。
- 两个块元素，竖向的`margin`值不增加，会重叠，其间距为最大`margin`值。
- 火狐不识别background-position-y 或background-position-x;
- IE6/IE7下出现的各种错位，可以加入zoom:1来解决。

- a标签对里不能嵌套a标签对
- 若给a标签内的内容样式加上样式，需要设置display:block;（在IE中如果设置宽高会自动变成块，在FF中则不会），但如果设置了float属性，就不需要设置display:block。

- 作为外部 wrapper 的 div 不要定死高度, 最好还加上 overflow: hidden.以达到高度自适应

- 居中一个浮动元素? 对其设置margin:x auto; 

## JavaScript在IE和FF下的兼容性问题

```js
// 差别 
var year = new Date().getYear();
// FF,chrome: 118
// ie:2018

// 兼容处理
// 1
var year = new Date().getYear();
year = (year < 1900 ? (1900 + year) : year);
// 2
var year = new Date().getFullYear();


// CSS的"float"属性
// ie
document.getElementById("header").style.styleFloat = "left";
// ff
document.getElementById("header").style.cssFloat = "left";

// 兼容处理
if (document.all) {
    document.getElementById("header").style.styleFloat = "left";
} else {
    //非ie 时为undefined  
    document.getElementById("header").style.cssFloat = "left";
}

// for 
// ie
var myAttribute = document.getElementById("myLabel").getAttribute("htmlFor");
// ff
var myAttribute = document.getElementById("myLabel").getAttribute("for");

// class
// ie
var myAttribute = document.getElementById("header").getAttribute("className");
// ff
var myAttribute = document.getElementById("header").getAttribute("class");

// 兼容处理
// 1
var myObject = document.getElementById("header");
myObject.setAttribute("class", "classValue");
myObject.setAttribute("className", "classValue");
// 2
document.getElementById("header").className = "classValue";


```
键盘值的取得
```js
function myKeyPress(evt) {
    // 兼容IE和Firefox获得keyBoardEvent对象
    evt = (evt) ? evt : ((window.event) ? window.event : "")
    // 兼容IE和Firefox获得keyBoardEvent对象的键值
    var key = evt.keyCode ? evt.keyCode : evt.which;
    if (evt.ctrlKey && (key == 13 || key == 10)) {
        // 同时按下了Ctrl和回车键
        // do something;
    }
}
```
事件源的获取
```js
ele = function(evt) {
	// 捕获当前事件作用的对象
    evt = evt || window.event;　　
    return (obj = event.srcElement ? event.srcElement : event.target;);
}
```

事件监听
```js
function addEvent(elem, eventName, handler) {　　
    if (elem.attachEvent) {
        elem.attachEvent("on" + eventName, function() {　　　　　　　　　　　　　　　　
            handler.call(elem)
        });
        //此处使用回调函数call()，让this指向elem  
    } else if (elem.addEventListener) {
        elem.addEventListener(eventName, handler, false);　　
    }
}

function removeEvent(elem, eventName, handler) {　　
    if (elem.detachEvent) {
        elem.detachEvent("on" + eventName, function() {　　　　　　　　　　　　　　　　
            handler.call(elem)
        });
        //此处使用回调函数call()，让this指向elem  
    } else if (elem.removeEventListener) {
        elem.removeEventListener(eventName, handler, false);　　
    }
}
```

XMLHttpRequest
```js
var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}
```