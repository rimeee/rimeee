const userDataList = [
  { id: 123, name: 변백현 },
  { id: 456, name: 박원빈 },
  { id: 789, name: 정성찬 },
];

const searchIdInput = document.querySelector("#search-id-input");
const searchResult = document.querySelector("#search-result");

// searchIdInput.addEventListener("keyup", () => {
//   const searchId = searchIdInput.value;
//   searchResult.forEach((element) => {
//     if (searchId === userDataList.id) {
//       element.classList.remove("")
//       element.innerHTML = `${userDataList.name}`;
//     }
//   });
// });

const findUser = (searchId) => {
  const targetData = userDataList.find((data) => data.id === searchId);
  if (targetData === null) {
    searchResult.innerText = "유저 검색 결과 없음";
    return;
  }
  searchResult.innerText = targetData.name;
};

searchIdInput.addEventListener("keyup", (e) => {
  const searchId = Number(e.target.value);
  findUser(searchId);
});
