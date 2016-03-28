

function mainBG() {
	var wh = $(window).height();
	var ww = $(window).width();
	if( ( wh / ww ) > 0.625) {
		$('.main-bg').css('background-size','auto 100%')
	} else {
		$('.main-bg').attr('style','')
	}
}

function closeBox() {
	$('body').removeClass('blur-bg');
    $('.tvcm').removeClass('show');
    $('.cm-box iframe').attr('src','');
};

// video

// $('.video-play').click(function(){
//     $('body').addClass('blur-bg');
//     $('.tvcm').addClass('show');
//     $('.cm-box iframe').attr('src','https://www.youtube.com/embed/wA5-hsRLgHk?autoplay=1&showinfo=0&rel=0&controls=0');
// });
// $('.tvcm').click(function(){
//     closeBox();
// })

// tos faq

// $('.inner-link').click(function(){
//     $('body').addClass('blur-bg');
//     $('.tvcm').addClass('show');
//     var innerLink = $(this).attr('outlink');
//     $('.cm-box iframe').attr('src',innerLink);
// });
// $('.tvcm').click(function(){
//     closeBox();
// })

// press ESC

$(document).on( "keydown", function( event ) {
  //console.log(event.which);
  if(event.which == 27) {
  	closeBox();
  }
});

// nav

function section1(){$('html,body').animate( { scrollTop: $('.block01').offset().top}, 400)};
function section2(){$('html,body').animate( { scrollTop: $('.block02').offset().top}, 400)};
function section3(){$('html,body').animate( { scrollTop: $('.block03').offset().top}, 400)};
function section4(){$('html,body').animate( { scrollTop: $('.block04').offset().top}, 400)};
function gotop(){$('html,body').animate( { scrollTop: $('html,body').offset().top}, 100)};

$('.mobile-menu').click(function(){
	$('.header, .nav').toggleClass('mobile-open')
})

$('.nav li').click(function(){
	$('.header, .nav').removeClass('mobile-open')
})

// scroll

$(document).ready(function(){
	mainBG();
	var wh = $(window).height();
	$(window).scroll(function(){
		var y = $(window).scrollTop();
		if( y >= wh ){
			$('.header, .nav, .scroll-top').addClass('solid');
		} else {
			$('.header, .nav, .scroll-top').removeClass('solid');
		}
	});
})

$( window ).resize(function() {
	mainBG();
});


// share

function tweet() {
    myWindow = window.open("https://twitter.com/share?url=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ftweet-button&related=twitterapi%2Ctwitter&hashtags=ファイナルファンタジー®XIII%2Cchromecast&text=ファイナルファンタジー®XIII%20Google%20Cast%20Edition", "Tweet", "width=500, height=400");
}

// function fbShare() {
//     myWindow = window.open("https://www.facebook.com/sharer/sharer.php?u=' + window.location", "facebook share", "width=500, height=400");
// }

$('.share .fa-twitter').click(function(){
	tweet()
});

var url = window.location;
$('.share .share-fb').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + url)


//console.log(url)


