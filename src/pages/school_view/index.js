import "../common/reset.css";
import "@/assets/global.less";
import "../common/header";
import "../components/crumbs";
import "../common/footer";
import "./index.less";
import Swiper from "swiper";
const successSwiper = new Swiper(".success-swiper", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  navigation: {
    prevEl: ".success-swiper-button-prev",
    nextEl: ".success-swiper-button-next",
  },
});
const sharingSwiper = new Swiper(".sharing-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    prevEl: ".sharing-swiper-button-prev",
    nextEl: ".sharing-swiper-button-next",
  },
});
const schoolSwiper = new Swiper(".school-swiper", {
  loop: true,
  navigation: {
    prevEl: ".school-swiper-button-prev",
    nextEl: ".school-swiper-button-next",
  },
});
const specializedSwiper = new Swiper(".specialized-swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints:{
    768:{
      slidesPerView: 4,
  spaceBetween: 20,
    }
  }
});

$(".cont-tab-item").on("mouseenter", function(){
  const index = $(this).index();
  $(this).addClass("on").siblings().removeClass("on");
  $(".cont-item").eq(index).addClass("on").siblings().removeClass("on");

})