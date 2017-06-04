$(document).ready(function() {
  $("h4").hover(function (){
    $(this).toggleClass("title_hover");
  })
  $("a").css("color", "black")
  $("a").css("text-decoration", "none")
  $(".progress").hover(function (){
    $(this).toggleClass("progress_hover");
  })
})