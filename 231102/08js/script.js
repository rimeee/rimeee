let num = document.querySelector("#user-number");
let btn = document.querySelector(".btn");
let result = document.querySelector("#result");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (num.value !== null && num.value !== "") {
//     if (num.value < 10) {
//       result.innerHTML = `${num.value}`;
//     } else {
//       alert("10보다 작은 수를 입력해주세요!");
//     }
//   } else {
//     alert("숫자를 입력해주세요");
//   }
// });

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let n = num.value;
  try {
    if (n === "" || isNaN(n)) {
      throw `숫자를 입력하세요`;
    }
    n = Number(n);
    if (n <= 10) {
      document.querySelector("#result").innerText = n;
    }
    if (n > 10) {
      throw `10보다 작은 수를 입력하세요`;
    }
  } catch (err) {
    alert(err);
  } finally {
    num.value = "";
  }
});
