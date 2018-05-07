$(function() {
   $(".explode").click(function(){
    $("#title").effect("explode",{pieces:16},2000);
  });
}); 

$(function() {
$("p").click(
  function(){
    $(this).toggleClass("highlight");
  });
}); 