let arr = [1, 3, 2, 4];
let newArr = arr.slice(1, 3); // Copy from index 1 to 2
arr.sort(); // Lexical sort by default
newArr.sort();

console.log(newArr)
console.log(arr)