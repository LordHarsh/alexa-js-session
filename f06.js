// Coolest feature => arrow functions

var magic = function () {
  return new Date();
};

// becomes

// const magic = () => new Date();







// example2




var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));


// becomes

// const myConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcat([1, 2], [3, 4, 5]));
