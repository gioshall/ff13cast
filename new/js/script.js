$('.video-play').click(function(){
    $('body').addClass('blur-bg');
    $('.tvcm').addClass('show');
    $('.cm-box iframe').attr('src','https://www.youtube.com/embed/wA5-hsRLgHk?autoplay=1&showinfo=0&rel=0&controls=0');
});
$('.tvcm').click(function(){
    $('body').removeClass('blur-bg');
    $('.tvcm').removeClass('show');
    $('.cm-box iframe').attr('src','');
})