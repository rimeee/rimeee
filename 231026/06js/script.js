class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    alert(`${this.name} is running`);
  }
}

const manggom = new Pet("망곰이", "노란색");
manggom.run();

class Cat extends Pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }
  viewinfo() {
    alert(`${this.name}는 ${this.color}의 ${this.breed}입니다.`);
  }
}

const cat1 = new Cat("망곰이", "노란색", "코숏");
cat1.viewinfo();
