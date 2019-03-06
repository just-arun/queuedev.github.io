let welcomeHeight = $('.welcome-screen').css('height');
let shit = welcomeHeight.replace('px','');
let triger = parseFloat(shit) * 0.5;

// scroll effects staarts here
$(window).scroll(function () {
    let height = $(document).height();
    if (window.pageYOffset > triger) {
        $('.products-catogery').css({'opacity':1,'transform': 'translateY(0px)'});
    } else {
        $('.products-catogery').css({'opacity':0,'transform': 'translateY(100px)'});
    }
});
