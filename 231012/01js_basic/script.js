// let shoeDog = {
//   author: "phil knight",
//   category: "social",
//   pages: 500,
//   price: 19800,
// };

//--------------------------------------------------------------------------

// let tv = new Object();
// tv.color = "white";
// tv.price = 300000;
// tv.info = function () {
//   document.write(`tv색상 : ${tv.color} <br/>`);
//   document.write(`tv가격 : ${tv.price} <br/>`);
// };
// document.write(`<h1>tv 객체 메소드 호출</h1>`);
// tv.info();

//--------------------------------------------------------------------------

// let car = {
//   color: "black",
//   price: 5000000,
//   info: function () {
//     document.write(`car색상: ${car.color} <br/>`);
//     document.write(`car색상: ${car.price} <br/>`);
//   },
// };
// document.write(`<h1>car 객체 메소드 호출</h1>`);
// car.info();

//--------------------------------------------------------------------------

// 객체 & 메서드 : 재활용이 가능한 객체 및 메서드
// let test = {
//   avg: function (math, science) {
//     return math + science;
//   },
// };

// document.write(test.avg(50, 100));

// let test01 = {
//   math: 50,
//   science: 100,
//   avg: function () {
//     return this.test01.math + this.test01.science;
//   },
// };

// document.write(test01.avg());

//--------------------------------------------------------------------------

// let today = new Date();
// let nowMonth = today.getMonth() + 1;
// let nowDate = today.getDate();

// document.write(`<h1>오늘 날짜 정보</h1>`);
// document.write(`현재 월 : ${nowMonth} <br/>`);
// document.write(`현재 일 : ${nowDate} <br/>`);

// let classOpen = new Date(`2023/08/22`);
// let theMonth = classOpen.getMonth() + 1;
// let theDate = classOpen.getDate();

// document.write(`<h1>개강 날짜 정보</h1>`);
// document.write(`월 : ${theMonth} <br/>`);
// document.write(`일 : ${theDate} <br/>`);

//--------------------------------------------------------------------------

// let today = new Date();
// let nowYear = today.getFullYear();

// let theDate = new Date(nowYear, 11, 31);
// let diffDate = theDate.getTime() - today.getTime();

// let result = Math.ceil(diffDate / (60 * 60 * 24 * 1000)); //Math.ceil > 반올림
// document.write(`연말 D-day : ${result}일 남았습니다.`);

//--------------------------------------------------------------------------
