const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

const ctx = canvas.getContext("2d");

let isDrawing = false;
let stratX;
let startY;
let lineWidth = 2;

toolbar.addEventListner();
