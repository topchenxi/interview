# HTTP

## HTTP的几种请求方法用途
```
1、get  发送一个请求来取得服务器上的某一资源
2、post 向url指定的资源提交数据或附加新的数据
3、put  跟post方法很像，也是想服务器提交数据。但是，它们之间有不同。put指定了资源在服务器上的位置，而post没有
4、head 只请求页面的首部
5、delete 删除服务器上的某资源
6、options 它用于获取当前url所支持的方法。如果请求成功，会有一个allow的头包含类似“get,post”这样的信息
7、trace trace方法被用于激发一个远程的，应用层的请求消息回路
8、connect 把请求连接转换到透明的tcp/ip通道
```
## HTTP状态码大全

```
100  Continue	继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息

200  OK 		正常返回信息
201 Created  	请求成功并且服务器创建了新的资源
202 Accepted 	服务器已接受请求，但尚未处理

301 Moved Permanently  请求的网页已永久移动到新位置。
302 Found  		临时性重定向。
303 See Other  	临时性重定向，且总是使用 GET 请求新的 URI。
304  Not Modified 自从上次请求后，请求的网页未修改过。

400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
401 Unauthorized 请求未授权。
403 Forbidden  	禁止访问。
404 Not Found  	找不到如何与 URI 相匹配的资源。

500 Internal Server Error  最常见的服务器端错误。
503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。

基本上，只有2xx和304的状态码，表示服务器返回是正常状态。

100-199 用于指定客户端应相应的某些动作。
200-299 用于表示请求成功。
300-399 用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息。
400-499 用于指出客户端的错误。
500-599 用于支持服务器错误。

```

## 数据持久化技术(ajax)?简述ajax流程

```
ajax的全称：Asynchronous Javascript And XML。

1.客户端产生js的事件
2.创建XMLHttpRequest对象
3.对XMLHttpRequest进行配置
4.通过AJAX引擎发送异步请求
5.服务器端接收请求并且处理请求，返回html或者xml内容
6.XML调用一个callback()处理响应回来的内容
7.页面局部刷新
```

## 简述ajax执行流程
```js
// 基本步骤：
var xhr = null;
// 创建XMLHttpRequest对象
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
// 初始化请求
xhr.open('方式', '地址', '标志位');
// 设置http头信息
xhr.setRequestHeader('', '');
// 指定回调函数
xhr.onreadystatechange = function() {}
// 发送请求
xhr.send();
```

## xhr对象 status ? readystate?

```
status是XMLHttpRequest对象的一个属性，表示响应的HTTP状态码。
readyState是XMLHttpRequest对象的一个属性，用来标识当前XMLHttpRequest对象处于什么状态。

readystate 0~4

0：未初始化状态：此时，已经创建了一个XMLHttpRequest对象
1：准备发送状态：此时，已经调用了XMLHttpRequest对象的open方法，并且XMLHttpRequest对象已经准备好将一个请求发送到服务器端
2：已经发送状态：此时，已经通过send方法把一个请求发送到服务器端，但是还没有收到一个响应
3：正在接收状态：此时，已经接收到HTTP响应头部信息，但是消息体部分还没有完全接收到
4：完成响应状态：此时，已经完成了HTTP响应的接收
```


## jsonp原理？ 缺点?
```
工作原理：使用script标签实现跨域访问，可在url中指定回调函数，获取JSON数据并在指定的回调函数中执行jquery实现jsop。

缺点：只支持GET方式的jsonp实现，是一种脚本注入行为存在一定的安全隐患。如果返回的数据格式有问题或者返回失败了，并不会报错。
```

## 除了jsonp 还有什么跨域方式
```
javascript跨域有两种情况： 
1、基于同一父域的子域之间，如：http://a.c.com和http://b.c.com 
2、基于不同的父域之间，如：http://www.a.com和http://www.b.com 
3、端口的不同，如：http://www.a.com:8080和http://www.a.com:8088 
4、协议不同，如：http://www.a.com和https://www.a.com 

对于情况3和4，需要通过后台proxy来解决，具体方式如下： 
a、在发起方的域下创建proxy程序 
b、发起方的js调用本域下的proxy程序 
c、proxy将请求发送给接收方并获取相应数据 
d、proxy将获得的数据返回给发起方的js 

代码和ajax调用一致，其实这种方式就是通过ajax进行调用的
而情况1和2除了通过后台proxy这种方式外，还可以有多种办法来解决： 
1、document.domain+iframe（只能解决情况1）： 
a、在发起方页面和接收方页面设置document.domain，并将值设为父域的主域名(window.location.hostname) 
b、在发起方页面创建一个隐藏的iframe，iframe的源是接收方页面 
c、根据浏览器的不同，通过iframe.contentDocument || iframe.contentWindow.document来获得接收方页面的内容 
d、通过获得的接收方页面的内容来与接收方进行交互 
这种方法有个缺点，就是当一个域被攻击时，另一个域会有安全漏洞出现。
```

