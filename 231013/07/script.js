// function sum(a, b) {
//   let result = a + b;
// }
// console.log(result);  //지역변수의 예시

// let hi = "hello";

// function greeting() {
//   console.log(hi);
// }

// greeting();

// let hi = "hello";
// function chanege() {
//   hi = "bye";
// }

// console.log(hi);
// chanege();
// console.log(hi);

const factor = 5;
const num = 10;

function calc() {
  return num * factor;
}

{
  let result = calc();
  document.write(`result : ${result}`);
}
