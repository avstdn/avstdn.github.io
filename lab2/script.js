$(window).on('load', function () {
  $('.wrapper').delay(0).fadeOut();
});

$(document).ready(function(){
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
});
