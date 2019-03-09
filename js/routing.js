

// page links
const page1 = "#static-webpage";
const page2 = "#dynamic-webpage";
const page3 = "#e_comercing-webpage";
const About = "#about-Queuedev"
const Help = "#Help-Queuedev"

// sub links
const basicEcomercingPage = "#Basic-e-comercing-package";
const MediunEComercingPackage = "#Mediun-e-comercing-package";
const AdvanceEcomercingPackage = "#Advance-e-comercing-package";
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
    const dnone = {'display':'none'};
    const AnimateTop = {'top':'0px','opacity':1};
    if (BAR === "" ||
        BAR === "#" ||
        BAR === page1 ||
        BAR === page2 ||
        BAR === page3 ||
        // normal links
        BAR === basicEcomercingPage ||
        BAR === MediunEComercingPackage ||
        BAR === AdvanceEcomercingPackage ||
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
        BAR === About ||
        BAR === Help ||
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
        $('.wig-1').html(()=>{return static_templates.body});
        $('.wig-2').html(()=>{return staticSPA.body});
        $('.wig-3').html(()=>{return Mobile_feel_look.body});
        $('.wig-4').html(()=>{return Static_portfolio.body});
        $('.wig-5').html(()=>{return simple_static_page.body});
        $('.wig-6').html(()=>{return contact_form.body});
        $('.wig-7').html(()=>{return Scrolling_effect.body});

        $('#Title').text('QueueDev');
        $('.backButton').css(dnone);
        scroolToTop();
    } else {
        $('#mainpage-wrapper').animate({right: '200px'},1000).fadeOut();
        $('.backButton').fadeIn();
    }
    // for Static page
    if (BAR === page1) {
        $('#Title').text(staticWebpage.title);
        $('#staicWebpage').html(()=>{ return staticWebpage.body});
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
    // ecomercing page
    if (BAR === page3) {
        $('#Title').text(eComercing.title);
        $("#ecomercingPage").animate({right: '0px'}).fadeIn();
        $('#ecomercingPage').html(eComercing.body)
        scroolToTop();
    } else {
        $('#ecomercingPage').html('');
        $("#ecomercingPage").animate({right: '200px'},1000).fadeOut();
    }
    // about page
    if (BAR === About) {
        $('#Title').text('About');
        $("#AboutPage").animate({right: '0px'}).fadeIn();
        $('#AboutPage').html((i,text)=>{
            return `
                <div>
                    <h5 class="center">About</h5>
                    <p>
                        Queuedev is an organisation created by arun.
                        this organisation is created to deliver the cutting edge technolodgy to your 
                        customer at an resonabel price. the web developing fieald is constantly evolbing and
                        if one has to survive in this field the they have to keep up with the change so our team
                        at queuedev have earned knowledge on all the cutting edge technodgies 
                        our team has mastered more than a dozen languages to be compatabel in this field
                        languages such as <b>nodeJS</b> are relatively new on this field and can be used more than on web developing
                        it can also send data to mobile or desktop applications so we have ensuring the future proof ness of
                        our product and for database we use <b>mongoDB</b> which is highly scalable and can perfoem complex task with ease
                        for our large scale web app we use <b>Vue.JS</b> and <b>AngularJS</b> so that the application perform well and
                        produce reactively <br> 
                        we are proud to say that we can even produce an SPA(singal page application) without the nead of an framework 
                        and it could run even without an server which means we could host an SPA application on GitHub.
                        
                        this ahows our deap understanding of the language which we are working with.

                        even this website is SPA it could loade pages without the need to refresh the browser.

                    </p>
                    <h6>Developement</h6>
                    <p>
                        as like any other company we are constantly evolvung and wants to make new acheivements
                        so we started to enter app developement with Flutter(click <a href="https://flutter.dev/" target="_blank"><b>here</b></a> to learn more)
                        and test the consupts on developng sample apps of android later we will develope the same app for Ios within few weaks time.
                    </p>
                    <br>
                    <br>
                </div>
            `
        });
        scroolToTop();
    } else {
        $('#AboutPage').html('');
        $("#AboutPage").animate({right: '200px'},1000).fadeOut();
    }
    // about page
    if (BAR === Help) {
        $('#Title').text('Help!!');
        $("#HelpPage").animate({right: '0px'}).fadeIn();
        $('#HelpPage').html((i,text)=>{
            return `
                <div>
                    <h5 class="center">Help</h5>
                    <p>
                        please <a class="modal-trigger btn-flat" href="#contact-model">click here</a> and choose any one of the services and place your questions here
                        and reply will be delivered soon...
                    </p>
                </div>
            `
        });
        scroolToTop();
    } else {
        $('#HelpPage').html('');
        $("#HelpPage").animate({right: '200px'},1000).fadeOut();
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
    } else if(BAR === BasicDynamicPage){
        $('#Title').text(basic_dynamic_page.title);
        $('#componentPage').animate({right: '0px'}).fadeIn();
        $('#componentPage').html(basic_dynamic_page.body);
        scroolToTop();
    } else if(BAR === DynamicPortfolio){
        $('#Title').text(dynamic_portfolio.title);
        $('#componentPage').animate({right: '0px'}).fadeIn();
        $('#componentPage').html(dynamic_portfolio.body);
        scroolToTop();
    } else if(BAR === DynamicTemplate){
        $('#Title').text(dynamic_template.title);
        $('#componentPage').animate({right: '0px'}).fadeIn();
        $('#componentPage').html(dynamic_template.body);
        scroolToTop();
    } else if(BAR === LiveChating){
        $('#Title').text(live_chating.title);
        $('#componentPage').animate({right: '0px'}).fadeIn();
        $('#componentPage').html(live_chating.body);
        scroolToTop();
    } else if(BAR === basicEcomercingPage){
        $('#Title').text(basic_ecomercing_page.title);
        $('#componentPage').animate({right: '0px'}).fadeIn();
        $('#componentPage').html(basic_ecomercing_page.body);
        scroolToTop();
    } else if(BAR === MediunEComercingPackage){
        $('#Title').text(medium_ecomercing_package.title);
        $('#componentPage').animate({right: '0px'}).fadeIn();
        $('#componentPage').html(medium_ecomercing_package.body);
        scroolToTop();
    } else if(BAR === AdvanceEcomercingPackage){
        $('#Title').text(advance_ecomercing_website.title);
        $('#componentPage').animate({right: '0px'}).fadeIn();
        $('#componentPage').html(advance_ecomercing_website.body);
        scroolToTop();
    } else {
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

