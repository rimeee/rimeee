const member = {
  name: "kim",
  age: 25,
};

// let name = member.name;
// console.log(name);

let { name, age } = member;
console.log(name);
console.log(age);

let student = {
  name: "아이유",
  score: {
    history: 85,
    science: 94,
  },
  friends: ["kim", "lee", "park"],
};

let {
  name01,
  score: { history, science },
  friends: [f1, f2, f3],
} = student;
console.log(name01);
console.log(history);
console.log(science);
console.log(f1);
