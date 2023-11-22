// using arrow functions

// filter out non-integers and negative integers
// filter funtion should return true or false
// if true, the element is added to the new array
// if false, the element is not added to the new array

// map each filtered element to its square
// map function should return the element
// the element is added to the new array

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {

  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
