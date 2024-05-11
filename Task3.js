const chainPromises = async (functions) => {
    // function to execute a chain of functions each one returning a promise
    // function returns last promise if all are resolved. Otherwise function returns first promise that has been rejected
    let result = ""
    for (func of functions) {
        result = await func(result); // passing the result of previous chain function as argument
    }
    return result;  
};


function asyncFunction1() {
    return Promise.resolve("Result from asyncFunction1");
  }
  
  function asyncFunction2(data) {
    return Promise.resolve(data + " - Result from asyncFunction2");
  }
  
  function asyncFunction3(data) {
    return Promise.resolve(data + " - Result from asyncFunction3");
  }
  
  const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];
  
  chainPromises(functionsArray)
    .then(result => {
      console.log("Chained promise result:", result);
      // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
    })
    .catch(error => {
      console.error("Chained promise error:", error);
    });
