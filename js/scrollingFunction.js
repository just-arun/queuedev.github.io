const welcomeHeight = $('.welcome-screen').css('height');
const shit = welcomeHeight.replace('px', '');
const triger = parseFloat(shit) * 0.5;

// scroll effects staarts here
$(window).scroll(function () {
    const height = $(document).height();
    if (window.pageYOffset > triger) {
        $('.products-catogery').css({
            'opacity': 1,
            'transform': 'translateY(0px)'
        });
    } else {
        $('.products-catogery').css({
            'opacity': 0,
            'transform': 'translateY(100px)'
        });
    }
    if(window.pageYOffset < 100){
        $('.backButton').css('display','none');
    }
});

var lastScrollTop = 0;
$(window).scroll((e)=> {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
            $('.backButton').css({
                'transform': 'rotate(-90deg)',
                'display':'block',
                'opacity':'0'
            });
    } else {
        $('.backButton').css({
            'transform': 'rotate(0deg)',
            'display':'block',
            'opacity':'1'
        });
    }
    lastScrollTop = st;
});