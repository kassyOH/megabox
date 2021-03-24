// 최신영화 슬라이더 개체
const swiper05 = new Swiper('.swiper-container05',{
  slidesPerView: 1.5,
  spaceBetween: 20,
  observeParents:true,
  observer:true,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 4.2,
    },
  }
});