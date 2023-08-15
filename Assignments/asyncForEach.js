const arr = [1, 2, 3];

const promisifiedArray = arr.map((val) => {
  return fetch("https://api.publicapis.org/entries");
});

// console.log("Before Execution");

// It does the concurrent call
promisifiedArray.forEach(async (promiseVal) => {
  const val = await promiseVal;
  console.log({ val });
});

// // async function calculate() {
// //   for (let i = 0; i < promisifiedArray.length; i++) {
// //     const val = await promisifiedArray[i];
// //     console.log("Inside VAL", { val });
// //   }
// // }

// // calculate();

// console.log("After execution");

// Without forEach

console.log("Before Execution");
async function calculate() {
  for (let i = 0; i < promisifiedArray.length; i++) {
    const val = await promisifiedArray[i];
    console.log("Inside VAL", { val });
  }
}

calculate();

console.log("After Execution");
