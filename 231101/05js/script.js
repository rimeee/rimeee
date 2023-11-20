// const result = document.querySelector("#result");
// const btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//   e.defaultPrevented;
//   for (let i = 1; i <= 6; i++) {
//     parseInt(Math.random() * 45);
//   }
//   result.innerHTML =
// });

const btn = document.querySelector("button");
const result = document.querySelector("#result");
const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = `중복숫자 발생`;
  }
});
