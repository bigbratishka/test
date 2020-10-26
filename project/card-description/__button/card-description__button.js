$(document).ready(function () {
    $('#card-creator-wrap').hide();
    $('#card-result-wrap').hide();

    $('.card-description__button').click(function () {
        $('#card-creator-wrap').fadeIn(600);
        $('.page-content').css({'overflow' : 'hidden'});
    });
    $('#card-creator-close').click(function () {
        $('#card-creator-wrap').fadeOut(300);
        $('.page-content').css({'overflow' : 'auto'});
    });
});
