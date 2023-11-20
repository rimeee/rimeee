let a = parseInt(prompt("첫 번째 변: "));
let b = parseInt(prompt("두 번째 변: "));
let c = parseInt(prompt("세 번째 변: "));

// let result = (a, b, c) => {
//   let answer = 0;
//   if (a < b) {
//     answer = b;
//   } else {
//     answer = a;
//   }
//   if (c > answer) {
//     answer = c;
//   }
//   return answer;

//   if (answer > a + b) {
//     console.log("yes");
//   } else {
//     console.log("No");
//   }
// };

// console.log(result(a, b, c));

let solution = (a, b, c) => {
  let max;
  let answer = "yes";
  let total = a + b + c;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  if (total - max <= max) {
    answer = "no";
  }
  return answer;
};

console.log(solution(a, b, c));
