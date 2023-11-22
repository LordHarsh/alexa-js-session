// Without using async and promisify
function delayedOperation(callback) {
    setTimeout(function () {
      console.log("Operation completed after 2000 milliseconds");
      callback(null, "Result");
    }, 2000);
  }
  
  // Usage
  console.log("Start operation");
  delayedOperation(function (error, result) {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Received result:", result);
    }
  });
  console.log("Continue with other tasks");
  