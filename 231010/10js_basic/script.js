// let transpfee = parseInt(prompt("사용한 교통비"));
// let foodex = parseInt(prompt("사용한 식비"));
// let beverex = parseInt(prompt("사용한 음료비"));

// let pay = transpfee + foodex + beverex;
// let change = 10000 - pay;

// let result = pay < 10000 && pay > 10000;
// result = result ? "돈 관리 잘하셨어요" : "돈을 아껴써주세요";
// document.write(`${change}, ${result}`);

let traffic = parseInt(prompt("교통비를 알려주세요!"));
let eat = parseInt(prompt("식비를 알려주세요!"));
let drink = parseInt(prompt("음료비를 알려주세요!"));

let normal = traffic + eat + drink;
let result = normal < 10000;
let result1 = 10000 - normal;
let result2 = normal - 10000;
result = result
  ? `${result1}원 남았어요! 돈관리 잘하셨어요!`
  : `${result2}원 초과했어요! 조금만 더 노력해 주세요!`;

document.write(result);
