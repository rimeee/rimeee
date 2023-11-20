let n: number = 1; //number > 타입주석
let b: boolean = true;
let s: string = "hello";
let o: object = {};

//타입스크립트에서 타입을 추론하는 방식을 "리터럴타입"
let n01 = 1;

//타입스크립트 치트키 any (타입을 초월하는 타입 (슈퍼타입))
let a: any = 0;
a = "hello";

// JS에서 undefined -> 변수안에 값이 지정되지 않았을 때
// TS에서 undefined -> 하나의 타입

let u: undefined = undefined;
//그럼 값 해제는 어떻게?... 따로 할당하면 해제가 되는 건가?..

//오브젝트는 이단아
let o2: object = {
  name: "kim",
  age: 25,
};

o2 = {
  first: 1,
  second: 2,
};

// TS에서 객체의 타입정의는 interface 키워드

interface Iperson {
  name: string;
  age: number;
}

let good: Iperson = {
  name: "Jack",
  age: 32,
};
interface Iperson2 {
  name: string;
  age: number;
  etc?: boolean;
} // ?는 선택적 속성 = 옵셔널 프로퍼티 = optional propert

// interface ai {
//   name: string;
//   age: number;
// }

//객체 안에서 사용되는 익명 인터페이스
let ai: {
  name: string;
  age: number;
} = {
  name: "Jack",
  age: 32,
};

//함수에서 익명 인터페이스가 사용되는 경우
function printMe(me: { name: string; age: number; etc?: boolean }) {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
  );
}

printMe(ai);

// JS에서 클래스를 사용한다는 것은 비슷한 패턴 혹은 반복되는 객체를 보다 효율적으로 만들어서 관리하기 위함

class Person1 {
  name?: string;
  age?: number;
}

let jack1: Person1 = new Person1();
jack1.name = "jack";
jack1.age = 32;
console.log(jack1);
