let t = "Hello Thank you good luck to you";
document.write(t, "<br/>");

document.write(t.charAt(16), "<br/>");
document.write(t.indexOf("you"), "<br/>");
document.write(t.indexOf("you", 16), "<br/>"); // 16번째 인덱스 이후에 나오는 you의 인덱스값
document.write(t.lastIndexOf("you"), "<br/>"); // 인덱스값을 오른쪽에서부터 찾음
document.write(t.lastIndexOf("you", 25), "<br/>");
document.write(t.match("luck"), "<br/>");
document.write(t.search("luck"), "<br/>"); // luck이라는 단어의 시작하는 인덱스값 찾기
document.write(t.substr(21, 4), "<br/>"); // 21번째 인덱스에서부터 4개
document.write(t.substring(6, 12), "<br/>"); //6부터 12인덱스 이전까지
document.write(t.replace("you", "me"), "<br/>");
document.write(t.toLowerCase(), "<br/>");
document.write(t.toUpperCase(), "<br/>");
document.write(t.length, "<br/>");

let s = t.split(" ");
console.log(s);

document.write(s[0], "<br/>");
document.write(s[4], "<br/>");

let str = "A";
let k = str.charCodeAt(0);
document.write(k, "<br/>");
