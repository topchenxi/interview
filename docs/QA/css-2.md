# css - 2

## 屏幕自适应

```html
<div class="container">
        <header>header</header>
        <div class="wrap">
            <aside>sidebar</aside>
            <section>section</section>
        </div>
    </div>
```
```css
.container header {width: 100%; height: 200px; background-color: #ddd; } 
.container .wrap {position: relative; height: 400px; padding-left: 200px; background-color: #ccc; } 
.container aside {position: absolute; top: 0; left: 0; width: 200px; height: 400px; background-color: #eee; }
.container section {background-color: transparent;}
@media (max-width: 980px) {
    .container .wrap {padding-left: 0; } 
    .container aside {position: relative; width: 100%; } 
    .container section {min-height: 400px; background-color: #ccc; } 
}
```

## 如何居中一个浮动元素

1.宽度不固定的浮动元素

```html
<style>
.outerbox {
    float: left;
    position: relative;
    left: 50%;
}

.innerbox {
    float: left;
    position: relative;
    right: 50%;
}
</style>
<div class="outerbox">
    <div class="innerbox">我是浮动的</div>
</div>
```

2.宽度固定的互动元素
```html
<style>
.outerbox {
    background-color: pink;
    /*方便看效果 */
    width: 500px;
    height: 300px;
    /*高度可以不设*/
    margin-left: -250px;
    /*使用marin向左移动250px，保证元素居中*/
    position: relative;
    /*相对定位*/
    left: 50%;
    top: 50%;
}
</style>
<div class="outerbox">
    <div>我是浮动的</div>
</div>
```

3.绝对定位
```html
<style>
.center {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    width: 500px;
    height: 300px;
    margin: auto;
    float: left;
    background: red;
}
</style>
<div class="center"></div>
```