// using destructring with spread opeartors

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  
  // do nothing to first and second
  // assigns rest to arr
  const [ , , ...arr] = list;

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); 
console.log(source);