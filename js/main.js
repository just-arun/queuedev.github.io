let welcomeHeight = $('.welcome-screen').css('height');

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.carousel').carousel({padding: 200});
    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
    $('.tabs').tabs();
});


$('.sidenav li').click(() => {
    $('.sidenav').sidenav('close');
});

console.log(welcomeHeight);


let shit = welcomeHeight.replace('px','');
let triger = parseFloat(shit) * 0.5
// scroll effects staarts here
$(window).scroll(function () {
    if (window.pageYOffset > triger) {
        $('.products-catogery').css({'opacity':1,'transform': 'translateY(0px)'});
    } else {
        $('.products-catogery').css({'opacity':0,'transform': 'translateY(100px)'});
    }
});