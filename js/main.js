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
    // toolbarEnabled: true
    $('.dropdown-trigger').dropdown();
});


$('.sidenav li').click(() => {
    $('.sidenav').sidenav('close');
});


$('.default-theam').click(function () { 
    $('body').removeClass('theme-1');
    $('.modal').modal('theam-model',dismissible);
});

$('.linear-tneam').click(()=>{
    $('body').addClass('theme-1');
    $('.modal').modal('theam-model',dismissible);
})


