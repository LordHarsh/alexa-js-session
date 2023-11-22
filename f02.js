// var is defined in either global scope or with funcion scope
// let is defined in a block scope {}

var i = "global scope";

function checkScope() {
  var i = "function scope";
  if (true) {
    var i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();
console.log("Global scope is: ", i)