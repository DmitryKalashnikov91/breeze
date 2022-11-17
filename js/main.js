$(function () {
    let text = $('.intro__about');
    let logo = $('.intro__content img');
    let video = $('#bgvideo');

    text.fadeTo(0, 0);
    function showAbout() {
        text.fadeTo(2000, 1);
    }
    AOS.init();
    $(window).scroll(function () {});

    video[0].playbackRate = 0.6;

    let previousScroll = 0;
    $(window).scroll(() => {
        let currentScroll = $(this).scrollTop();
        if (currentScroll > previousScroll) {
            logo.fadeTo(220, 0, showAbout());
        } else {
            text.hide();
            logo.fadeTo(1000, 1);
        }
        return;
    });
});
