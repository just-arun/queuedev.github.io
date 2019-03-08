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

let remove_all_class = () =>{
    $('body').removeClass('linear-tneam');
    $('body').removeClass('theme-1');
    $('body').removeClass('theme-2');
    $('body').removeClass('theme-3');
    $('body').removeClass('theme-4');
    $('body').removeClass('theme-5');
    $('body').removeClass('theme-6');
    $('body').removeClass('theme-7');
    $('body').removeClass('theme-8');
    $('body').removeClass('theme-9');
    $('body').removeClass('theme-10');
    $('body').removeClass('theme-11');
    $('body').removeClass('theme-12');
    $('body').removeClass('theme-13');
    $('body').removeClass('theme-14');
    $('body').removeClass('theme-15');
}

$('.theam-btns').click((e)=>{
    let linear = $(e.target).hasClass('linear-tneam');
    let defaultPage = $(e.target).hasClass('default-theam');
    let them_2 = $(e.target).hasClass('linear-2-theam');
    let them_3 = $(e.target).hasClass('linear-3-theam');
    let them_4 = $(e.target).hasClass('linear-4-theam');
    let them_5 = $(e.target).hasClass('linear-5-theam');
    let them_6 = $(e.target).hasClass('linear-6-theam');
    let them_7 = $(e.target).hasClass('linear-7-theam');
    let them_8 = $(e.target).hasClass('linear-8-theam');
    let them_9 = $(e.target).hasClass('linear-9-theam');
    let them_10 = $(e.target).hasClass('linear-10-theam');
    let them_11 = $(e.target).hasClass('linear-11-theam');
    let them_12 = $(e.target).hasClass('linear-12-theam');
    let them_13 = $(e.target).hasClass('linear-13-theam');
    let them_14 = $(e.target).hasClass('linear-14-theam');
    let them_15 = $(e.target).hasClass('linear-15-theam');
    if (linear) {
        remove_all_class();
        $('body').addClass('theme-1');
    } else if(defaultPage){
        remove_all_class();
    } else if(them_2){
        remove_all_class();
        $('body').addClass('theme-2');
    } else if(them_3){
        remove_all_class();
        $('body').addClass('theme-3');
    } else if(them_4){
        remove_all_class();
        $('body').addClass('theme-4');
    } else if(them_5){
        remove_all_class();
        $('body').addClass('theme-5');
    } else if(them_6){
        remove_all_class();
        $('body').addClass('theme-6');
    } else if(them_7){
        remove_all_class();
        $('body').addClass('theme-7');
    } else if(them_8){
        remove_all_class();
        $('body').addClass('theme-8');
    } else if(them_9){
        remove_all_class();
        $('body').addClass('theme-9');
    } else if(them_10){
        remove_all_class();
        $('body').addClass('theme-10');
    } else if(them_11){
        remove_all_class();
        $('body').addClass('theme-11');
    } else if(them_12){
        remove_all_class();
        $('body').addClass('theme-12');
    } else if(them_13){
        remove_all_class();
        $('body').addClass('theme-13');
    } else if(them_14){
        remove_all_class();
        $('body').addClass('theme-14');
    } else if(them_15){
        remove_all_class();
        $('body').addClass('theme-15');
    }
});

