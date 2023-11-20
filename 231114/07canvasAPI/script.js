const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, (Math.PI / 180) * 180 * 2, false);
    ctx.fill();
  };
}

// const CircleOne = new Circle(100, 100, 50, "crimson");
// const CircleTwo = new Circle(200, 200, 20, "dodgerblue");
// const CircleThree = new Circle(350, 30, 40, "yellow");
// const CircleFour = new Circle(500, 270, 80, "darkgreen");
// const CircleFive = new Circle(550, 80, 50, "gray");
// CircleOne.draw();
// CircleTwo.draw();
// CircleThree.draw();
// CircleFour.draw();
// CircleFive.draw();

// 새로고침, 랜덤위치, 랜덤색
// function makeCircle() {
//   let locationX = Math.floor(Math.random() * width);
//   let locationY = Math.floor(Math.random() * height);
//   function randomcl() {
//     const r = parseInt(Math.random() * 256);
//     const g = parseInt(Math.random() * 256);
//     const b = parseInt(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
//   }

// }
const objs = [];
for (let i = 0; i < 20; i++) {
  const radius = Math.floor(Math.random() * 50) + 10;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const color = `'rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  new Circle(x, y, radius, color);
}
