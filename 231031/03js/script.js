// 심볼 : 유일성을 보장하는 값을 생성하고 싶을 때 사용 (주로 여러 개발자들이 공통의 프로젝트를 진행할 때, 객체의 키 이름이 중복될 것을 미연에 방지하고자 할 때)

let var1 = Symbol();
let var2 = Symbol();

let id = Symbol();

const member = {
  name: "park",
  [id]: 12345,
};
console.log(member);

const id01 = Symbol("id");
const tel01 = Symbol("telephone number");

const member03 = {
  name: "park",
  age: 20,
  [id01]: 1234,
  [tel01]: function () {
    alert(prompt("전화번호: "));
  },
};
console.log(member03);
console.log(member03[id01]);
console.log(member03[tel01]());

let tel = Symbol.for("tel");
let phone = Symbol.for("tel");
