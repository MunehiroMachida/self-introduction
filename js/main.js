$(function () {
    $("#slider").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        dots: true,
        fade: true
    });
});


// ページ遷移
$('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
});


$(function () {
    $('.btn-gNav').on("click", function () {
        $('#gNav').animate({ 'height': 'toggle' });
    });

});
