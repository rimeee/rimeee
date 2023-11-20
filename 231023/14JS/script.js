const tit = document.querySelector("#title");
const aut = document.querySelector("#autor");
const result = document.querySelector("#bookList");
// const reBtn = document.querySelector(`input[type=reset]`);
// const savBtn = document.querySelector(`input[type=submit]`);

savBtn.addEventListener("click", (e) => {
  e.preventDefault();
  result.innerText = `${tit} + ${aut}`;
});

// for (item of reBtn) {
//   savBtn.addEventListener("click", function () {
//     this.parentNode.removeChild(this);
//   });
// }
