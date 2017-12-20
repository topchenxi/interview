# 数据双向绑定

基本原理:
1.需要一个方法来识别哪个UI元素被绑定了相应的属性
2.需要监视属性和UI元素的变化
3.需要将所有变化传播到绑定的对象和元素

## 方法一：利用发布订阅模式，订阅数据变更 

```html
<input type="text" data-bind-id="demo">
<p data-id="demo"></p>
```

```js
function DataBinder(object_id) {
    //创建一个简单地PubSub对象
    var pubSub = {
        callbacks: {},
        on: function(msg, callback) {
            this.callbacks[msg] = this.callbacks[msg] || [];
            this.callbacks[msg].push(callback);
        },
        publish: function(msg) {
            this.callbacks[msg] = this.callbacks[msg] || [];
            for (var i = 0, len = this.callbacks[msg].length; i < len; i++) {
                this.callbacks[msg][i].apply(this, Array.prototype.slice.call(arguments, 1));
            }
        }
    };
    var data_attr = "data-bind-" + object_id,
        view_attr = 'data-' + object_id,
        message = object_id + ":change";
    var changeHandler = function(e) {
        var target = e.target || e.srcElemnt, //IE8兼容
            prop_name = target.getAttribute(data_attr);

        if (prop_name && prop_name !== "") {
            pubSub.publish(message, target, prop_name, target.value);
        }
    };
    //监听变化事件并代理到PubSub
    if (document.addEventListener) {
        document.addEventListener("keyup", changeHandler, false);
    } else {
        //IE8使用attachEvent而不是addEventListener
        document.attachEvent("keyup", changeHandler);
    }
    //PubSub将变化传播到所有绑定元素
    pubSub.on(message, function(event, prop_name, new_val) {
        var elements = document.querySelectorAll("[" + view_attr + "=" + prop_name + "]"),
            tag_name;

        for (var i = 0, len = elements.length; i < len; i++) {
            tag_name = elements[i].tagName.toLowerCase();

            if (tag_name === "input" || tag_name === "textarea" || tag_name === "select") {
                elements[i].value = new_val;
            } else {
                elements[i].innerHTML = new_val;
            }
        }
    });

    return pubSub;
}
DataBinder('id');
```

## 方法二：数据劫持 (vue)

```html
<div class="app">
    <input type="demo" h-model="demo" spellcheck="true">

    <p h-text="demo"></p>
</div>
```

```js
(function(window) {
    var addEvent = (function() {
        if (window.addEventListener) {
            return function(el, type, fn) {
                if (el && el.nodeName || el === window) {
                    el.addEventListener(type, fn, false)
                } else if (el.length) {
                    for (var item of el) {
                        addEvent(item, type, fn);
                    }
                }
            }
        } else {
            return function(el, type, fn) {
                if (el && el.nodeName || el === window) {
                    el.attachEvent('on' + type, function() {
                        return fn.call(el, event);
                    })
                } else if (el.length) {
                    for (var item of el) {
                        addEvent(item, type, fn);
                    }
                }
            }
        }
    })();
    var Hue = function(opt) {
        var el = document.querySelector(opt.el);
        var data = opt.data || {};
        this.el = el;
        this.data = data;
        this.bindText();
        this.bindModel();
        return this;
    };
    Hue.prototype = {
        constructor: Hue,
        /* 前端数据劫持 */
        defineObj: function(obj, prop, value) {
            var _value = value || '',
                _this = this;
            try {
                Object.defineProperty(obj, prop, {
                    get: function() {
                        return _value;
                    },
                    set: function(newVal) {
                        _value = newVal;
                        _this.bindText();
                    },
                    enumerable: true,
                    configurable: true
                });
            } catch (error) { 
                /* IE8+ 才开始支持defineProperty,这也是Vue.js不支持IE8的原因 */
                console.log("Browser must be IE8+ !");
            }
        },
        bindModel: function() {
            var modelDOMs = this.el.querySelectorAll('[h-model]'),
                lenModel = modelDOMs.length;
            var _this = this,
                i, propModel;
            for (i = 0; i < lenModel; i++) {
                propModel = modelDOMs[i].getAttribute('h-model'); 
                /* init value */
                modelDOMs[i].value = this.data[propModel] || ''; 
                /* 前端数据劫持 */
                this.defineObj(this.data, propModel);
            }
            addEvent(modelDOMs, 'keyup', function(e) {
                _this.data[propModel] = e.target.value;
            })
        },
        bindText: function() {
            var textDOMs = this.el.querySelectorAll('[h-text]'),
                lenText = textDOMs.length,
                prppText, j;
            for (j = 0; j < lenText; j++) {
                propText = textDOMs[j].getAttribute('h-text');
                textDOMs[j].innerHTML = this.data[propText] || '';
            }
        }
    };
    window.Hue = Hue;
})(window);

new Hue({
    el: '.app',
    data: {
        demo: 'Kenny'
    }
});
```