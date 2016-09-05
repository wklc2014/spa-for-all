'use strict';

// let a = true;
// var b = false;
// if(a){
// 	let c = 1;
// 	var d = 2;
// 	console.log(a, b, c, d)
// }

// console.log(a, b, c, d)

// let a = []
// for(var i = 0; i < 10; i++){
// 	a[i] = function () {
// 		console.log(i)
// 	}
// }

// a[2]();
// a[3]();

// console.log(foo); // 输出undefined
// console.log(bar); // 报错ReferenceError

// var foo = 2;
// let bar = 2;

// var tmp = 123;

// if (true) {
//     tmp = 'abc'; // ReferenceError
//     console.log(typeof tmp)
//     let tmp;
//     console.log(typeof tmp)
// }
// console.log(tmp)

// function bar(x = 2, y = x) {
//   return [x, y];
// }

// console.log(bar())

// var tmp = new Date();

// function f() {
//   console.log(tmp);
//   if (false) {
//     var tmp = "hello world";
//   }
// }

// f(); // undefined
// function f1() {
//   let n = 5;
//   if (true) {
//     let n = 10;
//   }
//   console.log(n); // 5
// }
// f1()
// ES5严格模式
// function f() {
//   	console.log('out', 2)
//   }
// if (true) {
//   function f() {
//   	console.log('in', 1)
//   }
//   f();
// }
// // 报错
// f()

// 不报错
// if (true) {
//   function f() {}
// }

// 报错
// if (true)
//   function f() {}
// const foo = Object.freeze({});
// foo.a = 1;































