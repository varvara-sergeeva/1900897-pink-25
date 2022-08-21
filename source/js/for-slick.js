$(document).ready(function(){
  $('.slider-bottom').slick({
    prevArrow: '.review__arrow-prev',
    nextArrow: '.review__arrow-next',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    moduleFirst: true,
    responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });
  $('.slider-top').slick({
    prevArrow: '.doubt__arrow-prev',
    nextArrow: '.doubt__arrow-next',
    moduleFirst: true,
    settings: "unslick",

    responsive: [
    {
      breakpoint: 4000,
      settings: "unslick",
    },
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });
});
