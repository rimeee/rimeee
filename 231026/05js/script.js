class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  buy() {
    console.log(`${this.title}을 ${this.price}원에 구매하였습니다.`);
  }
}

const book1 = new BookC("타입스크립트", 15000);
book1.buy();

class TextbookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }
  buyTextbook() {
    console.log(`${this.major} 전공서적, ${this.price}을 구마했습니다.`);
  }
}

const book2 = new TextbookC("html", 50000, "컴퓨터공학");
console.buyTextbook();
