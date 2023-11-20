// let arr01 = [1, 2, 3, 4, 5];
// let arr02 = [1, 2, 3, 4, 5];
// let result = [...arr01, ...arr02];
// let [a, b] = arr02;

// for (let a of arr01) {
//   console.log(a);
// }

// let arr = [1, 2, 3, 4, 5];

//2015 ES6문법 이후부터 제너레이터 함수를 사용하여 이터러블 객체가 아니더라도 해당 객체를 이터러블 함수로 만들 수 있게 됨
//일반적인 함수
function fnc() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
}
fnc();

//제너레이터 함수 생성방법
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let g1 = gen();
console.log(g1);

let g2 = gen();
for (let i of g2) {
  console.log(i);
}
