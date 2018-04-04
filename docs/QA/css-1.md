# css

## CSS中为什么overflow:hidden能清除浮动(float)的影响
```
正常父元素包含浮动子元素，父元素的高度确实为0。

但是父元素overflow:hidden;后，首先会计算height: auto;的真实高度，由于其触发了BFC，需要包含子元素，所以高度不是0，而是子元素高度。

这时overflow:hidden;才起到隐藏作用，不过父元素高度足够大，所以子元素没有被隐藏。

```