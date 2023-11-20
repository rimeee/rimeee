const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.strokeStyle = "red";
// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
// ctx.stroke();

// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
// ctx.stroke();

//타원을 만드는 두 번째 방법
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.arc(200, 150, 80, 0, (Math.PI / 180) * 180 * 2, true);
ctx.stroke();
