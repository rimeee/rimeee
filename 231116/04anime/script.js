anime({
  targets: ".box1",
  translateX: 250,
  easing: "linear",
  background: "#FF69B4",
  loop: true,
  direction: "alternate",
  borderRadius: "50%",
});
anime({
  targets: ".box2",
  translateX: 280,
  translateY: 300,
  easing: "linear",
  background: "#87CEEB",
  duration: 1000,
  loop: true,
  direction: "alternate",
  borderRadius: "50%",
});
anime({
  targets: ".box3",
  translateY: 320,
  easing: "linear",
  background: "#708090",
  duration: 1000,
  loop: true,
  direction: "alternate",
  borderRadius: "50%",
  rotate: {
    value: 360,
    duration: 1200,
  },
});
