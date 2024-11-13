// import Swiper JS
import Swiper from "swiper/bundle";
// import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper styles
// import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/bundle";
// import { Autoplay } from "swiper/modules";
// Swiper.use(Autoplay);
let swipper1;
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

  const configswiper1 = {
    modules: [Pagination],
    pagination: {
      el: ".gallery-swiper__pagination",
      clickable: true,
      dinamicBullets: true,
    },

    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };

  const breakpoint = window.matchMedia("(max-width:768px)");
  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      // console.log(breakpoint.matches);
      const swipper1 = new Swiper("#gallery-swiper", configswiper1);
      return;
    } else if (breakpoint.matches === false) {
      // console.log(breakpoint.matches);
      if (swipper1 !== undefined) swipper1.destroy(true, true);
      return;
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}
export default swiperFunk;
