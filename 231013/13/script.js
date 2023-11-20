// let kor = parseInt(prompt("국어 점수를 입력해주세요"));
// let mat = parseInt(prompt("수학 점수를 입력해주세요"));

// function average(a, b) {
//   return (a + b) / 2;
// }

// document.write(`두 과목의 평균 점수는 : ${average(kor, mat)}`);

let arrSub = ["국어", "수학"];
let result = testAvg(arrSub);

function testAvg(arrData) {
  let sum = 0;
  for (let i = 0; i < arrData.length; i++) {
    sum += parseInt(prompt(arrData[i] + "점수는?"));
  }
  let avg = sum / arrData.length;
  return avg;
}
document.write(`두 과목의 평균점수는 ${result}`);
