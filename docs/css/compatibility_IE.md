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
