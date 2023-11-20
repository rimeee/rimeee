// js에서 배열을 언제, 왜 사용할까
// 복수의 값을 하나로 묶어서 반복 및 규칙적인 패턴에 의해 처리하고자 할 때 사용함

let arr = [1, 2, 3, 4, 5];
let obj = {
  title: "test",
  author: "park",
  read: function () {
    console.log(`${title}`);
  },
};

// 객체가 할 수 있는 기능을 배열에게도 부여
// 객체가 하지 못하는 기능을 배열에게 주고자 하는 목적

// 객체에서  "key"는 문자열만 사용
// but, Map : "key" 영역에 문자열 뿐만 아니라 모든 자료형 사용 가능
// 객체의 가장 큰 약점 : 여러 개 값 및 값에 따른 정보를 담을 수 있는 장점 대비, 배열처럼 순서를 갖지 못함
// Map은 객체의 기능을 다 가져가며 순서를 매길 수 있음 (원래 배열이였기 때문)
// 객체의 키값을 가져올 때에 한해서 한정적으로 사용할 수 있는 반복문 for in
// 객체는 for in문을 제외하고서는 그 어떤 반복문을 해서 키와 밸류값을 반복해서 가져올 수 있는 방법이 없음
// Map 은 for of / in문을 활용해서 키와 밸류값을 모두 반복해서 가져올 수 있음
// 객체의 약점 : 배열은 배열 안에 담겨있는 아이템의 개수를 확인가능 / 객체는 아이템 개수를 식별하는 메소드 없음 . 맵은 객체와 같이 여러 정보를 담으면서도 안에 들어가있는 아이템 갯수 역시 식별 가능
// Map() 은 js의 내장객체 -> Date / Object / Array => class 생성자 함수로 만들어졌고, 해당 생성자 함수를 사용하는 동시에, 프로토타입의 객체가 생성되고, 해당 프로토타입 객체를 가져다가 인스턴스 객체를 만들어내는 과정을 거친다
// Js 내장 객체의 특징 -> new 예약어를 같이 사용했음

let myCup = new Map([
  ["color", "white"],
  ["haveHamdle", "true"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

// myCup.set("type", "mini");
// myCup.set("purpose", "daily");
// console.log(myCup);
// 1개의 동일한 객체를 중심으로 해당 객체에 다양한 메소드를 붙여서 사용하고자 할 때, 마치 자전거 체인과 같은 모양을 띄고 있다
// => 메소드 체이닝 기법 (* method chaining )
myCup.set("type", "mini").set("purpose", "daily");
console.log(myCup);

console.log(myCup.size);
console.log(myCup.get("color"));
console.log(myCup.has("color")); //해당 키를 가지고 있는지 알 수 있음
console.log(myCup.delete("color")); //해당 키 지우기
//console.log(myCup.clear()); // 모든 값 지우기
console.log(myCup.keys()); // 안에 있는 키 값 전부 가져오기

for (let key of myCup.keys()) {
  console.log(key);
}
for (let value of myCup.values()) {
  console.log(value);
}
for (let entry of myCup.entries()) {
  console.log(entry);
}
