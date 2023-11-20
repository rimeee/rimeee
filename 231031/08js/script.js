let a = parseInt(prompt("첫 번재 숫자: "));
let b = parseInt(prompt("두 번재 숫자: "));
let c = parseInt(prompt("세 번재 숫자: "));

let numTotal = (a, b, c) => {
  let result;
  if (a < b) {
    result = a;
  } else {
    result = b;
  }
  if (c < result) {
    result = c;
  }
  return result;
};

console.log(numTotal(a, b, c));
