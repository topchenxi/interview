# 兼容性 - IE

## 常见的兼容性问题
```css
1 ie6.0横向margin加倍
产生因素：块属性、float、有横向margin。
解决方法：display：inline；
2 ie6.0下默认有行高
解决方法：overflow:hidden;或font-size:0;或line-height：xx px；
3 在各个浏览器下img有空隙(原因是：回车。)
解决方法:让图片浮动。
4 一个父标签与几个子标签嵌套，父标签不浮动，子标签float，子标签不撑开父的高度。

解决方法：
a 在子标签最后清浮动{<div style="height:0;clear:both;">&nbsp;</div>}
b 父标签添加{overflow：hidden；}
c 给父标签设置高度
5 Ie6下，不识别最大宽、高度和最小宽高度，意即min-width/height和 Max-width/height在ie6中没效果，
解决方法：
(1)：.abc{border:1px blue solid;width:200px;height:200px;}
html>body .abc{width:auto;height:auto;min-width:200px;min-height:200px;}
(2)：.abc{width:200px;height:200px;_width:200px;_height:200px;}（因为ie6有一个特征，当定义一个高度时，如果内容超过高度，元素会自动调整高度。）
6 Ie6里面：如li设宽、高，并且li里面的标签浮动，那么li之间会有间距
解决方法：li不设宽、高或者li内的标签不浮动
7  li之间有间距
解决方法：li 设置vertical-align:middle;
8 3像素问题：ie6下，当浮动元素与流动元素并列显示时，他们之间会存在三像素问题。

解决方法：用hack技术， 例如：所有浏览器通用 
height:100px; 
ie6专用_height:100px;
ie7专用*+height:100px; 
ie6/ie7共用*height:100px;
9 当定义行内元素为包含框时，且包含框包含的绝对定位元素以百分比为单位进行定位时，会出现混乱。

解决方法：在行内元素里加入{zoom：1；}
10 当多个浮动元素中间夹杂着HTML注释语句时，如果浮动元素宽度为100%，则在下一行多显示一个上一行最后一个字符。
解决办法：给浮动元素添加display:inline;。
11 opacity 定义元素的不透明度
filter：alpha（opacity=80）；ie支持该属性
opacity：0.8；支持css3的浏览器
12 两个块元素，竖向的margin值不增加，会重叠，其间距为最大margin值。
13 优先级：被!important 注明的css属性具有最高优先级(.abc{color:red !important;})。但在ie6中!important具有一个bug:在同一组css属性中，!important不起作用。
14 火狐不识别background-position-y 或background-position-x;
15 ie6 不支持 fixed 

* png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.也可以引用一段脚本处理.

* 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。

* IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。 

* 浮动ie产生的双倍距离（IE6双边距问题：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或margin-right，margin值会加倍。）
  #box{ float:left; width:10px; margin:0 0 0 100px;} 

 这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入 ——_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)

*  渐进识别的方式，从总体中逐渐排除局部。 

  首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。 
  接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

  css
      .bb{
       background-color:#f1ee18;/*所有识别*/
      .background-color:#00deff\9; /*IE6、7、8识别*/
      +background-color:#a200ff;/*IE6、7识别*/
      _background-color:#1e0bd1;/*IE6识别*/ 
      } 

*  IE下,可以使用获取常规属性的方法来获取自定义属性,
   也可以使用getAttribute()获取自定义属性;
   Firefox下,只能使用getAttribute()获取自定义属性. 
   解决方法:统一通过getAttribute()获取自定义属性.

* IE下,event对象有x,y属性,但是没有pageX,pageY属性; 
  Firefox下,event对象有pageX,pageY属性,但是没有x,y属性.

* 解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。

* Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示, 
  可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决.

* 超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序:
L-V-H-A :  a:link {} a:visited {} a:hover {} a:active {}

* 怪异模式问题：漏写DTD声明，Firefox仍然会按照标准模式来解析网页，但在IE中会触发怪异模式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写DTD声明的好习惯。现在可以使用[html5](http://www.w3.org/TR/html5/single-page.html)推荐的写法：``

* 上下margin重合问题
ie和ff都存在，相邻的两个div的margin-left和margin-right不会重合，但是margin-top和margin-bottom却会发生重合。
解决方法，养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom。
* ie6对png图片格式支持不好(引用一段脚本处理)

  * png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.

		* 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。

		* IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。

		  浮动ie产生的双倍距离 #box{ float:left; width:10px; margin:0 0 0 100px;}

	      这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入 ——_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)

		  渐进识别的方式，从总体中逐渐排除局部。

		  首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。
		  接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

          css
	          .bb{
		          background-color:red;/*所有识别*/
			      background-color:#00deff\9; /*IE6、7、8识别*/
			      +background-color:#a200ff;/*IE6、7识别*/
			      _background-color:#1e0bd1;/*IE6识别*/
	          }


		*  IE下,可以使用获取常规属性的方法来获取自定义属性,
		   也可以使用getAttribute()获取自定义属性;
           Firefox下,只能使用getAttribute()获取自定义属性。
           解决方法:统一通过getAttribute()获取自定义属性。

		*  IE下,even对象有x,y属性,但是没有pageX,pageY属性;
           Firefox下,event对象有pageX,pageY属性,但是没有x,y属性。

		*  解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。

		*  Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,
		   可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。


```




