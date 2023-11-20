$(function () {
  $("#main_navigaition").click(function () {
    let target = $(this).attr("data-target");
    $(`:not([data-name = ${target}])`).removeClass("active");
    $(`[data-name = ${target}]`).addClass("active");
  });
});
