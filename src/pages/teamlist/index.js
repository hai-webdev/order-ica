import "../common/reset.css";
import "@/assets/global.less";
import "../common/header";
import "../common/footer";
import "./index.less";
import "../components/crumbs";

$(".team-tab-item").on("click", function () {
    const index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".team-content-item").eq(index).addClass("on").siblings().removeClass("on");
    $(".team-content-item.on .team-item").eq(0).addClass("on").siblings().removeClass("on");
    $(".team-info-list").css({
      transform:"translateY(0)"
    })
  
  });
  
  const itemHeight = $(".team-info-item").height();
  $(".team-item").on("mouseenter", function () {
    $(this).addClass("on").siblings().removeClass("on");
    const index = $(this).data("index");
    $(".team-info-list").css({
      transform:`translateY(-${index * itemHeight}px)`
    })
  });


import Swiper from 'swiper';

// var swiper1 = new Swiper(".team-foreign-container .mySwiper", {
//     slidesPerView: "auto",
//     spaceBetween: 5,
//     pagination: {
//         el: ".team-foreign-container .swiper-pagination",
//         clickable: true,
//     },
// });

$(".team-foreign-container .group1 .team-tab-item").on("click", function () {
    const index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".team-foreign-container .group-content1 .team-content-list").eq(index).addClass("on").siblings().removeClass("on");
});

$(".team-foreign-container .group2 .team-tab-item").on("click", function () {
    const index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".team-foreign-container .group-content2 .team-content-list").eq(index).addClass("on").siblings().removeClass("on");
});