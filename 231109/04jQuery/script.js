//제이쿼리 선택자
//직접선택자 & 인접선택자
//탐색선택자
//1)위치탐색선택자
//$(요소선택자:first) : 요소 선택자에서 첫 번째 요소를 가져오는 것
//$(요소선택자:last) : 요소 선택자에서 마지막 번째 요소를 가져오는 것
//$(요소선택자:odd) : 요소 선택자에서 홀수번째 요소를 가져오는 것
//$(요소선택자:even) : 요소 선택자에서 짝수번째 요소를 가져오는 것
//$(요소선택자:first-of-type) : 요소 선택자 무리 중에서 첫 번째 요소를 가져오는 것
//$(요소선택자:last-of-type) : 요소 선택자 무리 중에서 마지막 번째 요소를 가져오는 것
//$(요소선택자:nth-child(숫자)) : 요소 선택자 무리 중에서 특정 순서 요소를 가져오는 것
//$(요소선택자:nth-child(숫자n)) : 요소 선택자 무리 중에서 해당 숫자의 배수 요소를 가져오는 것
//$(요소선택자:nth-last-of-child(숫자)) : 요소 선택자 무리 중에서 마지막 위치를 기준으로 해당 숫자 번째 요소를 가져오는 것
//$(요소선택자:only-child) : 부모 요소 중에서 요소가 1개뿐인 요소를 가져오는 것
//$(요소선택자:eq(인덱스번호)) : 요소 선택자 중에서 인덱스 번호를 가지고 있는 요소를 가져오는 것
//$(요소선택자:gt(인덱스번호)) : 요소 선택자 중에서 해당 인덱스보다 큰 인덱스 요소를 가져오는 것
//$(요소선택자:lt(인덱스번호)) : 요소 선택자 중에서 해당 인덱스보다 작은 인덱스 요소를 가져오는 것
//$(요소선택자:slice(인덱스번호)) : 요소 선택자 중에서 해당 인덱스번호부터 참조하는 요소를 가져오는 것

$(function () {
  //   $("#menu li:first").css({
  //     background: "#ff0",
  //   });
  //   $("#menu li:last").css({
  //     background: "#0ff",
  //   });
  // $("#menu li:even").css({
  //   background: "#ff0",
  // });
  // $("#menu li:odd").css({
  //   background: "#0ff",
  // });
  $("#menu li").eq(2).css({
    background: "#ff0",
  });
  $("#menu li:gt(2)").css({
    background: "#0ff",
  });
});