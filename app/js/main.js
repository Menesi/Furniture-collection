$(function () {

    $('.header-btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    })
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    })

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    })

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bedroom'
        }
    });

})


$(function () {
   $('.contact__slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
    });  
})