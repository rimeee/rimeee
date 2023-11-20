// let word = prompt("문자열을 입력해주세요");

// let change = (word) => {
//   document.write(word.replace())
// }

const string = prompt("문자열을 입력해주세요");
const firstCh = string[0].toUpperCase();
const remainCh = string.slice(1);
const result = firstCh + remainCh;
document.write(result);
