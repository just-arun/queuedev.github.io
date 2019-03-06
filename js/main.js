// utelity materialize function

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.carousel').carousel({padding: 200});
    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
    $('.tabs').tabs();
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
});


$('.sidenav li').click(() => {
    $('.sidenav').sidenav('close');
});

