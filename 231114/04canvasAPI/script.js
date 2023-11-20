const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const button = document.querySelector("button");
const origin = {
  x: 200,
  y: 200,
};
const alaha = 0.7;
ctx.fillStyle = "#ccc";
ctx.fillRect(200, 200, 100, 100);

button.addEventListener("click", () => {
  ctx.globalAlpha = alaha;
  ctx.translate(origin.x, origin.y);
  ctx.rotate((Math.PI / 180) * 30);
  function randomcl() {
    const r = parseInt(Math.random() * 256);
    const g = parseInt(Math.random() * 256);
    const b = parseInt(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b})`;
  }
  ctx.fillStyle = randomcl();
  ctx.fillRect(0, 0, 100, 100);
  ctx.translate(-origin.x, -origin.y);
});
