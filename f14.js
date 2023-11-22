// destructuring of arrays


// destructuring of arrays happends in order
const arr = [1, 2, 3, 4, 5, 6];
const [z, x, , y] = arr;
console.log(z, x, y);


//Swap using destructuring
// let a = 8, b = 6;
// (() => {
//   [a, b] = [b, a]
// })();
// console.log("a is: ", a); 
// console.log("b is: ", b); 