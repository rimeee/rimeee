//dragenter : 드래그 중인 아이템이 지정한 위치 반경에 들어왔을 때
//dragover : 드래그 중인 아이템이 지정한 위치에 정확하게 올라왔을 때 지속적 반응
//dragleave : 드래그 중인 아이템이 지정한 위치에서 벗어났을 때
//dragdrop : 드래그 중인 아이템을 지정한 위치에 놓았을 때

const box = document.querySelector(".box");

box.addEventListener("dragenter", () => {
  console.log("엔터");
});
box.addEventListener("dragover", (e) => {
  e.preventDefault();
});
box.addEventListener("dragleave", () => {
  console.log("리브");
});
box.addEventListener("drop", () => {
  console.log("드롭");
});
