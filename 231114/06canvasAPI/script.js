const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.font = "bold 300px sans-serif";
ctx.fillText("Javascript", 100, 300);

ctx.beginPath();
let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, 1600, 600);
};
ctx.globalCompositeOperation = "source-in";
img.src = "./img/bin2.jpg";
