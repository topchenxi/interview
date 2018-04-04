# 经典题目

## 闭包

概念
```
闭包就是一个环境包，这个包里有其他函数的内部变量可以在该函数外调用。而本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
```

作用
```
1.可以读取函数内部的变量 
2.让这些变量的值始终保持在内存中
```

闭包的缺点以及解决方法
```js
1.由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否
  则会造成网页的性能问题， 在IE中可能导致内存泄露。

解决方法:

在退出函数之前，将不使用的局部变量全部删除。如果要解决循环引用带来的内存泄露问题，
我们只需要把循环引用中的变量设为null即可。将变量设置为null意味着切断变量与它此前引用的值之间的联系。
当垃圾收集器下次运行时，就会删除这些值并回收他们占用的内存。

2.闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），
  把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

function t1() {
	var age = 20;

	function t2() {
		console.log(age);
	}
	return t2;
}
t1()();
```