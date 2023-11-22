// let can be declared only once in a code
// var can be declared multiple times and we dont want that

var catName = "Quincy";
// let catName = "Quincy";
var quote;

var catName = "Beau";
// let catName = "Beau";

function catTalk() {
  catName = "Oliver";
  quote = catName + " says Meow!";
  return quote;

}
catTalk();
