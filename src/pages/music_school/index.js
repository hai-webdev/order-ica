import "../common/reset.css";
import "@/assets/global.less";
import "../common/header";
import "../components/crumbs";
import "../common/footer";
import "./index.less";
import Swiper from "swiper";
const { lessonsList } = window;

const imgItemHeight = $(".img-item").height();
$(".text-item").on("mouseenter", function () {
  const index = $(this).index();
  $(this).addClass("on").siblings().removeClass("on");
  $(".img-list").css({
    transform: `translateY(-${index * imgItemHeight}px)`,
  });
});

const lessonsSwiper = new Swiper(".lessons-swiper", {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});
const vueLessons = new Vue({
  el: "#vue-lessons",
  data() {
    return {
      lessonsList,
      lessonsSwiper: null,
      swiperIndex: 0,
    };
  },
  mounted() {
    this.lessonsSwiper = this.mySwiper();
  },
  updated(){
    this.lessonsSwiper.slideTo(this.swiperIndex, 1000, false);
  },
  methods: {
    switchTo(index) {
      this.swiperIndex = index;
    },
    mySwiper() {
      const $this = this;
      return new Swiper(".lessons-swiper", {
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        initialSlide: $this.swiperIndex,
        on: {
          slideChangeTransitionStart: function () {
            $this.swiperIndex = this.activeIndex;
          },
        },
      });
    },
  },
});

const windowWidth = $(window).width();
isMobile();
function isMobile(){
  if(windowWidth < 768){
    $(".professional-td").unwrap()
  }
}