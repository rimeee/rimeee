let name = prompt("😊 이름을 말씀해주세요!", "ex.홍길동");
let height = parseInt(prompt("😘 현재 본인의 키는?", "ex. 180"));
let weight = parseInt(prompt("😘 현재 본인의 몸무게는?", "ex. 70"));

let normal_w = (height - 100) * 0.9;
let result = weight >= normal_w - 5 && weight < normal_w + 5;
result = result ? "적정체중입니다" : "적정체중이 아닙니다.";
document.write(`${name}님은 ${result}`);
