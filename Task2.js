const promiseAllSettled = async (promises) => {
  // function that mimics the behavior of Promise.isAllSettled()
  // function tries to resolve every promise in the array of promises given as argument
  // function returns status of all promises and their value or reason (depending on the status)
    let results = []  
    for (let promise of promises) {   
        await promise.then(result => {  
                results.push({status: "fulfilled", value: result})
            }).catch(error => {
                results.push({status: "rejected", reason: error})
            } )
    };
    return JSON.stringify(results)
}

const promises = [
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3)
  ];
  
  promiseAllSettled(promises)
    .then(results => {
      console.log("All promises settled:", results);
      // Expected: [{ status: 'fulfilled', value: 1 },
      //            { status: 'rejected', reason: 'Error occurred' },
      //            { status: 'fulfilled', value: 3 }]
    });