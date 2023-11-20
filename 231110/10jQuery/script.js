$(function () {
  let srcVal = $("#sec_1 img").attr("src");
  console.log(srcVal);

  $("#sec_1 img").attr({
    src: srcVal.replace("1.jpg", "2.jpg"),
    width: 200,
  });
});
