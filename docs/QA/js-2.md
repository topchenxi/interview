# js 大题

## 拖拽效果
```html
<div class="box"></div>
```
```js
var elem = document.querySelector('.box');
var start_p = {};
var elem_p = {};
elem.addEventListener('mousedown', start, false);
function start(event) {
    start_p = {
        x: event.pageX,
        y: event.pageY
    }
    let pos = get_p(elem);
    elem_p = Object.assign({}, pos);
    document.addEventListener('mousemove', move, false);
    document.addEventListener('mouseup', end, false);
}

function move(event) {
    let currentPosition = {
        x: event.pageX,
        y: event.pageY
    };
    set_p(elem, {
        x: (elem_p.x + (currentPosition.x - start_p.x)).toFixed(),
        y: (elem_p.y + (currentPosition.y - start_p.y)).toFixed()
    })
}

function end(event) {
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', end);
}

function getStyle(elem, property) {
    return window.getComputedStyle ? window.getComputedStyle(elem, false)[property] : elem.cuurenStyle[property];
}

function get_p(elem) {
    var pos = {
        x: 0,
        y: 0
    };
    var transformValue = getStyle(elem, 'transform');

    if (transformValue !== 'none') {
        let array = transformValue.match(/-?\d+/g);
        pos.x = parseInt(array[4].trim());
        pos.y = parseInt(array[5].trim());
    }
    return pos;
}

function set_p(elem, pos) {
    elem.style['transform'] = 'translate(' + pos.x + 'px,' + pos.y + 'px)';
}
```

## ul，如何点击每一列的时候alert其index
```html
 <ul id="test">
        <li>这是第一条</li>
        <li>这是第二条</li>
        <li>这是第三条</li>
    </ul>
```
```js
// var list = document.querySelectorAll('#test li');
var list = document.getElementById('test').getElementsByTagName('li');
// 方法一：
for (var i = 0; i < list.length; i++) {
    list[i].index = i;
    list[i].onclick = function() {
        console.log(this.index);
    };
}
//方法二：
for (var i = 0; i < 3; i++) {
    list[i].index = i;
    list[i].onclick = (function(a) {
        return function() {
            console.log(a);
        }
    })(i);
}
```

## 实现类似jquery的选择器
```js
var query = function(selector) {
    var reg = /^(#)?(\.)?(\w+)$/img;
    var regResult = reg.exec(selector);
    console.log(regResult);
    var result = [];
    //如果是id选择器
    if (regResult[1]) {
        if (regResult[3]) {
            if (typeof document.querySelector === "function") {
                result.push(document.querySelector(regResult[3]));
            } else {
                result.push(document.getElementById(regResult[3]));
            }
        }
    }
    //如果是class选择器
    else if (regResult[2]) {
        if (regResult[3]) {
            if (typeof document.getElementsByClassName === 'function') {
                var doms = document.getElementsByClassName(regResult[3]);
                if (doms) {
                    result = converToArray(doms);
                }
            }
            //如果不支持getElementsByClassName函数
            else {
                var allDoms = document.getElementsByTagName("*");
                for (var i = 0, len = allDoms.length; i < len; i++) {
                    if (allDoms[i].className.search(new RegExp(regResult[2])) > -1) {
                        result.push(allDoms[i]);
                    }
                }
            }
        }
    }
    //如果是标签选择器
    else if (regResult[3]) {
        var doms = document.getElementsByTagName(regResult[3].toLowerCase());
        if (doms) {
            result = converToArray(doms);
        }
    }
    return result;
}

function converToArray(nodes) {
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes, 0); //针对非IE浏览器        
    } catch (ex) {
        array = new Array();
        for (var i = 0, len = nodes.length; i < len; i++) {
            array.push(nodes[i])
        }
    }
    return array;
}

query('#test')
```

