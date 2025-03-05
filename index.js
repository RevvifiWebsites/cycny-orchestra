window.onload = function () {
  $("#c").on("click", function () {
    window.location.href = "/"
  })
  $(".navlink").on("click", function () {
    const go = $(this).html()
    switch (go) {
      case "About Us":
        window.location.href = "/about.html"
        break;
      case "News":
        window.location.href = "/news.html"
        break;
      case "Members":
        window.location.href = "/members.html"
        break;
      case "Auditions":
        window.location.href = "/auditions.html"
        break;
      case "Patrons":
        window.location.href = "/patrons.html"
        break;

    }

  })
}