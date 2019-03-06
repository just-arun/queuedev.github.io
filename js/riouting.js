var scroolToTop = function () {
        window.scrollTo(0, 0)
    },
    RoutingLogic = function () {
        "" === window.location.hash || "#" === window.location.hash ? ($("#mainpage-wrapper").css("display", "block"), $("#Title").text("QueueDev"), scroolToTop()) : $("#mainpage-wrapper").css("display", "none"), "#static-webpage" === window.location.hash ? ($("#Title").text(staticWebpage.title), $("#staicWebpage").html(staticWebpage.body), $("#staicWebpage").css({
            display: "block",
            opacity: 1
        }), scroolToTop()) : ($("#staicWebpage").html(""), $("#staicWebpage").css({
            display: "none",
            opacity: 0
        })), "#dynamic-webpage" === window.location.hash ? ($("#Title").text(dynamicWebpage.title), $("#dynamicPage").html(dynamicWebpage.body), $("#dynamicPage").css({
            display: "block",
            opacity: 1
        }), scroolToTop()) : ($("#dynamicPage").html(""), $("#dynamicPage").css({
            display: "none",
            opacity: 0
        }))
    };
$(window).on("hashchange", function () {
    RoutingLogic()
}), $(document).ready(function () {
    RoutingLogic()
});