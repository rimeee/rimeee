// window.onload = alert("안녕하세요");

// const button = document.querySelector("button");
// button.onclick = () => {
//   document.body.style.background = "green";
// };

//-------------------------------------------------

// const result = document.querySelector("#result");
// document.body.addEventListener("keydown", (e) => {
//   result.innerText = `
//   code: ${e.code}
//   key: ${e.key}`;
// });

//-------------------------------------------------

const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const word = document.querySelector("#word").value;
  let count = word.length;
  result.innerText = `${count}`;
});
