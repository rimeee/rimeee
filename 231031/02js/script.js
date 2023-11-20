const addNum = (...numbers) => {
  let sum = 0;
  for (let numbers of numbers) {
    sum += numbers;
  }

  return sum;
};

const animals = ["bird", "cat"];
const fruits = ["apple", "banana", "cherry"];

let sum01 = animals.concat(fruits);
console.log(sum01);

let sum02 = [...animals, ...fruits];
console.log(sum02);

let take01 = "red";
let take02 = take01;

console.log(take01);
console.log(take02);

let obj01 = {
  title: "js",
  page: 360,
};
console.log(obj01);
let obj02 = obj01;
console.log(obj02);
obj02.title = "ts";
console.log(obj01);
console.log(obj02);

const mine = [...fruits];
console.log(mine);

mine[1] = "orange";
console.log(mine);

const book = {
  title: "Javascript",
  pages: 500,
};
console.log(book);

book.author = "park";
console.log(book);

book["published date"] = "2023-10";
console.log(book);

let user = {
  name: "도레미",
};
user.age = 25;
console.log(user);

let makeUser = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

let user1 = makeUser("슛돌이", 20);
console.log(user1);