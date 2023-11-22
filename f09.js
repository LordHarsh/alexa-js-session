// Can also use default values for function arguments


// Immediaely invoked function expression IIFE
// const increment = (function() {
//     return function increment(number, value = 1) {
//       return number + value;
//     };
//   })();

  const increment =  (number, value =1) => {
    return number + value;
  }
  console.log(increment(5, 4)); 
  console.log(increment(5)); 