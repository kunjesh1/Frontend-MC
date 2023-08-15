// call

const myObject = {
  name: "Kunjesh",
  printName: function (...args) {
    console.log({ args });
    console.log(this.name, args);
  },
};

const otherObject = {
  name: "Easter",
};

myObject.printName.call(otherObject, "other1", "other2");

myObject.printName.apply(otherObject);

// Bind function

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX; // This function gets executed in the global scope

console.log(unboundGetX());
