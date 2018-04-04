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