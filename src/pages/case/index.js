import "../common/reset.css";
import "@/assets/global.less";
import "../common/header";
import "../components/crumbs";
import "../common/footer";
import "./index.less";
import Swiper from "swiper";
import {WOW} from "wowjs";

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
const sharingSwiper = new Swiper(".sharing-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  loop: true,
  navigation: {
    prevEl: ".sharing-swiper-button-prev",
    nextEl: ".sharing-swiper-button-next",
  },
  pagination:{
    el:".sharing-swiper-pagination",
    clickable:true
  }
});

$(".works-tab-item").on("click", function(){
  const index = $(this).index();
  $(this).addClass("on").siblings().removeClass("on");
  $(".works-item").eq(index).addClass("on").siblings().removeClass("on");
})