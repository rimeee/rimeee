// let season = [];
// season[0] = "spring";
// season[1] = "summer";
// console.log(season);

// let pets = ["dog", "cat", "parrot"];
// console.log(pets);

// let fruits = new Array("apple", "peach", "lemon");
// console.log(fruits);

// let pets = ["dog", "cat", "parrot"];
// console.log(pets[1]);

// let fruits = new Array("apple", "peach", "lemon");
// fruits[4] = "배";
// console.log(fruits);

// let colors = ["red", "green", "blue", "white", "black"];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// let animals = ["lion", "bear", "bird"];
// animals.forEach((animal) => {
//   console.log(animal);
// });

// animals.forEach((animal, index) => {
//   console.log(`animals[${index}] : ${animal}`);
// });

// animals.forEach((animal, index, array) => {
//   console.log(`[${array}] [${index}] : ${animal}`);
// });

// let vegitable = ["양상추", "토마토", "피클"];
// let meat = ["불고기"];

// let meatBurger = vegitable.concat(meat, "빵");
// console.log(meatBurger);

//전개 연산자! === 스프레드 연산자
// let vegitable = ["양상추", "토마토", "피클"];
// let cheese = ["모짜렐라", "슈레드"];

// let cheeseBurger = ["빵", ...vegitable, ...cheese];

// console.log(cheeseBurger);

//배열 요소 정렬하는 메서드
// let numbers = [6, 9, 3, 21, 18];
// console.log(numbers.reverse());

// let week = ["sun", "mon", "tue"];
// let values = [5, 20, 3, 11, 4, 15];

// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === 0) return 0;
// });
// console.log(values);

// values.sort((a, b) => {
//   return a - b;
// });
// console.log(values);
