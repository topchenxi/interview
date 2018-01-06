# 优化


## 你有用过哪些前端性能优化的方法？
```
（1） 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。
（2） 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数
（3） 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。
（4） 当需要设置的样式很多时设置className而不是直接操作style。
（5） 少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。
（6） 避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。
（7） 图片预加载，将样式表放在顶部，将脚本放在底部  加上时间戳。
（8） 避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢。

对普通的网站有一个统一的思路，就是

1.尽量向前端优化、
2.减少数据库操作、
3.减少磁盘IO。

向前端优化指的是
在不影响功能和体验的情况下，能在浏览器执行的不要在服务端执行，能在缓存服务器上直接返回的不要到应用服务器，
程序能直接取得的结果不要到外部取得，本机内能取得的数据不要到远程取，内存能取到的不要到磁盘取，
缓存中有的不要去数据库查询。减少数据库操作指减少更新次数、缓存结果减少查询次数、将数据库执行的操作尽可能的让你的程序完成
（例如join查询），减少磁盘IO指尽量不使用文件系统作为缓存、减少读写文件次数等。
程序优化永远要优化慢的部分，换语言是无法“优化”的。
```

## 减少页面加载时间的方法。

```
1.优化图片 
2.图像格式的选择（GIF：提供的颜色较少，可用在一些对颜色要求不高的地方） 
3.优化CSS（压缩合并css，如margin-top,margin-left...) 
4.网址后加斜杠（如www.campr.com/目录，会判断这个“目录是什么文件类型，或者是目录。） 
5.标明高度和宽度（如果浏览器没有找到这两个参数，它需要一边下载图片一边计算大小，如果图片很多，浏览器需要不断地调整页面。这不但影响速度，也影响浏览体验。 
当浏览器知道了高度和宽度参数后，即使图片暂时无法显示，页面上也会腾出图片的空位，然后继续加载后面的内容。从而加载时间快了，浏览体验也更好了。） 
6.减少http请求（合并文件，合并图片）。
```

## 压缩合并目的？http请求的优化方式？
```
减少HTTP请求的最主要的方式就是，合并并压缩JavaScript和CSS文件。 

CSS Sprites（CSS精灵）：把全站的图标都放在一个图像文件中，然后用CSS的background-image和background-position属性定位来显示其中的一小部分。

合并脚本和样式表; 图片地图：利用image map标签定义一个客户端图像映射，（图像映射指带有可点击区域的一幅图像）

图片js/css等静态资源放在静态服务器或CDN服时，尽量采用不用的域名，这样能防止cookie不会互相污染，减少每次请求的往返数据。 

css替代图片, 缓存一些数据

少用location.reload()：使用location.reload() 会刷新页面，刷新页面时页面所有资源 (css，js，img等) 会重新请求服务器。建议使用location.href="当前页url" 代替location.reload() ，使用location.href 浏览器会读取本地缓存资源。
```



## 如何进行网站性能优化**
```
- content方面
  - 减少HTTP请求：合并文件、CSS精灵、inline Image
  - 减少DNS查询：DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询
  - 避免重定向：多余的中间访问
  - 使Ajax可缓存
  - 非必须组件延迟加载
  - 未来所需组件预加载
  - 减少DOM元素数量
  - 将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量
  - 减少iframe数量
  - 不要404

- Server方面
  - 使用CDN
  - 添加Expires或者Cache-Control响应头
  - 对组件使用Gzip压缩
  - 配置ETag
  - Flush Buffer Early
  - Ajax使用GET进行请求
  - 避免空src的img标签
- Cookie方面
  - 减小cookie大小
  - 引入资源的域名不要包含cookie

- css方面
  - 将样式表放到页面顶部
  - 不使用CSS表达式
  - 不使用IE的Filter

- Javascript方面
  - 将脚本放到页面底部
  - 将javascript和css从外部引入
  - 压缩javascript和css
  - 删除不需要的脚本
  - 减少DOM访问
  - 合理设计事件监听器

- 图片方面
  - 优化图片：根据实际颜色需要选择色深、压缩
  - 优化css精灵
  - 不要在HTML中拉伸图片
  - 保证favicon.ico小并且可缓存

- 移动方面
  - 保证组件小于25k
  - `Pack Components into a Multipart Document`

```

