import "swiper/css/swiper.min.css";
import "wowjs/css/libs/animate.css";
import "./index.less";

import { WOW } from "wowjs";

new WOW().init();

// $(".nav-item").hover(function(){
//   $(this).find(".sub-wrapper").addClass("on");
// }, function(){
//   $(this).find(".sub-wrapper").removeClass("on");
// })

// let navLoading = [];
// for (let i = 0; i < $(".pc-header .nav-item").length; i++) {
//   navLoading[i] = false;
// }
// $(".nav-item > a").on("mouseenter", function () {
//   const isSublist = $(this).parents(".nav-item").find(".sub-wrapper");
//   const index = $(this).parents(".nav-item").index();
//   if (navLoading[index] && !isSublist.length) {
//     return;
//   }
//   for (let i = 0; i < $(".pc-header .nav-item").length; i++) {
//     if(index !== i){
//       navLoading[i] = false;
//       $(".nav-item").eq(i).find(".sub-wrapper").slideUp();
//     }
//   }
//   navLoading[index] = true;
//   $(this)
//     .parents(".nav-item")
//     .find(".sub-wrapper")
//     .slideDown(function () {
//       navLoading[index] = false;

//     });
// });

// $(".nav-item .sub-wrapper").on("mouseleave", function () {
//   const index = $(this).parents(".nav-item").index();
//   if (navLoading[index]) {
//     return;
//   }
//   navLoading[index] = true;
//   $(this).slideUp(() => {
//     navLoading[index] = false;
//   });
// });

// 手机端

$(".menu-btn").on("click", () => {
  $(".nav-container").slideDown();
});
$(".menu-close").on("click", () => {
  $(".nav-container").slideUp();
});

$(".m-header .nav-item .cn-title").on("click", function () {
  $(this).next(".sublist").slideToggle();
  const isScroll = $(".nav-wrapper").hasClass("scroll");
  if (isScroll) {
    $(".nav-wrapper").removeClass("scroll");
  } else {
    setTimeout(function(){
      $(".nav-wrapper").addClass("scroll");
    }, 600)
  }
});
