const btn = document.querySelector("button");
// const body = document.querySelector("body");
btn.onclick = () => {
  body.classList.toggle("dark");
  if (btn.innerText == "다크모드") {
    btn.innerText = "라이트모드";
  } else if (btn.innerText == "라이트모드") {
    btn.innerText = "다크모드";
  }
};
