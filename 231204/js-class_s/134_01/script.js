const character = document.querySelector(".character");

character.addEventListener("dragstart", () => {
  console.log("시작");
});
character.addEventListener("drag", () => {
  console.log("진행중");
});
character.addEventListener("dragend", () => {
  console.log("Rmx");
});
