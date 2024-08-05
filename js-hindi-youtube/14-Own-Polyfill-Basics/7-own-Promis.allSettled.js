const t1 = () => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve("t1 success");
    }, 4000);
  });
};
const t2 = () => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      rejects("t2 failed");
    }, 5000);
  });
};
const t3 = () => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve("t3 success");
    }, 6000);
  });
};

// Promise.allSettled([t1(), t2(), t3()])
//   .then((res) => {
//     console.log("Promise All Result : ", res); //output [{}{}]
//   })
//   .catch((error) => {
//     console.log("Error ", error);
//   });

/** my own myPromiseAllSettled **/
Promise.myPromiseAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error("undefined is not an Iterable"));
      return;
    }
    const n = promises.length;
    if (n === 0) {
      resolve({
        status: "fulfilled",
        value: "",
      });
      return;
    }
    const results = [];
    promises.forEach(async (promise, index) => {
      try {
        const res = await promise;
        const obj = { status: "fulfilled", value: res };
        results[index] = obj;
        if (index === n - 1) {
          resolve(results);
          return;
        }
      } catch (err) {
        const obj = { status: "rejected", reason: err };
        results[index] = obj;
        if (index === n - 1) {
          resolve(results);
          return;
        }
      }
    });
  });
};

Promise.myPromiseAllSettled() //Error
  // Promise.myPromiseAllSettled([t1()]) //Success fully run
  //Promise.myPromiseAllSettled([t1(), t2(), t3()]) // Success fully run
  .then((res) => {
    console.log("Promise All Result : ", res);
  })
  .catch((error) => {
    console.log("Error ", error);
  });
