let students = ["kim", "Lee", "Park"];
localStorage.setItem("students", JSON.stringify(students));

let localData;
if (localStorage.getItem("students") === null) {
  localData = [];
} else {
  localData = JSON.parse(localStorage.getItem("students"));
}

localData.push("Choi");
console.log(`추가 후 학생 명단 : ${localData}`);
localStorage.setItem("students", JSON.stringify(localData));

const indexOfValue = localData.indexOf("Lee");
localData.splice(indexOfValue, 1);
console.log(`삭제 후 학생 명단 : ${students}`);

localStorage.removeItem("students");
