// const mail = document.querySelector("#email");
// const btn = document.querySelector("#btn");

// const result = document.querySelector("result");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();

//   // result.innerText = ``
// });

// let protect = (em) => {
//   let star = 0;
//   for (let i = 3; i < em.length; i++) {
//     if (em[i] === "@") {
//       star += 1;
//     }
//   }

//   return star;
// };

// console.log()

// const email = document.querySelector("#email");
// const button = document.querySelector("#btn");
// const result = document.querySelector("result");

// button.addEventListner("click", (e) => {
//   e.preventDefault();

//   if (email.value !== "") {
//     let userName = email.value.split("@")[0];
//     userName = userName.substring(0, 3);
//     let domain = email.value.split("@")[1];
//     result.innerText = `${userName}***@${domain}`;
//   }
// });

const email = document.querySelector("#email");
const button = document.querySelector("#btn");
const result = document.querySelector("result");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value !== "") {
    let userName = email.value.split("@")[0];
    let half = userName.length / 2;
    userName = userName.substring(0, userName.length - half);
    let domain = email.value.split("@")[1];
    result.innerText = `${userName}***@${domain}`;
  }
});
