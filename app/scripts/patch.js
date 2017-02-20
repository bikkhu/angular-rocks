function toggle_active(){
  $(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
  });
}
toggle_active();