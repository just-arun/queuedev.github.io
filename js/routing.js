

// page links
const page1 = "#static-webpage";
const page2 = "#dynamic-webpage";
const page3 = "#e_comercing-webpage";

// sub links
const basicEcomercingPage = "#Basic-e-comercing-package";
const MediunEComercingPackage = "#Mediun-e-comercing-package";
const AdvanceDynamicPackage = "#Advance-e-comercing-package";
const eComercingTemplate = "#e-commerce-Template";
const ScrollingEffect = "#Scrolling-Effect";
const ContactForm = "#contact-form";
const LiveChating = "#Live-chating";
const MobileAppLook = "#Mobile-App-Look";
const SimpleStatic = "#Simple-Static-page";
const StaticPortfolio = "#Static-Portfolio";
const StaticTemplate = "#Static-Template";
const StaticSinglePageApplication = "#Static-Single-Page-Application";
const BasicDynamicPage = "#Basic-Dynamic-page";
const DynamicPortfolio = "#Dynamic-Portfolio";
const DynamicTemplate = "#Dynamic-Template";







const scroolToTop = ()=>{
    window.scrollTo(0,0);
}


$('.backButton').click(()=>{
    window.history.back();
});
$('#back-btn-triger').click(function (e) { 
    window.history.back();
    console.log('triger');
});





const RoutingLogic = ()=>{
    const BAR = window.location.hash;
    const dblck = {'display':'block'};
    const dnone = {'display':'none'}
    if (BAR === "" ||
        BAR === "#" ||
        BAR === page1 ||
        BAR === page2 ||
        BAR === page3 ||
        // normal links
        BAR === basicEcomercingPage ||
        BAR === MediunEComercingPackage ||
        BAR === AdvanceDynamicPackage ||
        BAR === eComercingTemplate ||
        BAR === ScrollingEffect ||
        BAR === ContactForm ||
        BAR === LiveChating ||
        BAR === MobileAppLook ||
        BAR === SimpleStatic ||
        BAR === StaticPortfolio ||
        BAR === StaticTemplate ||
        BAR === BasicDynamicPage ||
        BAR === DynamicPortfolio ||
        BAR === DynamicTemplate ||
        BAR === StaticSinglePageApplication
        ) {
        $("#404page").animate({right: '200px'},1000).fadeOut();
    } else {
        $("#404page").animate({right: '0px'}).fadeIn();
        $("#404page").html(notFound.body);
    }
    // for Home page
    if (BAR === "" || BAR === "#") {
        $('#mainpage-wrapper').animate({right: '0px'}).fadeIn();
        $(".main-page-Widgets").html(dashboard_widget.body);

        $('#Title').text('QueueDev');
        $('.backButton').fadeOut();
        scroolToTop();
    } else {
        $('#mainpage-wrapper').animate({right: '200px'},1000).fadeOut();
        $('.backButton').fadeIn();
    }
    // for Contact page
    if (BAR === page1) {
        $('#Title').text(staticWebpage.title);
        $('#staicWebpage').html(staticWebpage.body);
        $('#staicWebpage').animate({right: '0px'}).fadeIn();
        scroolToTop();
    } else {
        $('#staicWebpage').html('');
        $('#staicWebpage').animate({right: '200px'},1000).fadeOut();
    }
    // for Dynamic Webpage
    if (BAR === page2) {
        $('#Title').text(dynamicWebpage.title);
        $('#dynamicPage').html(dynamicWebpage.body);
        $('#dynamicPage').animate({right: '0px'}).fadeIn();
        scroolToTop();
    } else {
        $('#dynamicPage').html('');
        $('#dynamicPage').animate({right: '200px'},1000).fadeOut();
    }
    if (BAR === page3) {
        $('#Title').text(eComercing.title);
        $("#ecomercingPage").animate({right: '0px'}).fadeIn();
        $('#ecomercingPage').html(eComercing.body)
        scroolToTop();
    } else {
        $('#ecomercingPage').html();
        $("#ecomercingPage").animate({right: '200px'},1000).fadeOut();
    }







    // components
    // simple static page
    if(BAR === SimpleStatic) {
        $('#Title').text(simple_static_page.title);
        $('#componentPage').animate({right: '0px'}).fadeIn();
        $('#componentPage').html(simple_static_page.body);
        scroolToTop();
    } else if(BAR === StaticPortfolio) {
        $('#Title').text(Static_portfolio.title);
        $('#componentPage').animate({right: '0px'}).fadeIn();
        $('#componentPage').html(Static_portfolio.body);
        scroolToTop();
    } else if(BAR === StaticTemplate){
        $('#Title').text(static_templates.title);
        $('#componentPage').animate({right: '0px'}).fadeIn();
        $('#componentPage').html(static_templates.body);
        scroolToTop();
    } else if(BAR === StaticSinglePageApplication){
        $('#Title').text(staticSPA.title);
        $('#componentPage').animate({right: '0px'}).fadeIn();
        $('#componentPage').html(staticSPA.body);
        scroolToTop();
    } else if(BAR === ScrollingEffect){
        $('#Title').text(Scrolling_effect.title);
        $('#componentPage').animate({right: '0px'}).fadeIn();
        $('#componentPage').html(Scrolling_effect.body);
        scroolToTop();
    } else if(BAR === ContactForm){
        $('#Title').text(contact_form.title);
        $('#componentPage').animate({right: '0px'}).fadeIn();
        $('#componentPage').html(contact_form.body);
        scroolToTop();
    } else if(BAR === MobileAppLook){
        $('#Title').text(Mobile_feel_look.title);
        $('#componentPage').animate({right: '0px'}).fadeIn();
        $('#componentPage').html(Mobile_feel_look.body);
        scroolToTop();
    }
    else {
        $('#componentPage').animate({right: '200px'},1000).fadeOut();
        $('#componentPage').html('');
    }

}


$(window).on('hashchange', function() {
    RoutingLogic();
    $('.backButton').fadeOut();
});

$(document).ready(function(){
    RoutingLogic();
    $('.backButton').fadeOut();
});
