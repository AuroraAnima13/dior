const swiperTop = new Swiper(".swiper__top", {
  effect: "fade",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
})

const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
})

let accordeonItems = document.querySelectorAll(".accordeon__item")
accordeonItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("accordeon__item-active")
  })
})
