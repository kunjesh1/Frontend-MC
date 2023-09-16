/* 
function memoised(){
 const hashMap = new Map()
 
  return (a,b,c)=>{
    const key = `${a}-${b}-${c}`
    console.log("Inside Fn",hashMap.get(key))
    if(!!hashMap.get(key)){
    return hashMap.get(key)
    }
    console.log("calculate")
    const   sum = a+b+c;
    hashMap.set(key,sum)
    return sum
  }

console.log(hashMap.get(key))
  if(!!hashMap.get(key)){
    return hashMap.get(key)
  }
  console.log("Inside calculate")
  const sum = a+b+c;
  hashMap.set(key,sum) 
  return sum;
}



console.log(memoised(5,1,2)) //8 

console.log(memoised(5,1,2)) //8 


const memoisedFn = memoised()

memoisedFn(5,1,2)
memoisedFn(5,1,2)
memoisedFn(5,1,2) */

/* const animal = {
  name:"Animal",
  sound:()=>{
    console.log("Animal name",this.name)
  }
}


const dog = {
 name:"Dog",
 __proto__:animal
}

dog.sound() */

/* let Test =function(marks) {
  function math() {
  return marks;
  }

this.science = function() {
    return marks;
  }

  this.arts = function() {
    return marks;
  }
} */

/* Test.prototype = {
  arts : function(marks) {
    return marks;
  }
}

const newTest = new Test(7);
console.log(newTest.math()); // undefined
console.log(newTest.science()); // 7 
console.log(newTest.arts()); //7 */

/* console.log(newTest.__proto__.arts()) */

const input = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

const expectedOut = {
  A: "12",
  B: 23,
  "C.P": 23,
  "C.O.L": 56,
  "C.Q.0": 1,
  "C.Q.1": 2,
};

const flattenObj = {};

function flatten(obj, prefix) {
  Object.entries(obj).forEach(([key, value]) => {
    console.log({ key, value });
    let newPrefix = !!prefix ? `${prefix}.${key}` : key;

    if (typeof value == "object") {
      if (Array.isArray(value)) {
        const normalisedObj = { ...value };
        Object.entries(normalisedObj).map(([key, value]) => {
          flattenObj[newPrefix] = value;
        });
      } else {
        flatten(value, newPrefix);
      }
    } else {
      flattenObj[newPrefix] = value;
    }
  });
}

flatten(input);

console.log({ flattenObj });
