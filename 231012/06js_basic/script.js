// let arr_1 = ["사당", "교대", "방배", "강남"];
// let arr_2 = ["신사", "압구정", "옥수"];

// document.write(arr_1, "<br/>");
// document.write(arr_2, "<br/>");

// let result = arr_1.join("-");
// document.write(result, "<br/>");

// result = arr_1.concat(arr_2); //서로 다른 배열을 한 데 묶어줌
// document.write(result, "<br/>");

// result = arr_1.slice(1, 3); //slice(n, m) > n과 m은 인덱스 번호를 의미함 > n번 인덱스부터 m번 인덱스 전까지
// document.write(result, "<br/>");

// arr_1.sort(); // 오름차순
// document.write(result, "<br/>");

// arr_1.reverse(); // 오름차순
// document.write(result, "<br/>");

let greenArr = ["교대", "방배", "강남"];
let yellowArr = ["미금", "정자", "수서"];

document.write(greenArr, "<br/>");
document.write(yellowArr, "<br/>");

greenArr.splice(2, 1, "서초", "역삼"); //2번 인덱스 자리의 1개의 데이터를 대체하여 서초와 역삼을 넣음
document.write(greenArr, "<br/>");

let data1 = yellowArr.pop(); // 해당 배열의 가장 뒤의 아이템을 잘라냄
document.write(data1, "<br/>");

let data2 = yellowArr.shift(); // 해당 배열의 가장 앞의 아이템을 잘라냄
document.write(data2, "<br/>");

yellowArr.push(data2); // 배열의 뭐래?..
document.write(yellowArr, "<br/>");

yellowArr.unshift(data1); //
document.write(yellowArr, "<br/>");
