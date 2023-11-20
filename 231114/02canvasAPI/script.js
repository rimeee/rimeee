const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "crimson";
ctx.fillRect(150, 150, 100, 100);

ctx.translate(150, 150);
ctx.rotate((45 * Math.PI) / 180);
ctx.strokeRect(0, 0, 100, 100);

ctx.rotate((45 * Math.PI) / 180);
ctx.strokeRect(0, 0, 100, 100);

ctx.rotate((45 * Math.PI) / 180);
ctx.strokeRect(0, 0, 100, 100);

ctx.rotate((45 * Math.PI) / 180);
ctx.strokeRect(0, 0, 100, 100);

ctx.rotate((45 * Math.PI) / 180);
ctx.strokeRect(0, 0, 100, 100);

ctx.rotate((45 * Math.PI) / 180);
ctx.strokeRect(0, 0, 100, 100);
ctx.translate(150, 150);

ctx.rotate((45 * Math.PI) / 180);
ctx.strokeRect(200, 200, 100, 100);
