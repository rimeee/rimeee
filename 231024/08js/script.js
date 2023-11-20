let pointsize = $(".pointer").width();
$("#wrap").mousemove(function (e) {
  $(".pointer").css("top", e.pageY - pointsize);
  $(".pointer").css("left", e.pageX - pointsize);
  $(".pointer").fadeIn();
});

$("wrap").mouseleave(function () {
  $(".pointer").fadeOut();
});
