let scroolToTop = ()=>{
    window.scrollTo(0,0);
}
let RoutingLogic = ()=>{
    // for Home page
    if (window.location.hash === "" || window.location.hash === "#") {
        $('#mainpage-wrapper').css('display','block');
        $('#Title').text('QueueDev');
        scroolToTop();
    } else {
        $('#mainpage-wrapper').css('display','none');
    }
    // for Contact page
    if (window.location.hash === "#static-webpage") {
        $('#Title').text(staticWebpage.title);
        $('#staicWebpage').html(staticWebpage.body);
        $('#staicWebpage').css({
            'display':'block',
            'opacity':1
        });
        scroolToTop();
    } else {
        $('#staicWebpage').html('');
        $('#staicWebpage').css({
            'display':'none',
            'opacity':0
        });
    }
    // for Dynamic Webpage
    if (window.location.hash === "#dynamic-webpage") {
        $('#Title').text(dynamicWebpage.title);
        $('#dynamicPage').html(dynamicWebpage.body);
        $('#dynamicPage').css({
            'display':'block',
            'opacity':1
        });
        scroolToTop();
    } else {
        $('#dynamicPage').html('');
        $('#dynamicPage').css({
            'display':'none',
            'opacity':0
        });
    }
}


$(window).on('hashchange', function() {
    RoutingLogic();
});

$(document).ready(function(){
    RoutingLogic();
});
