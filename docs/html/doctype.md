# Html - DOCTYPE

## Doctype作用

```html
标签完整格式为<!DOCTYPE>
是一种标准通用标记语言的文档类型声明（）
目的是(告知浏览器的解析器，用什么文档类型规范来解析这个文档。)

- 告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档
- 告诉浏览器使用什么样的html或xhtml规范来解析html文档（即解析器用什么文档标准解析这个文档）
- 指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。

DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现

有以下模式
BackCompat：标准兼容模式未开启（或叫怪异模式、混杂模式）

CSS1Compat：标准兼容模式已开启（或叫严格模式）

标准模式与兼容模式区别

- 标准模式中，页面的排版 和JS运作模式都是以该浏览器支持的最高标准运行。
- 兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。


```

## HTML5 为什么只需要写 DOCTYPE HTML？

```html
已经不需要要这样写了：

- HTML5
<!DOCTYPE html>

- XHTML 1.0
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

- HTML 4.01
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；

而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。
DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。
```
