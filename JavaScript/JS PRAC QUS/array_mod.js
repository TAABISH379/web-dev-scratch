let arr = [1, 2, 3, 4];
arr.push(5); // Add to end [1,2,3,4,5]
arr.pop(); // Remove last [1,2,3,4]
arr.shift(); // Remove first [2,3,4]
arr.unshift(0); // Add to start [0,2,3,4]
arr.splice(1, 2); // Remove 2 items starting at index 1
arr.reverse(); // Reverse order
console.log(arr)