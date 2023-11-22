// const is read only

function printManyTimes(str) {
  
    const sentence = str + " is cool!";
  
    // sentence = str + " is amazing!"
    
    for(var i = 0; i < str.length; i+=2) {
      console.log(sentence);
    }
  
  }
  printManyTimes("Alexa Devs");