// const t1 = () => {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve("t1 success");
//     }, 500);
//   });
// };
// const t2 = () => {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       rejects("t2 failed");
//     }, 500);
//   });
// };
// const t3 = () => {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve("t3 success");
//     }, 500);
//   });
// };

// Promise.all([t1(), t2(), t3()]) //Promise Return me yek function rejects hoga to sara promise reject hoga
//   .then((res) => {
//     console.log("Promise All Result : ", res); //jis order me lega usi order me return karega Ex:- ['ret1','ret2']
//   })
//   .catch((error) => {
//     console.log("Error ", error);
//   });

/*** My Own Promise.all ***/
const t1 = () => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve("t1 success");
    }, 500);
  });
};
const t2 = () => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      rejects("t2 failed");
    }, 500);
  });
};
const t3 = () => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve("t3 success");
    }, 500);
  });
};
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error("myAll: undefined is not an iterable"));
      return;
    }
    const n = promises.length;
    const results = [];
    if (n === 0) {
      resolve(results);
      return;
    }
    promises.forEach(async (promi, index) => {
      try {
        const res = await promi;
        //console.log("my promise all res : ", res);
        results[index] = res;

        if (index === n - 1) {
          resolve(results);
          return;
        }
      } catch (error) {
        reject(error);
        return;
      }
    });
  });
};

Promise.myAll([t1(), t3()]) //Success fully
  //Promise.myAll([t1(), t2(), t3()]) //Error
  .then((res) => {
    console.log("Promise All Result : ", res);
  })
  .catch((error) => {
    console.log("Error ", error);
  });
