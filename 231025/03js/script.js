// const all = document.querySelector("#seed");
// const choice = document.querySelector("#total");

// const btn = document.querySelector("#raffle");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   for (i = 1; i <= all.value; i++) {
//     const result = Math.floor(Math.random() * choice);
//   }
// });

const seed = document.querySelector("#seed");
const total = document.querySelector("#total");
const raffle = document.querySelector("#raffle");
const result = document.querySelector("#result");

raffle.addEventListener("click", (e) => {
  e.preventDefault();
  let winner = "";
  for (let i = 0; i < total.value; i++) {
    let picked = Math.floor(Math.random() * seed.value + 1);
    winner += `${picked}번, `;
  }

  result.innerText = `선발된 조원 : ${winner}`;
});
