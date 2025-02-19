window.onload = function() {
  $(".bioopen").click(function() {
    const display = ($("#" + $(this).attr("caction")).css("display"));
    console.log("je")
    if (display == "none") {
      $(this).html("Hide Biography")
      $("#" + $(this).attr("caction")).css('opacity', 0);
      $("#" + $(this).attr("caction")).show();
      $("#" + $(this).attr("caction")).animate({
        opacity:1,
      }, 500)

    } else {
      $("#" + $(this).attr("caction")).css("display", "none");
      $(this).html("Show Biography")

      // $("#" + $(this).attr("caction")).animate({
      //   opacity: 0,
      // }, 500, function() {
      //   console.log('ea')
      // })


    }
  })
}