window.onload = function () {
  $("#c").on("click", function () {
    window.location.href = "/"
  })
  $(".navlink").on("click", function () {
    const go = $(this).html()
    switch (go) {
      case "About Us":
        window.location.href = "./about.html"
        break;
      case "News":
        window.location.href = "./news.html"
        break;
      case "Members":
        window.location.href = "./members.html"
        break;
      case "Auditions":
        window.location.href = "./auditions.html"
        break;
      case "Patrons":
        window.location.href = "./patrons.html"
        break;

    }

  })
  $("#mbar").click(function () {
    $("#menu").css("display", "block")
    $("#menulinks").css("display", "flex")
    $("#mx").css("display", "block")

    $("#menu").animate({
      width: 200,
      opacity: 1,
    }, 500, function () {
      $("#menulinks").animate({
        opacity: 1
      }, 300)
    })
    $("#mx").animate({
      opacity: 1,
    }, 500)
  })
  $("#mx").click(function () {
    $("#menulinks").animate({
      opacity: 0
    }, 100, function () {
      $("#menu").animate({
        width: 0,
        opacity: 0,
      }, 400)
      $("#mx").animate({
        opacity: 0,
      }, 400, function () {
        $("#menu").css("display", "none")
        $("#menulinks").css("display", "none")
      })
    })


  })

}
