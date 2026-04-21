function outer() {
 let count = 0;
 return function () {
 count++;
 console.log(count);
 };
}
let counter = outer();
counter(); // 1
counter(); // 2