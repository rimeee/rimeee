// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum} 입니다.`);
// }

// calcSum();

//매개변수가 존재하는 함수 선언
// function sum(a, b) {
//   let result = a + b;
//   alert(`두 수의 합 : ${result}`);
// }
// sum(1, 2);

// function calcSum(a) {
//   let sum = 0;
//   for (let i = 1; i <= a; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${a}까지 더하면 결과는 ${sum}입니다.`);
// }
// calcSum(5);

// let num = parseInt(prompt("몇까지 더할까요?"));

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
document.write(`1부터 ${num}까지 더하면 ${calcSum(num)}`);

// let x = parseInt(prompt("첫 번째 숫자:"));
// let y = parseInt(prompt("두 번째 숫자:"));

// function mul(x, y) {
//   let sum = x * y;
//   return sum;
// }

// document.write(`두 수의 곲은 ${mul(x, y)}`);

// let x = parseInt(prompt("첫 번째 숫자:"));
// let y = parseInt(prompt("두 번째 숫자:"));

// function mul(a, b) {
//   return a * b;
// }

// document.write(`두 수의 곲은 ${mul(x, y)}`);

// let x = parseInt(prompt("첫 번째 숫자:"));
// let y = parseInt(prompt("두 번째 숫자:"));

// function mul(a, b) {
//   return a * b;
// }
// let result = mul(x, y);
// document.write(`두 수의 곲은 ${result}`);

// function multiple(a, b, c) {
//   return a * b + c;
// }
// console.log(multiple(2, 4, 8));

// function multiple(a, b = 5, c = 10) {
//   return a * b + c;
// }
// console.log(multiple(2, 4));
