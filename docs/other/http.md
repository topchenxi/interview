# HTTP


## HTTP状态码大全

```

ajax

200, OK，访问正常
301, Moved Permanently，永久移动
302, Move temporarily，暂时移动
304, Not Modified，未修改
307, Temporary Redirect，暂时重定向
401, Unauthorized，未授权
403, Forbidden，禁止访问
404, Not Found，未发现指定网址
500, Internal Server Error，服务器发生错误

基本上，只有2xx和304的状态码，表示服务器返回是正常状态。


100-199 用于指定客户端应相应的某些动作。 
200-299 用于表示请求成功。 
300-399 用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息。 
400-499 用于指出客户端的错误。 
500-599 用于支持服务器错误。

200 (SC_OK)的意思是一切正常。一般用于相应GET和POST请求。

202 (SC_ACCEPTED)告诉客户端请求正在被执行，但还没有处理完

300 (SC_MULTIPLE_CHOICES)
表示被请求的文档可以在多个地方找到，并将在返回的文档中列出来。
如果服务器有首选设置，首选项将会被列于定位响应头信息中。 

301 (SC_MOVED_PERMANENTLY)
状态是指所请求的文档在别的地方；文档新的URL会在定位响应头信息中给出。
浏览器会自动连接到新的URL。 

302 (Found/找到)
与301有些类似，只是定位头信息中所给的URL应被理解为临时交换地址而不是永久的。

304 (Not Modified/为修正)
缓冲的版本已经被更新并且客户端应刷新文档

400 (Bad Request/错误请求)
400 (SC_BAD_REQUEST)指出客户端请求中的语法错误。 
401 (Unauthorized/未授权)
403 (Forbidden/禁止)
404 (Not Found/未找到)
405 (Method Not Allowed/方法未允许)
406 (Not Acceptable/无法访问)

500 (Internal Server Error/内部服务器错误)
501 (Not Implemented/未实现)
502 (Bad Gateway/错误的网关)
503 (Service Unavailable/服务无法获得)
504 (Gateway Timeout/网关超时)

// 第二种说法
100  Continue  继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
200  OK   正常返回信息
201  Created  请求成功并且服务器创建了新的资源
202  Accepted  服务器已接受请求，但尚未处理
301  Moved Permanently  请求的网页已永久移动到新位置。
302 Found  临时性重定向。
303 See Other  临时性重定向，且总是使用 GET 请求新的 URI。
304  Not Modified  自从上次请求后，请求的网页未修改过。
400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
401 Unauthorized  请求未授权。
403 Forbidden  禁止访问。
404 Not Found  找不到如何与 URI 相匹配的资源。
500 Internal Server Error  最常见的服务器端错误。
503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。

```
