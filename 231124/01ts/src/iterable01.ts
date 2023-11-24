const hi = "Hello";
for (let ch of hi) {
  console.log(ch);
}

const chArray = [...hi];
console.log(chArray);

const [ch1, ch2] = hi;
console.log(ch1, ch2);
