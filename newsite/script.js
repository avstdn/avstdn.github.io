// BURGER OPEN //////////////
var toggle = true;
$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
    $('.wrapper').toggleClass('wrapper-faded');
    if(toggle) {
      $('.faded-menu').removeClass('animated fadeOutLeft');
      $('.faded-menu').addClass('animated bounceInLeft');
      toggle = false;
    } else {
      $('.faded-menu').removeClass('animated bounceInLeft');
      $('.faded-menu').addClass('animated fadeOutLeft');
      toggle = true;
    }
});

// SCROLL TO SECTION ////////
$(document).ready(function(){
  $('.dot1').click(function(){
    $('[class ^= "dot"]').css('background', '#666666');
    var speed = 1000; // scrolling speed
    var top = $('.first-section').offset().top; // scroll to
    $(this).css('background', '#fff');
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });
  $('.dot2').click(function(){
    $('[class ^= "dot"]').css('background', '#666666');
    var speed = 1000;
    $(this).css('background', '#fff');
    var top = $('.second-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });
  $('.dot3').click(function(){
    $('[class ^= "dot"]').css('background', '#666666');
    var speed = 1000;
    $(this).css('background', '#fff');
    var top = $('.third-section').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });
  $('.dot4').click(function(){
    $('[class ^= "dot"]').css('background', '#666666');
    var speed = 1000;
    $(this).css('background', '#fff');
    var top = $('.footer').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    return false;
  });
});
