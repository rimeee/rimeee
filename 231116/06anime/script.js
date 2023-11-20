anime({
  targets: "ul li",
  translateY: function (el, i) {
    if (i % 2 === 0) {
      return 80;
    } else {
      return -80;
    }
  },
  easing: "linear",
  duration: 1500,
  opacity: 1,
  // delay: anime.stagger(300),
});
