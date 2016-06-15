$(window).resize(function () { sizeElements(); });

$(document).ready(sizeElements());

function sizeElements() {
    var uniwin = {
        width: window.innerWidth || document.documentElement.clientWidth
            || document.body.offsetWidth,
        height: window.innerHeight || document.documentElement.clientHeight
            || document.body.offsetHeight
    };

    var bannerWrapperHeight = uniwin.height * .65;
    $(".section-banner").height(bannerWrapperHeight);
    if(uniwin.width > 800) {
        $(".logo").width(uniwin.width * .4);
    } else {
        $(".logo").width(uniwin.width * .9);
    }
    $(".logo").css("margin-top", $(".section-banner").height() * .30);
    $(".logo").css("margin-left", ($(".section-banner").width() / 2) - ($(".logo").width() / 2));
    var projectWrapperWidth = $(".project").width();
    $(".statsone-logo").width(projectWrapperWidth);

    var statsOneLogoHeight = $(".statsone-logo").height();
    $(".doglogbook-logo").height(statsOneLogoHeight);

    $(".google-map").width($(".google-map-wrapper").width());
}