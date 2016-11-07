// BURGER OPEN //////////////
var toggle = true;
$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
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

// SCROLL TO SECTION ////////
$(document).ready(function(){
  $('#1 .dot').addClass('dot-active');
  $('#1').click(function(){
    // $('[class ^= "dot"]').css('background', '#666');
    var speed = 1000; // scrolling speed
    var top = $('.first-section').offset().top; // scroll to
    // $(this).css('background', '#fff');
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });
  $('#2').click(function(){
    // $('[class ^= "dot"]').css('background', '#666');
    var speed = 1000;
    // $(this).css('background', '#fff');
    var top = $('.second-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });
  $('#3').click(function(){
    // $('[class ^= "dot"]').css('background', '#666');
    var speed = 1000;
    // $(this).css('background', '#fff');
    var top = $('.third-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });
  $('#4').click(function(){
    // $('[class ^= "dot"]').css('background', '#666');
    var speed = 1000;
    // $(this).css('background', '#fff');
    var top = $('.fourth-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });
  $('#5').click(function(){
    // $('[class ^= "dot"]').css('background', '#666');
    var speed = 1000;
    // $(this).css('background', '#fff');
    var top = $('.fifth-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });

  $('#arrow').click(function(){
    var speed = 1000; // scrolling speed
    var top = $('.second-section').offset().top; // scroll to
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });

  $('.rocket').click(function(){
    var speed = 1000; // scrolling speed
    var top = $('.first-section').offset().top; // scroll to
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });
});




$(window).on('scroll', function () {
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
  var bottom = top + $('.third-section').outerHeight();
    if (curPos >= top && curPos <= bottom) {
      $('.dot').removeClass('dot-active');
      $('#4 .dot').addClass('dot-active');
    }

  var top = $('.fifth-section').offset().top;
  var bottom = top + $('.third-section').outerHeight();
    if (curPos >= top && curPos <= bottom) {
      $('.dot').removeClass('dot-active');
      $('#5 .dot').addClass('dot-active');
    }

});