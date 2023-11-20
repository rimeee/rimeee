const items = document.querySelectorAll("p");

for (item of items) {
  item.addEventListener("click", function () {
    this.parentNode.removeChild(this);
  });
}
