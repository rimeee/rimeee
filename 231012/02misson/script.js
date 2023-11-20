let now = new Date();
let firstDay = new Date("2023-08-22");
let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

document.querySelector(".accent").innerHTML = passedDay + "일째 되는 날😉";

function calcDate(days) {
  let future = toFirst + days * (1000 * 60 * 60 * 24);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();
  document.querySelector(
    "#date" + days
  ).innerHTML = `${year}년 ${month}월 ${date}일`;
}
calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

// future = toFirst + 200 * (1000 * 60 * 60 * 24);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date200").innerHTML = `${year}년 ${month}월 ${date}일`;

// future = toFirst + 365 * (1000 * 60 * 60 * 24);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date365").innerHTML = `${year}년 ${month}월 ${date}일`;

// future = toFirst + 500 * (1000 * 60 * 60 * 24);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date500").innerHTML = `${year}년 ${month}월 ${date}일`;
