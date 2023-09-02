function debounce(callback, delay) {
  let context = this;
  return function (...args) {
    let timeoutID;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
}

let x = function () {
  console.log("Printing A");
};

const debouncedFn = debounce(x, 5000);

Array.from({ length: 10 }).map(() => debouncedFn());
