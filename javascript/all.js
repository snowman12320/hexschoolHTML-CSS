$(document).ready(function () {
  // active
  $(".menu").on("click", "a", function () {
    $(this)
      .addClass("active")
      //   父層的
      .parent()
      //   同層的
      .siblings()
      //   子層的
      .find("a")
      .removeClass("active");
    //   關閉父層的 同層的 子層的
    $(this).parent().siblings().find(".nav_dropdown_open").slideUp();
  });

  // 下拉
  $(".nav_dropdown").click(function (e) {
    e.preventDefault();
    $(".nav_dropdown").toggleClass("active");
    // 使用壓縮最大CDN會無法使用 使用第二大的CDN
    $(".nav_dropdown_open").slideToggle();
  });

  // 輪播
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 500,
    //Autoplay Parameters
    // autoplay: {
    //   delay: 2000,
    // },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //TOP
  $(".backAbove").click(function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 100);
  });
});
