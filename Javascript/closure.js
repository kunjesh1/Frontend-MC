function makeCounter() {
  let counter = 1;

  return function () {
    return counter++;
  };
}

let counter1 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());

let counter2 = makeCounter();

console.log(counter2());
console.log(counter2());



function de