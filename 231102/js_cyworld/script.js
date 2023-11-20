const menuHome = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./home.html");
  document.querySelector("#menuHome").style = "color: #000; background: #fff";
  document.querySelector("#menuGame").style =
    "color: #fff; background: #298eb5";
  document.querySelector("#menuJukebox").style =
    "color: #fff; background: #298eb5";
};

const menuGame = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./game.html");
  document.querySelector("#menuHome").style =
    "color: #fff; background: #298eb5";
  document.querySelector("#menuGame").style = "color: #000; background: #fff";
  document.querySelector("#menuJukebox").style =
    "color: #fff; background: #298eb5";
};

const menuJukebox = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./jukebox.html");
  document.querySelector("#menuHome").style =
    "color: #fff; background: #298eb5";
  document.querySelector("#menuGame").style =
    "color: #fff; background: #298eb5";
  document.querySelector("#menuJukebox").style =
    "color: #000; background: #fff";
};
