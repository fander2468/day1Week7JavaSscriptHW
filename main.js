// console.log("Heklo world");
// // variable
// let my_name = "world";
// console.log(my_name);

// let some_float = 3.2;
// console.log(some_float);

// // array
// let some_array = [1, 2, 3, 4];
// console.log(some_array);

// // object variable
// let some_object = { test: "please test me" };
// console.log(some_object);
// console.log(some_object.test);
// console.log(some_object["test"]);

//JS Hoisting
//console.log(madeUpName);
//let madeUpName = "Henry";

function odd(num) {
  for (num = 0; num <= 10; num++) {
    if (num % 2 != 0) {
      console.log(num);
    }
  }
}
console.log(odd(1));

let sum = (num1, num2) => num1 + num2;
console.log(sum(4, 5));

names = ["Sydney", "Josh", "thu", "sean"];

// map
let s_names = names.map((name_) => {
  if (name_[0] == "S" || name_[0] == "s") {
    return name_;
  } else {
    return false;
  }
});
console.log(s_names);

// reduce
const nums = [2, 3, 6, 8, 10];
let nums_sum = nums.reduce((accumulated_num, current_num) => {
  return accumulated_num + current_num;
});
console.log(nums_sum);

let long_names = names.filer((element) => element.length > 4);
console.log(long_names);

console.log(names.join(", "));

names.push("Steve");
console.log(names);

console.log(names.pop());
console.log(names);

console.log(names.shift());
console.log(names);

console.log(names.unshift("Sydney"));
console.log(names);

myName = "sean";
console.log(`My name is ${myName}`);

let capturedValue = names.splice(0, 1, "Fred");
console.log(`this was removed based on our splice: ${capturedValue}`);
console.log(names);


function replaceNames() {
  for (let i = 0; i < names.length: i++) {
    if (i % 2 == 0) {
      names.splice(i,1,'Marsha') 
    }
  }
}
console.log(replaceNames(names));

console.log("Joshua".search("s"))

console.log("Joshua".slice(0,4))