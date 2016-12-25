// PRELOADER ////////////////
$(window).on('load', function () {
  var $preloader = $('#page-preloader'),
      $spinner   = $preloader.find('.spinner');
  $spinner.delay(500).fadeOut();
  $preloader.delay(550).fadeOut('slow');
  // PLAYER SLIDE /////////////////////
  $('.player').delay(500).addClass('slide');
});

$('.contact-input').click(function() {
  document.location.href = 'https://avstdn.herokuapp.com';
});


//////////////////////////////////
// VOLUME CONTROL ////////////////
//////////////////////////////////
var volume = $("#volume");
var animationState = 1;

volume.slider({
    min: 0,
    max: 100,
    value: 50,
    range: "min",
    animate: true,
    slide: function(event, ui) {
      setVolume((ui.value) / 100);
    }
});
setVolume(0.5);

function setVolume(myVolume) {
  var myMedia = document.getElementById('audio');
  myMedia.volume = myVolume;
  if(myVolume >= 0.75) {
    $('.outer-ring').css('animation', 'twinkle-high .5s ease infinite');
    animationState = 2;
  } else if(myVolume <= 0.25) {
    $('.outer-ring').css('animation', 'twinkle-low .5s ease infinite');
    animationState = 0;
  } else {
    $('.outer-ring').css('animation', 'twinkle-middle .5s ease infinite');
    animationState = 1;
  }
}
///////////////////////////////////////////////////




// BURGER OPEN //////////////
var toggle = true;
var burger = $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4');
$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    burger.toggleClass('open');
    $('.wrapper').toggleClass('wrapper-faded');
    if(toggle) {
      $('.faded-menu').removeClass('animated fadeOutLeftBig');
      $('.faded-menu').addClass('animated bounceInLeft');
      toggle = false;
    } else {
      $('.faded-menu').removeClass('animated bounceInLeft');
      $('.faded-menu').addClass('animated fadeOutLeftBig');
      toggle = true;
    }
});

var startBtn = document.getElementById('audio');
var playToggle = true;

// SCROLL TO SECTION ////////
$(document).ready(function(){

  // PLAYER ///////////////////////
  $('#play-btn').click(function() {
  $(this).toggleClass('pause');
  $('.outer-ring-pause').toggleClass('outer-ring');
  if(playToggle) {
    switch(animationState) {
      case 2:
        $('.outer-ring-pause').css('animation', 'twinkle-high .5s ease infinite');
        break;
      case 1:
        $('.outer-ring-pause').css('animation', 'twinkle-middle .5s ease infinite');
        break;
      case 0:
        $('.outer-ring-pause').css('animation', 'twinkle-low .5s ease infinite');
        break;
    }
    startBtn.play();
    playToggle = false;
  } else {
    $('.outer-ring-pause').css('animation', 'none');
    startBtn.pause();
    playToggle = true;
  }
});

  if($(window).scrollTop() == 0) {
    $('#1 .dot').addClass('dot-active');
  }

  $('#1').click(function(){
    var speed = 500;
    var top = $('.first-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });
  $('#2').click(function(){
    var speed = 500;
    var top = $('.second-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });
  $('#3').click(function(){
    var speed = 500;
    var top = $('.third-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });
  $('#4').click(function(){
    var speed = 500;
    var top = $('.fourth-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });
  $('#5').click(function(){
    var speed = 500;
    var top = $(document).height() - $(window).height();
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });

  $('#arrow').click(function(){
    var speed = 500;
    var top = $('.second-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });

  $('.rocket').click(function(){
    var speed = 500;
    var top = $('.first-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });

  $('.faded-item-1').click(function(){
    var speed = 500;
    var top = $('.first-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    burger.toggleClass('open');
    $('.wrapper').toggleClass('wrapper-faded');
    $('.faded-menu').removeClass('animated bounceInLeft');
    $('.faded-menu').addClass('animated fadeOutLeftBig');
    toggle = true;
    return false;
  });
  $('.faded-item-2').click(function(){
    var speed = 500;
    var top = $('.second-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    burger.toggleClass('open');
    $('.wrapper').toggleClass('wrapper-faded');
    $('.faded-menu').removeClass('animated bounceInLeft');
    $('.faded-menu').addClass('animated fadeOutLeftBig');
    toggle = true;
    return false;
  });
  $('.faded-item-3').click(function(){
    var speed = 500;
    var top = $('.third-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    burger.toggleClass('open');
    $('.wrapper').toggleClass('wrapper-faded');
    $('.faded-menu').removeClass('animated bounceInLeft');
    $('.faded-menu').addClass('animated fadeOutLeftBig');
    toggle = true;
    return false;
  });
  $('.faded-item-4').click(function(){
    var speed = 500;
    var top = $('.fourth-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    burger.toggleClass('open');
    $('.wrapper').toggleClass('wrapper-faded');
    $('.faded-menu').removeClass('animated bounceInLeft');
    $('.faded-menu').addClass('animated fadeOutLeftBig');
    toggle = true;
    return false;
  });
  $('.faded-item-5').click(function(){
    var speed = 500;
    var top = $(document).height() - $(window).height();
    $('html, body').animate({scrollTop: top}, speed);
    burger.toggleClass('open');
    $('.wrapper').toggleClass('wrapper-faded');
    $('.faded-menu').removeClass('animated bounceInLeft');
    $('.faded-menu').addClass('animated fadeOutLeftBig');
    toggle = true;
    return false;
  });

});

$(window).on('scroll', function () {

  if ($(window).scrollTop()) {
    $('.player').removeClass('slide').removeClass('show-player');
    $('.player').addClass('hide-player');
  } else {
    $('.player').removeClass('hide-player');
    $('.player').addClass('show-player');
  }

  var curPos = $(this).scrollTop();

  var top = $('.first-section').offset().top;
  var bottom = top + $('.first-section').outerHeight();
    if (curPos >= top && curPos <= bottom) {
      $('.dot').removeClass('dot-active');
      $('#1 .dot').addClass('dot-active');
    }

  var top = $('.second-section').offset().top;
  var bottom = top + $('.second-section').outerHeight();
    if (curPos >= top && curPos <= bottom) {
      $('.dot').removeClass('dot-active');
      $('#2 .dot').addClass('dot-active');
    }

  var top = $('.third-section').offset().top;
  var bottom = top + $('.third-section').outerHeight();
    if (curPos >= top && curPos <= bottom) {
      $('.dot').removeClass('dot-active');
      $('#3 .dot').addClass('dot-active');
    }

  var top = $('.fourth-section').offset().top;
  var bottom = top + $('.fourth-section').outerHeight();
    if (curPos >= top && curPos <= bottom) {
      $('.dot').removeClass('dot-active');
      $('#4 .dot').addClass('dot-active');
    }

  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    $('.dot').removeClass('dot-active');
    $('#5 .dot').addClass('dot-active');
    $('#apollo').removeClass('invisible');
  }

});

$('.rocket').on('click', function() {
  $(this).addClass('fire-off');
  setTimeout(function() {
    $('#apollo').removeClass('fire-off');
    $('#apollo').addClass('invisible');
  }, 900);
})