const mySlider = (sliderName, nextBtn, prevBtn) => {
  const homeSwiper = new Swiper(sliderName, {

    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    }
  })
};

mySlider('.home-simproducts__swiper--hits', '.simproducts-hits__btn--right', '.simproducts-hits__btn--left');
mySlider('.home-simproducts__swiper--news', '.simproducts-news__btn--right', '.simproducts-news__btn--left');
mySlider('.home-simproducts__swiper--discount', '.simproducts-discount__btn--right', '.simproducts-discount__btn--left');
mySlider('.home-simproducts__swiper--similar', '.simproducts-similar__btn--right', '.simproducts-similar__btn--left');

const swiper = new Swiper('.home-header__swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.home-header_pagination',
    type: 'bullets',
    clickable: 'true',
  },
});