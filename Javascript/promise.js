// It is a placeholder object which basically until and unless the async operation has been completed or not

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(8);
  }, 3);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(9);
  }, 3);
});

// Promise all

Promise.all([promise1, promise2, promise3]).then((res) => {
  console.log({ res });
});

// res[1,8]

Promise.race([promise1, promise2, promise3]).then((res) => {
  console.log({ res });
});
