const { promisify } = require('util');

// Using async and promisify
function delayedOperation() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Operation completed after 2000 milliseconds");
      resolve("Result");
    }, 2000);
  });
}

const delayedOperationAsync = promisify(delayedOperation);

// Usage
async function performAsyncOperation() {
    console.log("Start operation");
    try {
      const result = await delayedOperationAsync();
      console.log("Received result:", result);
      console.log("Continue with other tasks");
      console.log("All tasks completed");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Call performAsyncOperation
  performAsyncOperation();
