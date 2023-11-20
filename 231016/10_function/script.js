let num = 0;
function testFnc() {
  num++;
  document.write(num, "<br/>");
  if (num === 10) return;
  testFnc();
}
testFnc();
//재귀함수
