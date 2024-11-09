// import Swiper JS
import Swiper from "swiper/bundle";
// import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import Swiper styles
// import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/bundle";

function swiperFunk() {
  const swiper = new Swiper(".section-projects__slider", {
    modules: [Navigation],
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //   425: {
    //     slidesPerView: 2,
    //     spaceBetween: 15,
    //   },
    //   696: {
    //     slidesPerView: 3,
    //     spaceBetween: 20,
    //   },
    //   898: {
    //     slidesPerView: 4,
    //     spaceBetween: 32,
    //   },
    // },
  });
}

export default swiperFunk;
