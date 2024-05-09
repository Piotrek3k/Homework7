const promiseAll = async (promises) => {
    // function that mimics the behavior of Promise.all
    // function tries to resolve every promise in the given promises array
    const results = []  // initializing results and errors array
    let errors = [];

    for (let promise of promises) { 
        // asynchronously trying to resolve each promise. If the promise is resolved, it's added to the results array. If not, it's added to the errors array
        await promise.then(result => {  
                results.push(result)
            }).catch(error => errors.push(error) )
    };
    // returning Promise.reject if errors length > 0, otherwise returning Promise.resolve(results)
    if(errors.length > 0) { 
        return Promise.reject(errors)
    }
    else{
        return Promise.resolve(results)
    }
   
}

const promises = [
    Promise.resolve(1),
    Promise.reject(2),
    Promise.reject(3)
  ];

  console.log(promises[0].state)
  
//   promiseAll(promises)
//     .then(results => {
//       console.log("All promises resolved:", results); // Expected: [1, 2, 3]
//     })
//     .catch(error => {
//       console.error("At least one promise rejected:", error);
//     });

promiseAll(promises).then(results => {console.log("All promises resolved:", results); // Expected: [1, 2, 3]
    })
    .catch(error => {
      console.error("At least one promise rejected:", error);
    });

// console.log(Promise.reject(5))

// const promiseAll = async (promises) => {
//     const results = [];
//     try {
//         for (const promise of promises) {
//             const result = await promise;
//             results.push(result);
//         }
//         return results;
//     } catch (error) {
//         console.error("At least one promise rejected:", error);
//         throw error; // Propagate the rejection
//     }
// };

// const promises = [
//     Promise.resolve(1),
//     Promise.reject(2),
//     Promise.resolve(3)
// ];

// promiseAll(promises)
//     .then(results => {
//         console.log("All promises resolved:", results); // Expected: [1, 2, 3]
//     })
//     .catch(error => {
//         console.error("At least one promise rejected:", error);
//     });