// const displayA = () => {
//   console.log("A");
// };
// const displayB = (callback) => {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000);
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB(displayC);

// const order = (coffee, callback) => {
//   console.log(`${coffee} 주문 접수`);
//   setTimeout(() => {
//     callback(coffee);
//   }, 3000);
// };
// const dispaly = (result) => {
//   console.log(`${result} 준비 완료`);
// };

// order("아메리카노", dispaly);

// const displayLetter = () => {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//     setTimeout(() => {
//       console.log("C");
//       setTimeout(() => {
//         console.log("D");
//         setTimeout(() => {
//           console.log("STOP");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

// displayLetter();
