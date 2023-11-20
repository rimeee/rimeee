let num = parseInt(prompt("학생 수는?"));

const pencil = (num) => {
  let das = num / 12;
  let result = Math.ceil(das);

  return result;
};

console.log(pencil(num));
