let num = parseInt(prompt("20이하의 자연수를 입력해주세요"));

const result = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(result(num));
