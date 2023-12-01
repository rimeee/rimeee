const header = document.querySelector("header");
const coverTitle = document.querySelector(".coverTitle");
const progressBar = document.querySelector(".bar");
const coverWrap = document.querySelector(".coverWrap");
const dimd = document.querySelector(".dimd");
const contWrap = document.querySelector(".contWrap");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;

const coverHeight = window.innerHeight;
coverWrap.style.height = coverHeight + "px";
contWrap.style.marginTop = coverHeight + "px";

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

window.addEventListener("scrill", () => {
  scrollNum = window.screenY;
  documentHeight = document.body.scrollHeight;
  per = percent(scrollNum, documentHeight);

  if (scrollNum >= coverHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    coverTitle.style.top = -scrollNum / 5 + "px";
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 15} px`;
    dimd.style.backgroundColor = `rgba(0, 0, 0, ${0.4 + scrollNum / 1000})`;
  }
});