## 你有用过哪些前端性能优化的方法？*
```
- 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。
-  前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数
-  用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。
-  当需要设置的样式很多时设置className而不是直接操作style
-  少用全局变量、缓存DOM节点查找的结果。减少IO读取操作
-  避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)
-  图片预加载，将样式表放在顶部，将脚本放在底部  加上时间戳
-  避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢
```

## 谈谈性能优化问题*
```
- 代码层面：避免使用css表达式，避免使用高级选择器，通配选择器
- 缓存利用：缓存Ajax，使用CDN，使用外部js和css文件以便缓存，添加Expires头，服务端配置Etag，减少DNS查找等
- 请求数量：合并样式和脚本，使用css图片精灵，初始首屏之外的图片资源按需加载，静态资源延迟加载
- 请求带宽：压缩文件，开启GZIP
```

## 代码层面的优化*
```
- 用hash-table来优化查找
- 少用全局变量
- 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能
- 用setTimeout来避免页面失去响应
- 缓存DOM节点查找的结果
- 避免使用CSS Expression
- 避免全局查询
- 避免使用with(with会创建自己的作用域，会增加作用域链长度)
- 多个变量声明合并
- 避免图片和iFrame等的空Src。空Src会重新加载当前页面，影响速度和效率
- 尽量避免写在HTML标签中写Style属性
```

## 前端性能优化最佳实践？
```
* 性能评级工具（PageSpeed 或 YSlow）
* 合理设置 HTTP 缓存：Expires 与 Cache-control
* 静态资源打包，开启 Gzip 压缩（节省响应流量）
* CSS3 模拟图像，图标base64（降低请求数）
* 模块延迟(defer)加载/异步(async)加载
* Cookie 隔离（节省请求流量）
* localStorage（本地存储）
* 使用 CDN 加速（访问最近服务器）
* 启用 HTTP/2（多路复用，并行加载）
* 前端自动化（gulp/webpack）
```


## 如何进行网站性能优化
```
- content方面
    1. 减少HTTP请求：合并文件、CSS精灵、inline Image
    2. 减少DNS查询：DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询
    3. 避免重定向：多余的中间访问
    4. 使Ajax可缓存
    5. 非必须组件延迟加载
    6. 未来所需组件预加载
    7. 减少DOM元素数量
    8. 将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量
    9. 减少iframe数量
    10. 不要404

- Server方面
    1. 使用CDN
    2. 添加Expires或者Cache-Control响应头
    3. 对组件使用Gzip压缩
    4. 配置ETag
    5. Flush Buffer Early
    6. Ajax使用GET进行请求
    7. 避免空src的img标签
- Cookie方面
    1. 减小cookie大小
    2. 引入资源的域名不要包含cookie
- css方面
    1. 将样式表放到页面顶部
    2. 不使用CSS表达式
    3. 使用<link>不使用@import
    4. 不使用IE的Filter
- Javascript方面
    1. 将脚本放到页面底部
    2. 将javascript和css从外部引入
    3. 压缩javascript和css
    4. 删除不需要的脚本
    5. 减少DOM访问
    6. 合理设计事件监听器
- 图片方面
    1. 优化图片：根据实际颜色需要选择色深、压缩
    2. 优化css精灵
    3. 不要在HTML中拉伸图片
    4. 保证favicon.ico小并且可缓存
- 移动方面
    1. 保证组件小于25k
    2. Pack Components into a Multipart Document
```

###移动端性能优化
```
尽量使用`css3`动画，开启硬件加速。适当使用`touch`事件代替`click`事件。避免使用`css3`渐变阴影效果。
尽可能少的使用`box-shadow`与`gradients`。`box-shadow`与`gradients`往往都是页面的性能杀手
```