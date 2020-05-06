$('.slick-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});



const config = { 
  type: 'carousel',
  perView: 2
}
new Glide('.glide', config).mount()



var swiper = new Swiper('.swiper-container', {
  lazy: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
