const arr = [1, 2, 3];

const totalCount = arr.reduce((acc, val) => acc + val, NaN);

Array.prototype.myReduce = function (callbackFn, initialVal) {
  const context = this;

  if (typeof context !== "undefined" && typeof context !== "Array") {
    return;
  }

  let acc = !!initialVal ? initialVal : this[0];
  for (let i = 1; i < this.length; i++) {
    acc = callbackFn(acc, this[i], i, this);
  }
  return acc;
};

console.log(
  arr.myReduce((acc, val) => acc * val),
  0
);

arr.forEach(async());

arr.for();

const arr = [1, 2, 3];

const promisedArray = arr.map(async (val) => {
  await Promise.resolve(1);
  return new Promise((resolve, reject) => {
    resolve(1);
  });
});

Promise.allSettled(promisedArray).then();

// 1 promise array
// any

promisedArray.forEach((promise) => {});

const arr = [p1, p2, p3, p4, p5, p6];

const chunkArr = [
  [p1, p2, p3],
  [p4, p5, p6],
];

for (let i = 0; i < chunkArr.length; i++) {
  await P;
}

Promise.all(chunkArr[0]).then((res) => {});

string = "aaaabbccaa";
const s = string.split("");

let c = s[0];
let count = 1;

for (let i = 0; i < s.length; i++) {}

//