## 是什么?ajax 的交互模型?同步和异步的区别?如何解决跨域问题?
```

1. 通过异步模式，提升了用户体验
2. 优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用
3. Ajax在客户端运行，承担了一部分本来由服务器承担的工作，减少了大用户量下的服务器负载。
2. Ajax的最大的特点是什么。

Ajax可以实现动态不刷新（局部刷新）
readyState属性 状态 有5个可取值： 0=未初始化 ，1=启动 2=发送，3=接收，4=完成

ajax的缺点
1、ajax不支持浏览器back按钮。
2、安全问题 AJAX暴露了与服务器交互的细节。
3、对搜索引擎的支持比较弱。
4、破坏了程序的异常机制。
5、不容易调试。

跨域： jsonp、 iframe、window.name、window.postMessage、服务器上设置代理页面
```


## Ajax 解决浏览器缓存问题？
```
1、在ajax发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0")。
2、在ajax发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。
3、在URL后面加上一个随机数： "fresh=" + Math.random();。
4、在URL后面加上时间搓："nowtime=" + new Date().getTime();。
5、如果是使用jQuery，直接这样就可以了 $.ajaxSetup({cache:false})。这样页面的所有ajax都会执行这条语句就是不需要保存缓存记录。
```


## 说说TCP传输的三次握手策略
```
为了准确无误地把数据送达目标处，TCP协议采用了三次握手策略。用TCP协议把数据包送出去后，TCP不会对传送  后的情况置之不理，它一定会向对方确认是否成功送达。握手过程中使用了TCP的标志：SYN和ACK。
发送端首先发送一个带SYN标志的数据包给对方。接收端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息。最后，发送端再回传一个带ACK标志的数据包，代表“握手”结束
若在握手过程中某个阶段莫名中断，TCP协议会再次以相同的顺序发送相同的数据包。
```

** 断开一个TCP连接则需要“四次握手”
```
- 第一次挥手：主动关闭方发送一个FIN，用来关闭主动方到被动关闭方的数据传送，也就是主动关闭方告诉被动关闭方：我已经不 会再给你发数据了(当然，在fin包之前发送出去的数据，如果没有收到对应的ack确认报文，主动关闭方依然会重发这些数据)，但是，此时主动关闭方还可 以接受数据

- 第二次挥手：被动关闭方收到FIN包后，发送一个ACK给对方，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号）

- 第三次挥手：被动关闭方发送一个FIN，用来关闭被动关闭方到主动关闭方的数据传送，也就是告诉主动关闭方，我的数据也发送完了，不会再给你发数据了

- 第四次挥手：主动关闭方收到FIN后，发送一个ACK给被动关闭方，确认序号为收到序号+1，至此，完成四次挥手
```


## HTTP和HTTPS
```
- HTTP协议通常承载于TCP协议之上，在HTTP和TCP之间添加一个安全协议层（SSL或TSL），这个时候，就成了我们常说的HTTPS
- 默认HTTP的端口号为80，HTTPS的端口号为443
```

## 为什么HTTPS安全
```
- 因为网络请求需要中间有很多的服务器路由器的转发。中间的节点都可能篡改信息，而如果使用HTTPS，密钥在你和终点站才有。https之所以比http安全，是因为他利用ssl/tls协议传输。它包含证书，卸载，流量转发，负载均衡，页面适配，浏览器适配，refer传递等。保障了传输过程的安全性
```

## XMLHttpRequest

[轻松掌握XMLHttpRequest对象](http://www.cnblogs.com/beniao/archive/2008/03/29/1128914.html)

## JSONP原理及优缺点
```
JSONP的原理说白了就是插入一个script标签，其src指向跨域接口，返回对应的callback(data)，其中data是json格式，callback是页面已存在的function。  
**优点**：它不像XMLHttpRequest对象实现的Ajax请求那样受到同源策略的限制；它的兼容性更好，在更加古老的浏览器中都可以运行，不需要XMLHttpRequest或ActiveX的支持；并且在请求完毕后可以通过调用callback的方式回传结果。  
**缺点**：它只支持GET请求而不支持POST等其它类型的HTTP请求；它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题。
```

## JSON劫持
```
JSON 劫持又为“ JSON Hijacking ”，最开始提出这个概念大概是在 2008 年国外有安全研究人员提到这个 JSONP 带来的风险。其实这个问题属于 CSRF（ Cross-site request forgery 跨站请求伪造）攻击范畴。当某网站听过 JSONP 的方式来快域（一般为子域）传递用户认证后的敏感信息时，攻击者可以构造恶意的 JSONP 调用页面，诱导被攻击者访问来达到截取用户敏感信息的目的。
```
## Callback 可定义导致的安全问题
```
绝大部分提供JSONP的站点都会允许自定义callback，那么这里就会带来很大的安全隐患。如：
1. 在早期 JSON 出现时候，大家都没有合格的编码习惯。再输出 JSON 时，没有严格定义好 Content-Type（ Content-Type: application/json ）然后加上 callback 这个输出点没有进行过滤直接导致了一个典型的 XSS 漏洞；
2. 对callback和输出没有进行严格的过滤，导致XSS攻击。这样的防御机制是比较传统的攻防思维，对输出点进行 xss 过滤。
```
## 安全防范
```
1. 定义严格的 Content-Type（ Content-Type: application/json ）；
2. 对callback和输出进行严格的XSS过滤；
3. 对请求来源Referer进行严格的过滤；
```