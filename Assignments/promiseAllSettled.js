// Promise all settled prototype

const arr = [1, 2, 4, 5, 6, 7];

const promisifiedArr = arr.map((val, index) => {
  return index % 2 ? Promise.resolve(val) : Promise.reject(val);
});

Promise.allSettled(promisifiedArr).then((r) => {
  console.log({ r });
});

Promise.all(promisifiedArr).then((r) => {
  console.log({ r });
});

Promise.myAllSettled = (promises) => {
  return Promise.all(
    promises.map((promise) => {
      Promise.resolve(promise)
        .then((val) => ({ status: "fulfilled", value: val }))
        .catch((reason) => ({ status: "rejected", reason: reason }));
    })
  );
};

Promise.myAllSettled(promisifiedArr).then((r) => {
  console.log({ r });
});
