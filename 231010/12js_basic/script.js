// let id = prompt("아이디를 입력해주세요");
// if (id == "ezen") {
//   let password = prompt("비밀번호를 입력해주세요");
//   if (password == "1234") {
//     alert(`${id}님 반갑습니다`);
//   } else {
//     alert(`비밀번호가 일치하지 않습니다.`);
//   }
// } else {
//   alert(`아이디가 일치하지 않습니다`);
// }

let id = "ezen";
let pw = "1234";

let user_id = prompt("아이디는?");
if (id === user_id) {
  let user_pw = prompt("비밀번호는?");
  if (pw === user_pw) {
    alert(`${user_id}님 반갑습니다`);
  } else {
    alert(`${user_id} 님 비밀번호가 일치하지 않습니다`);
    location.reload();
  }
} else {
  alert(`아이디가 일치하지 않습니다.`);
  location.reload();
}
