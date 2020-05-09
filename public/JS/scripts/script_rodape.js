$(document).ready(() => {
    if ($(document).height() <= $(window).height()) {
        $('#footer').css('position', 'absolute');
        $('#footer').css('bottom', 0);
        $('#footer').css('width', '100%');
    } else {
        $('#footer').css('position', 'relative');
        $('#footer').css('bottom', 0);
        $('#footer').css('width', '100%');
    }
});


$(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(100).fadeOut('slow');
    $('body').delay(250).css({
        'overflow': 'visible'
    });
})


setInterval(
    function () {
        if ($(document).height() <= $(window).height()) {
            $('#footer').css('position', 'absolute');
            $('#footer').css('bottom', 0);
            $('#footer').css('width', '100%');
        } else {
            $('#footer').css('position', 'relative');
            $('#footer').css('bottom', 0);
            $('#footer').css('width', '100%');
        }
    }, 300);
