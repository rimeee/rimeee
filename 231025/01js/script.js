window.onload = function () {
  const bgCount = 5;
  let randomNumber = Math.floor(Math.random() * bgCount) + 1;
  // let randomNumber2 = Math.ceil(Math.random() * bgCount);
  document.body.style.backgroundImage = `url(/1025/img/bg-${randomNumber}.jpg)`;
};
