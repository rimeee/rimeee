// const ul = document.querySelector("ul");
// const fragment = document.createDocumentFragment();
// const nine = 9;

// for (let i = 0; i < nine; i++) {
//   const li = document.createElement("li");
//   fragment.appendChild(li);
// }
// ul.appendChild(fragment);

const staggerWrap = document.querySelector("ul");
const fragment = document.createDocumentFragment();
const grid = [9, 5];
const col = grid[0];
const row = grid[1];
const allElement = row * col;

for (let i = 0; i < allElement; i++) {
  const li = document.createElement("li");
  fragment.appendChild(li);
}
staggerWrap.appendChild(fragment);

const tl = anime.timeline({
  targets: "ul li",
  delay: anime.stagger(200, { grid: [9, 5], from: "center", axis: "z" }),
  loop: true,
  direction: "alternate",
});

tl.add({
  scale: [
    { value: 0.1, easing: "easeOutsine", duration: 500 },
    { value: 1, easing: "easeOutsine", duration: 1200 },
  ],
}).add({
  translateX: anime.stagger(10, { gride: [9, 5], from: "center", axis: "x" }),
  translateY: anime.stagger(10, { gride: [9, 5], from: "center", axis: "y" }),
  rotate: anime.stagger([0, 90], { gride: [9, 5], from: "center", axis: "y" }),
});
// anime({
//   targets: "ul li",
//   easing: "linear",
//   duration: 1000,
//   scale: anime.stagger([0.5, 1], { grid: [9, 5], from: "center", axis: "z" }),
// });
