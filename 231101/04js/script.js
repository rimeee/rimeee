const result = document.querySelector("#result");
const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "JAVASCRIPT"];
const member3 = ["JAVASCRIPT", "Typescript"];

const subjects = [...member1, ...member2, ...member3];
const resultList = new Set();
subjects.forEach((subject) => {
  resultList.add(subject);
});

result.innerHTML = `
<ul>
  ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>
`;
