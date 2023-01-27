import "../common/reset.css";
import "@/assets/global.less";
import "../common/header";
import "../common/footer";
import "../components/crumbs";
import "./index.less";

import Swiper from 'swiper';

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 8,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        400: {
		    slidesPerView: 4,
		},
		768: {
		    slidesPerView: 4,
		},
		1024: {
		    slidesPerView: 8,
		},
        1600: {
		    slidesPerView: 8,
		}
	},
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});