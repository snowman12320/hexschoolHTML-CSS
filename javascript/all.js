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

  // visited
  $(".menu").on("click", "a", function () {
    $(this).addClass("visited");
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
    speed: 500,
    // 表單部分建議可以將其從 swiper 移出(自動輪播在填寫時會很不方便)，或是設置點擊停止自動輪播。
    // e.g. JavaScript 取消 loop，改使用 autoplay
    // loop: false, //迴圈取消 可能自動撥較適合
    autoplay: {
      delay: 2000,
      // 填寫時暫停
      disableOnInteraction: true,
    },

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

  // // 大燈箱
  // 本身是a標籤 把卡片外框的樣式放到a標籤就可以整塊連結
  // $(".img_content").click(function () {
  //   $(".example-image-link").show();
  // });

  //TOP
  function showBtnCondition() {
    if ($(this).scrollTop() > 300) {
      $(".backAbove").fadeIn();
    } else {
      $(".backAbove").fadeOut();
    }
  }
  $(window).scroll(showBtnCondition);

  $(".backAbove").click(function (e) {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });
});
