// function greeting() {
//   console.log("안녕하세요");
// }

// setInterval(greeting, 2000);

// setInterval(() => {
//   console.log("안녕하세요");
// }, 2000);

// let counter = 0;

// let timer = setInterval(() => {
//   console.log("안녕하셍쇼");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// setTimeout(() => {
//   console.log("기다려주세요");
// }, 3000);

//----------------------------------------------------------
//misson
//----내가 한 거
// let num = prompt("숫자를 입력해주세요");

// if (num > 0) {
//   alert("해당 숫자는 양수입니다.");
// } else if (num < 0) {
//   alert("해당 숫자는 음수입니다.");
// } else if(num == 0){
//   alert("해당 숫자는 0입니다.");
// } else {
//   alert("숫자를 입력해주세요");
//   location
// }

//-----쌤 풀이
// const number = parseInt(prompt("숫자를 입력해주세요"));

// if (!isNaN(number)) {
//   if (number > 0) {
//     alert(`${number}는 양수입니다`);
//   } else if (number < 0) {
//     alert(`${number}는 음수입니다`);
//   } else {
//     alert(`${number}는 0입니다.`);
//   }
// }

//-------- 심화?
// const number = parseInt(prompt("숫자를 입력하세요!"));
// const isPositive = (n) => {
//   if (n > 0) {
//     alert(`${n}양수입니다`);
//   } else if (n < 0) {
//     alert(`${n}는 음수입니다`);
//   } else {
//     alert(`${n}는 0입니다`);
//   }
// };

// if (!isNaN(number)) {
//   isPositive(number);
// }

//----------------------------------------------------------------
//mission2

// let num1 = parseInt(prompt("첫 번째 숫자를 입력해주세요"));
// let num2 = parseInt(prompt("두 번째 숫자를 입력해주세요"));

// function result() {
//   if (num1 < num2) {
//     if (num2 % num1 == 0) {
//       document.write(`${num1}`);
//     } else if (num1 > num2) {
//       if (num1 % num2 == 0) {
//         document.write(`${num2}`);
//       }
//     }
//   }
// }

// result();

//--------------------------------- 풀이

const f = parseInt(prompt("첫 번째 숫자를 입력해주세요"));
const s = parseInt(prompt("두 번째 숫자를 입력해주세요"));

function getGCD(n, m) {
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % 1 === 0) {
      GCD = i;
    }
  }
  return GCD;
}
console.log(`${f} 와 ${s}의 최대공약수는 ${getGCD(f, s)}`);
