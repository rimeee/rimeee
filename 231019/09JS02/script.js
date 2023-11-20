let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let clock = () => {
  const now = new Date();
  hour.innerHTML = now.getHours();
  min.innerHTML = now.getMinutes();
  sec.innerHTML = now.getSeconds();
};

setInterval(clock, 1000);
