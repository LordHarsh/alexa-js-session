// Spread operator to copy arrays

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = arr1; 
//   arr2 = [...arr1];
  arr1[0] = 'potato'
})();
console.log("arr1:", arr1);
console.log("arr2:", arr2);
