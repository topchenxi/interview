# javascript - 本地存储

## cookies，sessionStorage 和 localStorage 的区别？

```js
cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

存储大小：
    cookie数据大小不能超过4k。
    sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

有期时间：
    localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
    sessionStorage  数据在当前浏览器窗口关闭后自动删除。
    cookie          设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
```

## cookie的弊端
```
`cookie`虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的。
第一：每个特定的域名下最多生成20个`cookie`

    1.IE6或更低版本最多20个cookie
    2.IE7和之后的版本最后可以有50个cookie。
    3.Firefox最多50个cookie
    4.chrome和Safari没有做硬性限制

`IE`和`Opera` 会清理近期最少使用的`cookie`，`Firefox`会随机清理`cookie`。

`cookie`的最大大约为`4096`字节，为了兼容性，一般不能超过`4095`字节。

IE 提供了一种存储可以持久化用户数据，叫做`userdata`，从`IE5.0`就开始支持。每个数据最多128K，每个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。

安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。

有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。

```

## cookie的弊端优点
```
极高的扩展性和可用性
1.通过良好的编程，控制保存在cookie中的session对象的大小。
2.通过加密和安全传输技术（SSL），减少cookie被破解的可能性。
3.只在cookie中存放不敏感数据，即使被盗也不会有重大损失。
4.控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。
```


## 浏览器本地存储
```js
在较高版本的浏览器中，`js`提供了`sessionStorage`和`globalStorage`。在`HTML5`中提供了`localStorage`来取代`globalStorage`。

`html5`中的`Web Storage`包括了两种存储方式：`sessionStorage`和`localStorage`。

`sessionStorage`用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此`sessionStorage`不是一种持久化的本地存储，仅仅是会话级别的存储。

而`localStorage`用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。
```

## web storage和cookie的区别

```
`Web Storage`的概念和`cookie`相似，区别是它是为了更大容量存储设计的。`Cookie`的大小是受限的，并且每次你请求一个新的页面的时候`Cookie`都会被发送过去，这样无形中浪费了带宽，另外`cookie`还需要指定作用域，不可以跨域调用。

除此之外，`Web Storage`拥有`setItem,getItem,removeItem,clear`等方法，不像`cookie`需要前端开发者自己封装`setCookie，getCookie`。

但是`cookie`也是不可以或缺的：`cookie`的作用是与服务器进行交互，作为`HTTP`规范的一部分而存在 ，而`Web Storage`仅仅是为了在本地“存储”数据而生

浏览器的支持除了`IE７`及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)，值得一提的是IE总是办好事，例如IE7、IE6中的`userData`其实就是`javascript`本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持`web storage`。

`localStorage`和`sessionStorage`都具有相同的操作方法，例如`setItem、getItem`和`removeItem`等
```


## cookie 和session 的区别：
```
1、cookie数据存放在客户的浏览器上，session数据放在服务器上。
2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗
考虑到安全应当使用session。
3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
 考虑到减轻服务器性能方面，应当使用COOKIE。
4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。

5、所以个人建议：
将登陆信息等重要信息存放为SESSION
其他信息如果需要保留，可以放在COOKIE中
```


## 客户端存储及他们的异同（例如：cookie, sessionStorage和localStorage等）
```
共同点：
都是保存在浏览器端，且同源的。  
区别：
1.cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。  
2.cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。  
3.存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，一般为5M左右。  
4.数据有效期不同，sessionStorage仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage始终有效（除非清除），窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。  
5.作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。  
6.Web Storage 支持事件通知机制（storage事件），可以将数据更新的通知发送给监听者。Web Storage 的 api 接口使用更方便。
```