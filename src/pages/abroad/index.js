import "../common/reset.css";
import "@/assets/global.less";
import "../common/header";
import "../components/crumbs";
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
$(".analysis-container .analysis-tab-item").on("click", function() {
  const index = $(this).index();
  $(this).addClass("on").siblings().removeClass("on");
  $(".analysis-content-item").eq(index).addClass("on").siblings().removeClass("on");
})

$(".requirements-container .requirements-tab-item").on("click", function() {
  const index = $(this).index();
  $(this).addClass("on").siblings().removeClass("on");
  $(".requirements-content-item").eq(index).addClass("on").siblings().removeClass("on");
})
$(".customized-container .customized-tab-item").on("click", function() {
    const index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".customized-content-item").eq(index).addClass("on").siblings().removeClass("on");
  })