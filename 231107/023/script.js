// let button = document.querySelector(".button");

// button.addEventListener("click", (e) => {
//   e.preventDefault;
//   document.querySelector(".rectangle").style.background = "orange";
// });

const button = document.querySelector(".button");
const rectangle = document.querySelector(".rectangle");

const onClickButton = () => {
  const randomHue = Math.trunc(Math.random() * 361);
  const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
  const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;
  rectangle.style.setProperty("--start", randomColorStart);
  rectangle.style.setProperty("--end", randomColorEnd);
};

button.addEventListener("click", onClickButton);
