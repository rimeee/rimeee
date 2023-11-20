//프로토타입을 상속하는 새로운 객체를 생성하는 방법
//1) 생성자 함수를 활용해서 객체를 생성
//2) class를 활용한 생성자 함수를 만들어서 객체를 생성하는 방법

function Book(title, price) {
  this.title = title;
  this.price = price;
}

//Book이라는 생성자 함수에 새로운 메소드를 정의하고 삽입

Book.prototype.buy = function () {
  console.log(`${this.title}을 ${this.price}원에 구매하였습니다.`);
};

//생성자 함수를 통해서 생성된 Book이라는 프로토타입 객체를 활용해서 인스턴스 객체를 만들어보자

const book1 = new Book("해리포터", 10000);
book1.buy();

function TextBook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}

Object.setPrototypeOf(TextBook.prototype, Book.prototype);

TextBook.prototype.buyTextBook = function () {
  console.log(`${this.major} 전공서적, ${this.title}을 구매하였습니다.`);
};

const book2 = new TextBook("자바스크립트", 20000, "컴퓨터공학");
book2.buyTextBook();
book2.buy();
