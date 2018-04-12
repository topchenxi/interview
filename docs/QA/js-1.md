# js-1

## undefined & null
```js
console.log(undefined == null); // true
console.log(undefined === null); // false
```

## number & string
```js
var foo = "11" + 2 - "1";
console.log(foo); // 111
console.log(typeof foo); // number
```

## true & false
```js
var undefined;
console.log(undefined == null); // true
console.log(1 == true); // true
console.log(2 == true); // false
console.log(0 == false); // true
console.log(0 == ''); // true
console.log(NaN == NaN); // false
console.log([] == false); // true
console.log([] == ![]); // true
```

## function arguments

```js 
(function() {
    return typeof arguments; //object 
})()
```

```js
(function f(f) {
    return typeof f(); // number
})(function() {
    return 1;
})
```

```js
var foo = {
    bar: function() { return this.baz },
    baz: 1
};
(function() {
    return typeof arguments[0]; // function
})(foo.bar)
```

## prototype
```js
var Foo = function() {
    this.bar = 'my property';
};
Foo.prototype.bar = 'prototype property';
var foo = new Foo();
console.log(foo.bar); // my property
delete foo.bar;
console.log(foo.bar); // prototype property
```

## dom
```html
<div id="demo">
    <a href="javascript:void(0)">A</a>
    <a href="javascript:void(0)">B</a>
    <a href="javascript:void(0)">C</a>
    <a href="javascript:void(0)">D</a>
</div>
```
```js
var addHandlers = function(nodes) {
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].onclick = function(e) {
            console.log((i + 1) * 100); // 500 500 500 500
        }
    }
}
addHandlers(document.getElementById('demo').getElementsByTagName('a'));
```

## sleep sort
```js
let arr = [25, 35, 62, 21, 45, 52, 65, 74, 2, 5, 654];
let target_arr = []
for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        target_arr.push(arr[i])
    }, arr[i]);
}
```

## this
```js
window.color = 'red';
var o = {
    'color': 'blue'
}
function say() {
    console.log(this.color);
}
say(); // red
say.call(this); // red
say.call(window); // red
say.call(o); // blue
```
```js
var name = 'saving';
function sayHi() {
    return this.name;
};
var lucy = {
    name: 'chenxi',
    sayHi: sayHi,
    sayAnotherHi: function() {
        return sayHi();
    }
};
var tomy = {
    name: 'qinx'
};
console.log(sayHi()); // saving
console.log(lucy.sayHi()); // chenxi
console.log(lucy.sayHi.apply(tomy)); // qinx
console.log(lucy.sayAnotherHi()); // saving
```

## prototype

```js
function A() {
    this.name = "chenxi";
}
A.prototype.getAName = function() {
    return this.name;
}
function B() {
    this.name = 'saving';
}
B.prototype = new A();
B.prototype.getBName = function() {
    return this.name;
}
var c = new B();
console.log(c.getAName()); // saving
console.log(c instanceof Object); // true
console.log(c instanceof A); // true
console.log(c instanceof B); // true
```

## reg

清楚字符串两端空格
```js
var reg = /^( +)|( +)$/g;
console.log('   aaa   bbb   '.replace(reg, ''));
```
替换
```js
//define
(function(window) {
    function fn(str) {
        this.str = str;
    }
    fn.prototype.format = function() {
        var arg = arguments;
        return this.str.replace(/\{(\d+)\}/ig, function(a, b) {
            return arg[b] || "";
        });
    }
    window.fn = fn;
})(window);

//use
(function() {
    var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>');
    console.log(t.format('http://www.alibaba.com', 'Alibaba', 'Welcome'));
})();
```

##  作用域
```js
(function() {
    var a = 0;
    function run() {
        a = 1;
        function run2() {
            console.log(a); // 1: undefined
            var a = 3;
            console.log(a); // 2: 3
        }
        run2();
        console.log(a); // 3: 1
        function run3(a) {
            console.log(a); // 4: 8
            a = 5;
        }
        run3(8);
        console.log(a); // 5: 1
        function run4() {
            a = 4;
        }
        console.log(a); //6: 1

        return run4;
    }
    var result = run();
    console.log(a); // 7: 1
    result();
    console.log(a); // 8: 4
})();
```

## 'get-element-by-id' 转化成驼峰表示法 'getElementById'
```js
function trans(str) {
    return str.split('-').map((item, index) => {
        return index && item.length ? item.substr(0, 1).toUpperCase() + item.substr(1, item.length - 1) : item;
    }).join('');
}
console.log(trans('get-element-by-id'))
```

## 写一个函数escapeHtml，将<, >, &, "进行转义
```js
function escapeHtml(str) {
    return str.replace(/[<>"&]/g, function(match) {
        switch (match) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '\"':
                return '&quot;';
        }
    });
}
```

## 随机选取10–100之间的10个数字，存入一个数组，并排序
```js 
var iArray = [];
function getRandom(istart, iend) {
    var iChoice = iend - istart + 1;
    return Math.floor(Math.random() * iChoice + istart);
}
for (var i = 0; i < 10; i++) {
    iArray.push(getRandom(10, 100));
}
iArray.sort();

```

## 提取URL中的各个GET参数，按key-value形式保存
```js
function serilizeUrl(url) {
    var result = {};
    var array = url.split('?');
    if (array.length < 2) return result;
    var data = array[1].split('&');
    data.map(item => {
        var tmpArr = item.split('=');
        result[tmpArr[0]] = tmpArr.length >= 2 ? tmpArr[1] : '';
    })
    return result
}
console.log(serilizeUrl('http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e=2'));
```

## 闭包
```js
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
};
// 4 4 4

for (var i = 1; i <= 3; i++) {
    setTimeout((function(a) {
        // 改成立即执行函数
        console.log(a);
    })(i), 0);
};
// 1 2 3
```

## trim 
```js
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+/, "").replace(/\s+$/, "");
    }
}

```

## object clone 
```js
// 方法一：
Object.prototype.clone = function() {
    var obj = this.constructor === Array ? [] : {};
    for (var key in this) {
        obj[key] = typeof this[key] === "object" ? this[key].clone() : this[key];
    }
    return obj;
}

//方法二：
function clone(Obj) {
    var buf;
    if (Obj instanceof Array) {
        buf = []; //创建一个空的数组
        var i = Obj.length;
        while (i--) {
            buf[i] = clone(Obj[i]);
        }
        return buf;
    } else if (Obj instanceof Object) {
        buf = {}; //创建一个空对象
        for (var k in Obj) { //为这个对象添加新的属性
            buf[k] = clone(Obj[k]);
        }
        return buf;
    } else { //普通变量直接赋值
        return Obj;
    }
}
```
