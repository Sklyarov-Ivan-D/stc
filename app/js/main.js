$('.single__slider').slick({
    dots:true,
    arrows:true,
    prevArrow: "<img src='../images/firstslider/Arrowleft.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../images/firstslider/ArrowRight.svg' class='next' alt='2'>",
});
    $(".slick-arrow").on('click', function(event){
        $(this).addClass('arrow_red');
        }); 
$('.two__slider-wrap').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<img src='../images/twoSlider/left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../images/twoSlider/right.svg' class='next' alt='2'>",
});
$('.media__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false
    });