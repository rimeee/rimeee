//특정 위치부터 끝까지 요소를 제거하고 싶을 때

let subjects = ["html", "css", "javascript", "react", "typescript"];
console.log(subjects);

subjects.splice(2);
console.log(subjects);

// 매개변수가 2개일 때
let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
console.log(week);

week.splice(1, 5);
console.log(week);

let colors = ["red", "blue", "green", "white", "black"];
console.log(colors);

console.log(colors.slice(2));
console.log(colors.slice(1, 4));
