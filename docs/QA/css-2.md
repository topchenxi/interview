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