// Set() 내장객체
// 배열이 갖지 못한 기능을 추가해주기 위해 나옴
// 배열은 배열 안에 들어가있는 각각의 아이템마다 인덱스 값을 부여 => 동일한 아이템이 존재하더라도 컴퓨터 인덱스값이 다르기 때문에 다른 아이템 인식 가능

// let arr = [1,3,5,1,4,3,9];
//하나의 배열안에 중복되는 값을 사용하고 싶지않을 수 있음.

// let obj = {
//   title: "js",
//   page: 365,
//   title: "ts",
// };

//obj.title;

let numSet1 = new Set(); //key값만 넣을수 있음
numSet1.add("one").add("two");
console.log(numSet1);

let numSet2 = new Set([1, 2, 3]);
console.log(numSet2);

let numSet3 = new Set([1, 2, 1, 3, 1, 5]); // 중복된 값을 빼버림
console.log(numSet3);
console.log(numSet3.add(7)); //Set 객체에 값을 추가
console.log(numSet3);
console.log(numSet3.has(4)); // Set 객체에 아이템이 있으면 트루 아니면 펄스
console.log(numSet3.delete(5)); // 삭제
console.log(numSet3);
