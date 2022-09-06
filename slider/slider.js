var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 0,
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
    0: {
        slidesPerView: 1,
    },
    520: {
        slidesPerView: 4,
    },
    950: {
        slidesPerView: 7,
    },
},
  });