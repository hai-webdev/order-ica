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

$(".professional-banner .tab-list li").on("click", function() {
  const index = $(this).index();
  $(this).addClass("on").siblings().removeClass("on");
  $(".professional-banner .tab-content-item").eq(index).addClass("on").siblings().removeClass("on");
})


$(".top-institution .tab-list a").on("click", function() {
  const index = $(this).index();
  $(this).addClass("current").siblings().removeClass("current");
  $(".top-institution .tab-content-item").eq(index).addClass("current").siblings().removeClass("current");
})

$(".institutions-container .institutions-tab-item").on("click", function() {
    const index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".institutions-content-item").eq(index).addClass("on").siblings().removeClass("on");
  })