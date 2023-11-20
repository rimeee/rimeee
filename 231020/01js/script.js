const title = document.querySelector("#title");
const userName = document.querySelector("#desc .userName");
const pfImg = document.querySelector("#profile img");

title.onclick = () => {
  title.innerText = "프로필";
  title.style.background = "#000";
  title.style.color = "#fff";
};
userName.onclick = () => {
  userName.innerHTML = "이름 : <b>영심이<b>";
  userName.style.color = "#00f";
};
pfImg.onclick = () => (pfImg.src = "/img/2/pf2.png");
