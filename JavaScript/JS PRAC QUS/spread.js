function multiply(a = 1, b = 1) {
 return a * b;
}
function sum(...nums) {
 return nums.reduce((acc, val) => acc + val, 0);
}
let nums = [1, 2, 3];
console.log(sum(...nums)); // Spread