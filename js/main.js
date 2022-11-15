$(function () {
    var text = $('.intro__about');
    text.fadeTo(0, 0);
    function showAbout() {
        text.fadeTo(4000, 1);
    }
    $(window).scroll(function () {
        $('.intro__content').slideUp(2000, showAbout());
    });
});
