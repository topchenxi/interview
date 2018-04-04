# js-1

## undefined & null
```js
console.log(undefined == null); // true
console.log(undefined === null); // false
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