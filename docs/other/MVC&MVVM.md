# MVC&MVVM

## MVC

```
MVC 是一种使用 MVC（Model View Controller 模型-视图-控制器）设计创建 Web 应用程序的模式：[1] 
Model（模型）表示应用程序核心（比如数据库记录列表）。
View（视图）显示数据（数据库记录）。
Controller（控制器）处理输入（写入数据库记录）。

目前有：vue.js,angularjs,backbone.js

```

## MVVM

```
MVVM的全称是Model View ViewModel

Model（模型）代表特定领域的数据或者应用所需的数据,如用户信息
View（视图）指应用中和用户直接交互的部分，他是一个交互式的UI来表示ViewModel的状态
ViewModel 专门用于数据转换的Controller,它可以把Model中的信息转换为View中的信息，同时从View专递命令给Model

```

## seaJS的用法及原理，依赖加载的原理、初始化、实现等**  
```
1.模块加载（插入script标签来加载模块。你在页面看不到标签是因为模块被加载完后删除了对应的script标签）；  
2.模块依赖（按依赖顺序依赖）；  
3.命名冲突（封装一层define，所有的都成为了局部变量，并通过exports暴漏出去）。
```