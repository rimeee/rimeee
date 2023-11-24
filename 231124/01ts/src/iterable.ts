let var1 = Symbol();
let var2 = Symbol();

let result = var1 === var2;
console.log(result);

let id = Symbol();
interface obj {
  name: string;
  [x: symbol]: number | string;
}
const member: obj = {
  name: "Park",
  [id]: 12345,
};

console.log(member);

let grade = Symbol("grade");
member[grade] = "VIP";
console.log(member);
