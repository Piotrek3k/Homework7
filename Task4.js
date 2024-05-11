

const promisify = (callback) => {
    // function to convert a callback-style function into a function that returns a promise
    return function () {
        // returning new Promise that resolves or rejects based on the given callback
        return new Promise((resolve, reject) => {
            callback.apply(null,[...arguments, (error,result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }]);
        });
    }
}




function callbackStyleFunction(value, callback) {
    setTimeout(() => {
      if (value > 0) {
        callback(null, value * 2);
      } else {
        callback("Invalid value", null);
      }
    }, 1000);
  }
  
  const promisedFunction = promisify(callbackStyleFunction);
  
  promisedFunction(3)
    .then(result => {
      console.log("Promised function result:", result); // Expected: 6
    })
    .catch(error => {
      console.error("Promised function error:", error);
    });