$(function () {
    var text = $('.intro__about');
    text.fadeTo(0, 0);
    function showAbout() {
        text.fadeTo(2000, 1);
    }

    $(window).scroll(function () {
        $('.intro__content img').fadeTo(800, 0, showAbout());
    });
});
