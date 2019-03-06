let closeAllSide = ()=>{
    $('.mainpage-wrapper').css({'display':'block','opacity':'1'});
    $('#staicWebpage').css('display','none');
}




let forStaticPage = ()=>{
    $('.mainpage-wrapper').css({
        'opacity':'0',
        'display':'none'
    });
    $('#staicWebpage').css({
        'display':'block',
        'opacity':1
    });
    window.scrollTo(0,0);
}

$('.home-link').click((e)=>{
    closeAllSide();
});

$('.staaticpage-details').click(()=>{
    forStaticPage();
});