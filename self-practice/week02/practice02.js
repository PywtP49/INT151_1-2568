let person1 = {
  name: "Alice",
  age: 25
};

let person2 = {
  name: "Alice",
  age: 25
};

let person3 = {
  name: "Alice",
  age: "25"
};

let person4 = {
  name: "Alice"
};

console.log(shallowEquality(person1, person2)); // true
console.log(shallowEquality(person1, person3)); // false (เพราะ 25 !== "25")
console.log(shallowEquality(person1, person4)); // false (key ไม่เท่ากัน)
