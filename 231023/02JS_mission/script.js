// const num1 = document.getElementById("#number1");
// const num2 = document.getElementById("#number2");
// const btn = document.querySelector("button");

// console.log(num1);

// function getGCD(num1, num2) {
//   let max = n > m ? n : m;
//   let GCD = 0;
//   for (let i = 1; i <= max; i++) {
//     if (n % i === 0 && m % 1 === 0) {
//       GCD = i;
//     }
//   }
//   return GCD;
// }

const f = document.querySelector("#number1");
const s = document.querySelector("#number2");
const button = document.querySelector("button");
const result = document.querySelector("#result");

const getGCD = (f, s) => {
  let max = f > s ? f : s;
  let GCD = 0;
  for (let i = 0; i <= max; i++) {
    if (f % i === 0 && s % 1 === 0) {
      GCD = i;
    }
  }
  return GCD;
};

button.onclick = () => {
  result.innerText = getGCD(f.value, s.value);
};
