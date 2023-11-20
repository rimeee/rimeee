const items = document.querySelectorAll("li");
for (item of items) {
  item.addEventListner("click", function () {
    this.parentNode.removeChild(this);
  });
}
