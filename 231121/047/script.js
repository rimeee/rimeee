// const container = document.querySelector(".container");

// container.innerHTML =
//   '<div class="user"><p>곰<p><span>지역 : 서울<span></div> <div class="user"><p>여우<p><span>지역  :대전<span></div> <div class="user"><p>사자<p><span>지역 : 부산<span></div>';

const userList = [
  { id: 1, name: "곰", address: "서울" },
  { id: 2, name: "여우", address: "대전" },
  { id: 3, name: "사자", address: "부산" },
];

const container = document.querySelector(".container");
userList.forEach((userData) => {
  container.innerHTML += `
  <div class="card">
    <h2>${userData.name}</h2>
    <p>지역: ${userData.address}</p>
  </div>
  `;
});
