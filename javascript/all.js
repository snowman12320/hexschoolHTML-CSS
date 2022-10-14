$(document).ready(function () {
  $(".nav_dropdown").click(function (e) {
    e.preventDefault();
    $(".nav_dropdown").toggleClass("active");
    $(".nav_dropdown_open").slideToggle();
  });
});
