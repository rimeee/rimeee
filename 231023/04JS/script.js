const result = document.querySelector("#result");
document.body.addEventListener("keydown", (e) => {
  result.innerText = `
  code: ${e.code}
  key: ${e.key}`;
});
