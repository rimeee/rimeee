// 생성자 함수 -> 객체 생성
// 붕어빵 틀을 통해서 붕어빵을 무한대로 생산가능

//생성자 함수 = 붕어빵 틀 = 프로토타입
function Book(title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;

  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  };
}

//인스턴스 객체
let book1 = new Book("자바스크립트", 400, false);
let book2 = new Book("html5", 435, false);
let book3 = new Book("css3", 320, false);

console.log(`${book1.title} - ${book1.pages}쪽 - ${book1.finish()}`);
console.log(`${book2.title} - ${book2.pages}쪽 - ${book2.finish()}`);
console.log(`${book3.title} - ${book3.pages}쪽 - ${book3.finish()}`);

class book5 {
  constructor(title, pages, done) {
    this.title = title;
  }
}
