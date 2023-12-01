//스크롤 위치에 따라 텍스트값 변경
const h1 = document.querySelector("h1");

//스크롤 위치에 따라서 상단 bar 채움 정도 달라지기
const progressBar = document.querySelector(".bar");

//스크롤 내리게 되었을 때, 위치 값(100) + 작업중인 전체 문서의 높이 값(5000) + 전체 높이값 대비 스크롤 위치 값(%)
let scrollNum = 0;
let documentHeight = 0;
let per = 0;

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = percent(scrollNum, documentHeight) + "%";
  h1.innerText = per;
});
