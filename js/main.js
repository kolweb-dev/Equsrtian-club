$(function () {
  
    $('.reviews-slider_inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='../images/prev-arrow.svg' class='slick-prev'>",
        nextArrow: "<img src='../images/prev-arrow.svg' class='slick-next'>",
        responsive: [
            {
              breakpoint: 1177,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow:false,
                nextArrow:false
              }
            }]
    });
    $('.menu-mobile').on('click',function(e){
        e.preventDefault();
        $('.menu-mobile__btn').toggleClass('menu-mobile__active')
        $('.menu__list').toggleClass('menu-mobile__active')
        $('body').toggleClass('lock');
    });//для добавления класа
    
    $('.menu__list-link').on('click',function(){
      $('.menu__list').removeClass('menu-mobile__active')
      $('.menu-mobile__btn').removeClass('menu-mobile__active')
      $('body').removeClass('lock')
    });

    new WOW().init();

});
const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors){
  anchor.addEventListener("click", function(event){
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior:"smooth",
      block:"start"
    })
  })
}

  