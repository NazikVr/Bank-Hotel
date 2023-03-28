let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: "swiper-pagination",
  },
  loop: true,
  mousewhell: true,
  keyboard: true,

  // autoplay: {
  //   delay: 3000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: false,
  // },

  speed: 1000,
  spaceBetween: 0,
});


$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    variableWidth: true,
    slidesToShow: 1,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        }
      }
    ]
  });
});
