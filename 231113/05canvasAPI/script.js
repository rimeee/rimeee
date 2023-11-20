const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

// ctx.fillStyle = "yellow";
// ctx.strokeStyle = "#000";

// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath();
// ctx.fill();
// ctx.stroke();

ctx.beginPath();
ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true);
ctx.arc(200, 100, 50, 0, (Math.PI / 180) * 180, false);
ctx.fill();

ctx.beginPath();
ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
ctx.closePath();
ctx.stroke();

ctx.strokeStyle = "royalblue";
ctx.moveTo(200, 100);
ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
ctx.stroke();
