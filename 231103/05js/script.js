// fetch("student.json").then(console.log);

fetch("student.json")
  .then((response) => response.json())
  .then((json) => {
    let output = `
  <h1>${json.name}</h1>
  `;
    document.querySelector("#result").innerHTML = output;
  })
  .catch((err) => console.log(err));
