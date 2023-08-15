const animal = {
  name: "animal",
  sound: function (sound) {
    console.log("This is sound", this.name, sound);
  },
};

const dog = {
  name: "Dog",
  __proto__: animal,
};

dog.sound("bark");

// Class based example

function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  console.log("THIS", this.name + "made a sound");
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  console.log("Woof");
};

const bolt = new Dog("Bolt");

console.log(bolt.name);
bolt.makeSound();
bolt.bark();

// ..............................................

o = {};
// Is equivalent to:
o = Object.create(Object.prototype);

o = Object.create(Object.prototype, {
  // foo is a regular data property
  foo: {
    writable: true,
    configurable: true,
    value: "hello",
  },
  // bar is an accessor property
  bar: {
    configurable: false,
    get() {
      return 10;
    },
    set(value) {
      console.log("Setting `o.bar` to", value);
    },
  },
});

// Create a new object whose prototype is a new, empty
// object and add a single property 'p', with value 42.
o = Object.create({}, { p: { value: 42 } });

console.log({ o });
