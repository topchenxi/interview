# css

## CSS中为什么overflow:hidden能清除浮动(float)的影响
```
正常父元素包含浮动子元素，父元素的高度确实为0。

但是父元素overflow:hidden;后，首先会计算height: auto;的真实高度，由于其触发了BFC，需要包含子元素，所以高度不是0，而是子元素高度。

这时overflow:hidden;才起到隐藏作用，不过父元素高度足够大，所以子元素没有被隐藏。

```

## CSS选择器的优先级
```html
<style>
.classA {
    color: blue;
}

.classB {
    color: red;
}
</style>
<p class='classB classA'> 123 </p>
```

## 使得一个DOM元素不显示在浏览器可视范围内
```
最基本的：
设置display属性为none，或者设置visibility属性为hidden
技巧性：
设置宽高为0，设置透明度为0，设置z-index位置在-1000
```

## 超链接访问过后hover样式就不出现的问题是什么？如何解决？
```
被点击访问过的超链接样式不在具有hover和active了

解决方法是改变CSS属性的排列顺序: L-V-H-A（link,visited,hover,active）
```

## hack
```css
#test {
    width: 300px;
    height: 300px;

    background-color: blue;
    /*firefox*/
    background-color: red\9;
    /*all ie*/
    background-color: yellow;
    /*ie8*/
    +background-color: pink;
    /*ie7*/
    _background-color: orange;
    /*ie6*/
}
:root #test {
    background-color: purple\9;
}
/*ie9*/
@media all and (min-width:0px) {
    #test {
        background-color: black;
    }
}

/*opera*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
    #test {
        background-color: gray;
    }
}
/*chrome and safari*/
```

## css 幻灯片效果
```css
.ani {
    width: 480px;
    height: 320px;
    margin: 50px auto;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(0, 0, 0, 1);
    background-size: 100% 100%;
    background-position: center;
    -webkit-animation-name: "loops";
    -webkit-animation-duration: 10s;
    -webkit-animation-iteration-count: infinite;
    background: url() center center no-repeat;
}
@-webkit-keyframes "loops" {
    0% {
        background-image: url(http://d.hiphotos.baidu.com/image/w%3D400/sign=c01e6adca964034f0fcdc3069fc27980/e824b899a9014c08e5e38ca4087b02087af4f4d3.jpg)
    }
    50% {
        background-image: url(http://b.hiphotos.baidu.com/image/w%3D400/sign=937dace2552c11dfded1be2353266255/d8f9d72a6059252d258e7605369b033b5bb5b912.jpg)
    }
    100% {
        background-image: url(http://c.hiphotos.baidu.com/image/w%3D400/sign=cfb239ceb0fb43161a1f7b7a10a54642/3b87e950352ac65ce2e73f76f9f2b21192138ad1.jpg)
    }
}
```

## rgba()和opacity的透明效果有什么不同
```
rgba()和opacity都能实现透明效果，
但最大的不同是opacity作用于元素，以及元素内的所有内容的透明度，
而rgba()只作用于元素的颜色或其背景色。
```

## 垂直居中一个<img>
```css
.container {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
```

## display:none与visibility:hidden的区别是什么？
```
display : 隐藏对应的元素但不挤占该元素原来的空间。
visibility: 隐藏对应的元素并且挤占该元素原来的空间。
```