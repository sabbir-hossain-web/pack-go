$('.popular_slide').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  centerMode: true,
  centerPadding: 0
});
$('.counter').counterUp({
  delay: 10,
  time: 1000
});