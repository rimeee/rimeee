// 정규식 = 정규표현식
// 사용하는 이유 : 특정 패턴을 사용해서 문자열을 표현하는 언어
// 쇼핑몰의 경우 회원가입처리, 주문접수처리 등 공통적으로 사용자가 입력하는 데이터를 효율적으로 처리할 때

let regexp = /\d{3}/;
// 숫자 3자리라는 패턴을 regexp라는 변수에 할당하고 표현식을 사용하겠다

console.log(regexp.test("123"));
console.log(regexp.test("456"));
console.log(regexp.test("Hello"));

let regexp01 = new RegExp(/\d{3}/);

console.log(regexp01.test("123"));
console.log(regexp01.test("456"));
console.log(regexp01.test("Hello"));

let str = "ES2015 is powerfull";
str.match(/ES6/);
// match() : 문자열에서 정규 표현식에 일치하는 부분을 찾는 메소드

str.replace(/ES2015/, "ES6");
console.log(str.replace(/ES2015/, "ES6"));
// replace() :일치하는 부분을 바꾸는 메소드

console.log(/es/.test(str));
console.log(/es/i.test(str));
// i : 대,소문자를 가리지 않고 검색해서 찾으라는 의미

console.log(str.match(/ES\d\d\d\d/));

let hello = "Hello everyone";
console.log(/^H/.test(hello));
console.log(/^h/i.test(hello));
console.log(/one$/.test(hello));
console.log("ES2015".match(/[^0-9]/));
