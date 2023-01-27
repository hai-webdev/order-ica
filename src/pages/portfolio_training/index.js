import "../common/reset.css";
import "@/assets/global.less";
import "../common/header";
import "../components/crumbs";
import "../components/popup";
import "../common/footer";
import "./index.less";
import Swiper from "swiper";
import {
  WOW
} from "wowjs";
const successSwiper = new Swiper(".success-swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
  loop: true,
  navigation: {
    prevEl: ".success-swiper-button-prev",
    nextEl: ".success-swiper-button-next",
  },
  pagination:{
    el:".success-swiper-pagination",
    clickable:true
  }
});
$(".top-institution .tab-list a").on("click", function() {
  const index = $(this).index();
  $(this).addClass("on").siblings().removeClass("on");
  $(".tab-content-item").eq(index).addClass("on").siblings().removeClass("on");
})

$(".course-container .course-tab-item").on("click", function() {
    const index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".course-content-item").eq(index).addClass("on").siblings().removeClass("on");

  })

  $(".institutions-container .institutions-tab-item").on("click", function() {
    const index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".institutions-content-item").eq(index).addClass("on").siblings().removeClass("on");

  })