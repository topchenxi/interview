# vue

## active-class是哪个组件的属性

`vue-router`模块的`router-link`组件。

## 嵌套路由怎么定义

需要在 `VueRouter` 的参数中使用 `children` 配置，这样就可以很好的实现路由嵌套。

`index.html`，只有一个路由出口
```html
<div id="app">  
    <!-- router-view 路由出口, 路由匹配到的组件将渲染在这里 -->  
    <router-view></router-view>  
</div>
```

定义路由
```js
const routes = [  
    { path: "/", redirect: "/home" },//重定向,指向了home组件  
    {  
        path: "/home", component: home,  
        children: [  
            { path: "/home/game", component: game }  
        ]  
    }  
] 
```

## 怎么定义vue-router的动态路由？怎么获取传过来的动态参数
```
在router目录下的index.js文件中，对path属性加上/:id。
使用router对象的params.id。
```

## 在vue.cli中的安装使用scss的步骤

1.用npm 下三个loader（`sass-loader`、`css-loader`、`node-sass`）

2.在build目录找到webpack.base.config.js，在那个extends属性中加一个拓展.scss

3.还是在同一个文件，配置一个`module`属性

4.然后在组件的style标签加上lang属性 ，例如：lang="scss"

## 导航钩子有哪些？它们有哪些参数？

导航钩子有

a/全局钩子和组件内独享的钩子。
b/`beforeRouteEnter`、`afterEnter`、`beforeRouterUpdate`、`beforeRouteLeave`

参数

有`to`（去的那个路由）、`from`（离开的路由）、`next`（一定要用这个函数才能去到下一个路由，如果不用就拦截）

## Vue的双向数据绑定原理

vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过`Object.defineProperty()`来劫持各个属性的`setter`，`getter`，在数据变动时发布消息给订阅者，触发相应的监听回调。

具体步骤：
```
1.需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化

2.compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

3.Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是:
    1、在自身实例化时往属性订阅器(dep)里面添加自己
    2、自身必须有一个update()方法
    3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。

4.：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，
最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。

```

## vue生命周期的理解

总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后

```
创建前/后：在beforeCreated阶段，vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，$el还没有。

载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。

更新前/后：当data变化时，会触发beforeUpdate和updated方法。

销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在
```

## 每个周期具体适合哪些场景

```
beforecreate : 可以在这加个loading事件，在加载实例时触发 
created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用 
mounted : 挂载元素，获取到DOM节点 
updated : 如果对数据统一处理，在这里写上相应函数 
beforeDestroy : 可以做一个确认停止事件的确认框 
nextTick : 更新数据后立即操作dom
```

## vue.cli项目中src目录每个文件夹和文件的用法

`assets`文件夹是放静态资源；
`components`是放组件；
`router`是定义路由相关的配置;
`view`视图；
`app.vue`是一个应用主组件；
`main.js`是入口文件


## Vue.js的template编译

简而言之，就是先转化成AST树，再得到的render函数返回VNode（Vue的虚拟DOM节点）

```
首先，通过compile编译器把template编译成AST语法树（abstract syntax tree 即 源代码的抽象语法结构的树状表现形式），

compile是createCompiler的返回值，createCompiler是用以创建编译器的。另外compile还负责合并option。

然后，AST会经过generate（将AST语法树转化成render funtion字符串的过程）得到render函数，

render的返回值是VNode，VNode是Vue的虚拟DOM节点，里面有（标签名、子节点、文本等等）
```


## vuejs与angularjs以及react的区别？1.与AngularJS的区别

1.与AngularJS的区别 

相同点：
```
都支持指令：内置指令和自定义指令。
都支持过滤器：内置过滤器和自定义过滤器。
都支持双向数据绑定。
都不支持低端浏览器。
```

不同点：
```
1.AngularJS的学习成本高，比如增加了Dependency Injection特性，而Vue.js本身提供的API都比较简单、直观。
2.在性能上，AngularJS依赖对数据做脏检查，所以Watcher越多越慢。
Vue.js使用基于依赖追踪的观察并且使用异步队列更新。所有的数据都是独立触发的。
对于庞大的应用来说，这个优化差异还是比较明显的。
```

2.与React的区别

相同点：
```
React采用特殊的JSX语法，Vue.js在组件开发中也推崇编写.vue特殊文件格式，对文件内容都有一些约定，两者都需要编译后使用。
中心思想相同：一切都是组件，组件实例之间可以嵌套。
都提供合理的钩子函数，可以让开发者定制化地去处理需求。
都不内置列数AJAX，Route等功能到核心包，而是以插件的方式加载。
在组件开发中都支持mixins的特性。
```

不同点：
```
React依赖Virtual DOM,而Vue.js使用的是DOM模板。React采用的Virtual DOM会对渲染出来的结果做脏检查。
Vue.js在模板中提供了指令，过滤器等，可以非常方便，快捷地操作DOM。
```