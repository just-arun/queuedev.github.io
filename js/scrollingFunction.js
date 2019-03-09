// const welcomeHeight = $('.welcome-screen').css('height');
// const shit = welcomeHeight.replace('px', '');
// const triger = parseFloat(shit) * 0.5;
const productsCatogeryHeight = ($('.products-catogery').offset().top)-350;
const wig_1 = ($('.wig-1').offset().top)-700;
const wig_2 = ($('.wig-2').offset().top)-250;
const wig_3 = ($('.wig-3').offset().top)+300;
const wig_4 = ($('.wig-4').offset().top)+1000;
const wig_5 = ($('.wig-5').offset().top)+1800;
const wig_6 = ($('.wig-6').offset().top)+2600;
const wig_7 = ($('.wig-7').offset().top)+3200;


// scroll effects staarts here
$(window).scroll(function () {
    const ScT = window.pageYOffset;
    const height = $(document).height();
    console.log(ScT > wig_7);
    console.log(ScT + ' '+wig_7);
    
    // if (window.pageYOffset > triger) {
    //     $('.products-catogery').css({
    //         'opacity': 1,
    //         'transform': 'translateY(0px)'
    //     });
    // } else {
    //     $('.products-catogery').css({
    //         'opacity': 0,
    //         'transform': 'translateY(100px)'
    //     });
    // }
    if(ScT > productsCatogeryHeight){
        $('.products-catogery').css({
            'opacity': 1,
            'transform': 'translateY(0px)'
        });
    } else{
        $('.products-catogery').css({
            'opacity': 0,
            'transform': 'translateY(100px)'
        });
    }
    let construct = (widget,classes)=>{
        if(ScT > widget){
            $(classes).addClass('slideing-up');
        } else{
            $(classes).removeClass('slideing-up');
        }
    }
    construct(wig_1,'.wig-1');
    construct(wig_2,'.wig-2');
    construct(wig_3,'.wig-3');
    construct(wig_4,'.wig-4');
    construct(wig_5,'.wig-5');
    construct(wig_6,'.wig-6');
    construct(wig_7,'.wig-7');

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
            $('.backButton').fadeOut();
    } else {
        $('.backButton').css({
            'transform': 'rotate(0deg)',
            'display':'block',
            'opacity':'1'
        });
        $('.backButton').fadeIn();
    }
    lastScrollTop = st;
});