常见兼容性问题？
--------

    * png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.也可以引用一段脚本处理.
    
    * 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。
    
    * IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。 
    
    * 浮动ie产生的双倍距离（IE6双边距问题：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或margin-right，margin值会加倍。）
      #box{ float:left; width:10px; margin:0 0 0 100px;} 
    
     这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入 ——_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)
    
    *  渐进识别的方式，从总体中逐渐排除局部。 
    
      首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。 
      接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。
    
      css
          .bb{
           background-color:#f1ee18;/*所有识别*/
          .background-color:#00deff\9; /*IE6、7、8识别*/
          +background-color:#a200ff;/*IE6、7识别*/
          _background-color:#1e0bd1;/*IE6识别*/ 
          } 
    
    *  IE下,可以使用获取常规属性的方法来获取自定义属性,
       也可以使用getAttribute()获取自定义属性;
       Firefox下,只能使用getAttribute()获取自定义属性. 
       解决方法:统一通过getAttribute()获取自定义属性.
    
    * IE下,event对象有x,y属性,但是没有pageX,pageY属性; 
      Firefox下,event对象有pageX,pageY属性,但是没有x,y属性.
    
    * 解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。
    
    * Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示, 
      可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决.
    
    * 超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序:
    L-V-H-A :  a:link {} a:visited {} a:hover {} a:active {}
    
    * 怪异模式问题：漏写DTD声明，Firefox仍然会按照标准模式来解析网页，但在IE中会触发怪异模式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写DTD声明的好习惯。现在可以使用[html5](http://www.w3.org/TR/html5/single-page.html)推荐的写法：`<doctype html>`
    
    * 上下margin重合问题
    ie和ff都存在，相邻的两个div的margin-left和margin-right不会重合，但是margin-top和margin-bottom却会发生重合。
    解决方法，养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom。
    * ie6对png图片格式支持不好(引用一段脚本处理)


    1、IE6的块元素，在左右浮动、设定marin时造成margin双边距bug。解决方法是在该元素中加入display:inline 或 display:block 明确其元素类型。
    2、IE6/IE7下出现的各种错位，可以加入zoom:1来解决。
    3、当元素使用float浮动后，元素与相邻的元素之间会产生3px的间隙。解决方法是在同一行的元素都加上float浮动。
    4、IE6中奇数的宽高显示大小与偶数宽高显示大小存在一定的不同。其主要问题是出在奇数宽高上。要解决此类问题，只需要尽量将外部定位的div高宽写成偶数即可。
    5、IE6中图片的下方会存在一定的缝隙。要解决此类问题，需要将img标签定义为display:block或为img对应的样式写入font-size:0。
    6、如果一个元素中没有任何内容，当在样式中为这个元素设置了0-19px之间的高度时。此元素的高度始终为19px。加入HTML注释<!– >或者空白字符&nbsp;还可以在CSS中加入overflow:hidden。
    7、IE6元素的z-index会继承父级元素的设置。


    第2题 介绍所知道的CSS hack技巧
    1、属性级Hack：当CSS写在同一行时，IE6无法识别!important。
        "-"    减号是IE6专有的hack
        "*"    IE6/IE7生效
        "\9"   IE6/IE7/IE8/IE9/IE10生效
        "\0"   IE8/IE9/IE10生效
        "\9\0" IE9/IE10生效
    2、选择符级Hack：比如IE6能识别*html .class{}，IE7能识别*+html .class{}或者*:first-child + html .class{}。
    3、IE条件注释Hack：比如针对所有IE：<!–[if IE]><!–您的代码–><![endif]–>，针对IE6及以下版本：<!–[if lt IE 7]><!–您的代码–><![endif]–>，这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都 会生效。



## IE6浏览器有哪些常见的bug,缺陷或者与标准不一致的地方,如何解决

- IE6不支持min-height，解决办法使用css hack：

```
.target {
    min-height: 100px;
    height: auto !important;
    height: 100px;   // IE6下内容高度超过会自动扩展高度
}
```

- ``ol``内``li``的序号全为1，不递增。解决方法：为li设置样式``display: list-item;``

- 未定位父元素``overflow: auto;``，包含``position: relative;``子元素，子元素高于父元素时会溢出。解决办法：1）子元素去掉``position: relative;``; 2）不能为子元素去掉定位时，父元素``position: relative;``

```
<style type="text/css">
.outer {
    width: 215px;
    height: 100px;
    border: 1px solid red;
    overflow: auto;
    position: relative;  /* 修复bug */
}
.inner {
    width: 100px;
    height: 200px;
    background-color: purple;
    position: relative;
}
</style>

<div class="outer">
    <div class="inner"></div>
</div>
```

- IE6只支持``a``标签的``:hover``伪类，解决方法：使用js为元素监听mouseenter，mouseleave事件，添加类实现效果：

```
<style type="text/css">
.p:hover,
.hover {
    background: purple;
}
</style>

<p class="p" id="target">aaaa bbbbb<span>DDDDDDDDDDDd</span> aaaa lkjlkjdf j</p>

<script type="text/javascript">
function addClass(elem, cls) {
    if (elem.className) {
        elem.className += ' ' + cls;
    } else {
        elem.className = cls;
    }
}
function removeClass(elem, cls) {
    var className = ' ' + elem.className + ' ';
    var reg = new RegExp(' +' + cls + ' +', 'g');
    elem.className = className.replace(reg, ' ').replace(/^ +| +$/, '');
}

var target = document.getElementById('target');
if (target.attachEvent) {
    target.attachEvent('onmouseenter', function () {
        addClass(target, 'hover');
    });
    target.attachEvent('onmouseleave', function () {
        removeClass(target, 'hover');
    })
}
</script>
```

- IE5-8不支持``opacity``，解决办法：

```
.opacity {
    opacity: 0.4
    filter: alpha(opacity=60); /* for IE5-7 */
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"; /* for IE 8*/
}
```

- IE6在设置``height``小于``font-size``时高度值为``font-size``，解决办法：``font-size: 0;``
- IE6不支持PNG透明背景，解决办法: **IE6下使用gif图片**
- IE6-7不支持``display: inline-block``解决办法：设置inline并触发hasLayout

```
    display: inline-block;
    *display: inline;
    *zoom: 1;
```

- IE6下浮动元素在浮动方向上与父元素边界接触元素的外边距会加倍。解决办法：
1）使用padding控制间距。
2）浮动元素``display: inline;``这样解决问题且无任何副作用：css标准规定浮动元素display:inline会自动调整为block
- 通过为块级元素设置宽度和左右margin为auto时，IE6不能实现水平居中，解决方法：为父元素设置``text-align: center;``