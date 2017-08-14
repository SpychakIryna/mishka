(function() {
  var header = document.querySelector(".page-header");
  var menuToggle = document.querySelector(".menu-toggle");

  header.classList.remove("no-js");

  menuToggle.addEventListener("click", function() {
    if (header.classList.contains("menu-opened")) {
      header.classList.remove("menu-opened");
    }
    else {
      header.classList.add("menu-opened");
    }
  });
})();
