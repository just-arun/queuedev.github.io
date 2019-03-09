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
    $('.fixed-action-btn').floatingActionButton();
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

let remove_all_fonts = ()=>{
    $('body').removeClass('font-1');
    $('body').removeClass('font-2');
    $('body').removeClass('font-3');
    $('body').removeClass('font-4');
    $('body').removeClass('font-5');
    $('body').removeClass('font-6');
    $('body').removeClass('font-7');
    $('body').removeClass('font-8');
    $('body').removeClass('font-9');
    $('body').removeClass('font-10');
    $('body').removeClass('font-11');
    $('body').removeClass('font-12');
    $('body').removeClass('font-13');
    $('body').removeClass('font-14');
    $('body').removeClass('font-15');
    $('body').removeClass('font-16');
    $('body').removeClass('font-17');
    $('body').removeClass('font-18');
    $('body').removeClass('font-19');
    $('body').removeClass('font-20');
    $('body').removeClass('font-21');
    $('body').removeClass('font-22');
    $('body').removeClass('font-23');
    $('body').removeClass('font-24');
    $('body').removeClass('font-25');
    $('body').removeClass('font-26');
    $('body').removeClass('font-27');
    $('body').removeClass('font-28');
    $('body').removeClass('font-29');
    $('body').removeClass('font-30');
    $('body').removeClass('font-31');
}
let f_con = (font)=>{
    remove_all_fonts();
    $('body').addClass(font);
}

$('.font-Family').click((e)=>{
    let f1 = $(e.target).hasClass('font_1');
    let f2 = $(e.target).hasClass('font_2');
    let f3 = $(e.target).hasClass('font_3');
    let f4 = $(e.target).hasClass('font_4');
    let f5 = $(e.target).hasClass('font_5');
    let f6 = $(e.target).hasClass('font_6');
    let f7 = $(e.target).hasClass('font_7');
    let f8 = $(e.target).hasClass('font_8');
    let f9 = $(e.target).hasClass('font_9');
    let f10 = $(e.target).hasClass('font_10');
    let f11 = $(e.target).hasClass('font_11');
    let f12 = $(e.target).hasClass('font_12');
    let f13 = $(e.target).hasClass('font_13');
    let f14 = $(e.target).hasClass('font_14');
    let f15 = $(e.target).hasClass('font_15');
    let f16 = $(e.target).hasClass('font_16');
    let f17 = $(e.target).hasClass('font_17');
    let f18 = $(e.target).hasClass('font_18');
    let f19 = $(e.target).hasClass('font_19');
    let f20 = $(e.target).hasClass('font_20');
    let f21 = $(e.target).hasClass('font_21');
    let f22 = $(e.target).hasClass('font_22');
    let f23 = $(e.target).hasClass('font_23');
    let f24 = $(e.target).hasClass('font_24');
    let f25 = $(e.target).hasClass('font_25');
    let f26 = $(e.target).hasClass('font_26');
    let f27 = $(e.target).hasClass('font_27');
    let f28 = $(e.target).hasClass('font_28');
    let f29 = $(e.target).hasClass('font_29');
    let f30 = $(e.target).hasClass('font_30');
    let f31 = $(e.target).hasClass('font_31');
console.log($(e.target).hasClass());

    // switch(expression) {
    //     case x:
          
    //       break;
    //     case y:
          
    //       break;
    //     default:
          
    // }

    if (f1) {f_con('font-1')}
    else if (f2) {f_con('font-2')}
    else if (f3) {f_con('font-3')}
    else if (f4) {f_con('font-4')}
    else if (f5) {f_con('font-5')}
    else if (f6) {f_con('font-6')}
    else if (f7) {f_con('font-7')}
    else if (f8) {f_con('font-8')}
    else if (f9) {f_con('font-9')}
    else if (f10) {f_con('font-10')}
    else if (f11) {f_con('font-11')}
    else if (f12) {f_con('font-12')}
    else if (f13) {f_con('font-13')}
    else if (f14) {f_con('font-14')}
    else if (f15) {f_con('font-15')}
    else if (f16) {f_con('font-16')}
    else if (f17) {f_con('font-17')}
    else if (f18) {f_con('font-18')}
    else if (f19) {f_con('font-19')}
    else if (f20) {f_con('font-20')}
    else if (f21) {f_con('font-21')}
    else if (f22) {f_con('font-22')}
    else if (f23) {f_con('font-23')}
    else if (f24) {f_con('font-24')}
    else if (f25) {f_con('font-25')}
    else if (f26) {f_con('font-26')}
    else if (f27) {f_con('font-27')}
    else if (f28) {f_con('font-28')}
    else if (f29) {f_con('font-29')}
    else if (f30) {f_con('font-30')}
    else if (f31) {f_con('font-31')}
    else{remove_all_fonts()}
});

let get_size = () => { 
    console.log($('#H-S').val());
};