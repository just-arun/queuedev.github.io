

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
        $("#404page").css(dnone);
    } else {
        $("#404page").css(dblck);
        $("#404page").html(notFound.body);
    }
    // for Home page
    if (BAR === "" || BAR === "#") {
        $('#mainpage-wrapper').css(dblck);
        $('#Title').text('QueueDev');
        $('.backButton').css(dnone);
        scroolToTop();
    } else {
        $('#mainpage-wrapper').css(dnone);
        $('.backButton').css(dblck);
    }
    // for Contact page
    if (BAR === page1) {
        $('#Title').text(staticWebpage.title);
        $('#staicWebpage').html(staticWebpage.body);
        $('#staicWebpage').css(dblck);
        scroolToTop();
    } else {
        $('#staicWebpage').html('');
        $('#staicWebpage').css(dnone);
    }
    // for Dynamic Webpage
    if (BAR === page2) {
        $('#Title').text(dynamicWebpage.title);
        $('#dynamicPage').html(dynamicWebpage.body);
        $('#dynamicPage').css(dblck);
        scroolToTop();
    } else {
        $('#dynamicPage').html('');
        $('#dynamicPage').css(dnone);
    }
    if (BAR === page3) {
        $('#Title').text(eComercing.title);
        $("#ecomercingPage").css(dblck);
        $('#ecomercingPage').html(eComercing.body)
        scroolToTop();
    } else {
        $('#ecomercingPage').html();
        $("#ecomercingPage").css(dnone);
    }







    // components
    // simple static page
    if(BAR === SimpleStatic) {
        $('#Title').text(simple_static_page.title);
        $('#componentPage').css(dblck);
        $('#componentPage').html(simple_static_page.body);
    } else if(BAR === StaticPortfolio) {
        $('#Title').text(Static_portfolio.title);
        $('#componentPage').css(dblck);
        $('#componentPage').html(Static_portfolio.body);
    } else if(BAR === StaticTemplate){
        $('#Title').text(static_templates.title);
        $('#componentPage').css(dblck);
        $('#componentPage').html(static_templates.body);
    } else if(BAR === StaticSinglePageApplication){
        $('#Title').text(staticSPA.title);
        $('#componentPage').css(dblck);
        $('#componentPage').html(staticSPA.body);
    } else if(BAR === ScrollingEffect){
        $('#Title').text(Scrolling_effect.title);
        $('#componentPage').css(dblck);
        $('#componentPage').html(Scrolling_effect.body);
    } else if(BAR === ContactForm){
        $('#Title').text(contact_form.title);
        $('#componentPage').css(dblck);
        $('#componentPage').html(contact_form.body);
    } else if(BAR === MobileAppLook){
        $('#Title').text(Mobile_feel_look.title);
        $('#componentPage').css(dblck);
        $('#componentPage').html(Mobile_feel_look.body);
    }
    else {
        $('#componentPage').css(dnone);
        $('#componentPage').html('');
    }

}


$(window).on('hashchange', function() {
    RoutingLogic();
    $('.backButton').css('display','none');
});

$(document).ready(function(){
    RoutingLogic();
    $('.backButton').css('display','none');
});
