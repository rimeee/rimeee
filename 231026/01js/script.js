let bag = {
  type: "backpack",
  color: "blue",
  size: 15,
};
// for in문
for (let key in bag) {
  console.log(`${key}`);
}

let book1 = {
  title: "자바스크립트",
  pages: 648,
  buy: function () {
    console.log("이 책을 구입했습니다.");
  },
};

for (let key in book1) {
  console.log(`${key}`);
}
let keys = Object.keys(book1);
console.log(keys);

let values = Object.values(book1);
console.log(values);

let entries = Object.entries(book1);
console.log(entries);
