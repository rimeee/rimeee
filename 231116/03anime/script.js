anime({
  targets: "ul.menu li",
  translateX: 250,
  easing: "linear",
  loop: true,
  direction: "alternate",
  // delay: function (el, i, l) {
  //   return i * 100;
  // },
  delay: anime.stagger(100),
  endDelay: anime.stagger(100),
});
