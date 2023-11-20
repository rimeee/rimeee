// let dispalyhello = () => {
//   console.log("hello");
// };

// dispalyhello();

// async function dispalyhello01() {
//   console.log("hello");
// }
// dispalyhello01();

// function whatsYourFavorite() {
//   let fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// }
// function dispalySubject(subject) {
//   return new Promise((resolve, reject) => resolve(`hello, ${subject}`));
// }

// whatsYourFavorite().then(dispalySubject).then(console.log);

async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;
}
async function dispalySubject(subject) {
  return `hello, ${subject}`;
}
async function init() {
  const response = whatsYourFavorite();
  const result = await dispalySubject(response);
  console.log(result);
}
init();

// whatsYourFavorite().then(dispalySubject).then(console.log);
