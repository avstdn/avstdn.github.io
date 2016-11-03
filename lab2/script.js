// $(window).on('load', function () {
//   $('.wrapper').delay(1500).fadeOut();
// });

// $(document).ready(function(){
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
// });

// $(window).scroll(function() {
// if ($(this).scrollTop() > 500) {  
//     $('.top-panel').addClass("sticky");
//   }
//   else{
//     $('.top-panel').removeClass("sticky");
//   }
// });

// var $panel = $('top-panel');
// var $top = $panel.offset().top;

// $(window).on('scroll', function() {
//   var scrollTop = $(window).scrollTop();
//   $('.top-panel').text('coords: ' + scrollTop + 'px');
// })

// Create a clone of the menu, right next to original.
// $('.top-panel').addClass('original').clone().insertAfter('.top-panel').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();
// scrollIntervalID = setInterval(stickIt, 10);
// function stickIt() {
//   var orgElementPos = $('.original').offset();
//   orgElementTop = orgElementPos.top;
//   if ($(window).scrollTop() >= (orgElementTop)) {
//     // scrolled past the original position; now only show the cloned, sticky element.
//     // Cloned element should always have same left position and width as original element.     
//     orgElement = $('.original');
//     coordsOrgElement = orgElement.offset();
//     leftOrgElement = coordsOrgElement.left;  
//     widthOrgElement = orgElement.css('width');
//     $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
//     $('.original').css('visibility','hidden');
//   } else {
//     // not scrolled past the menu; only show the original menu.
//     $('.cloned').hide();
//     $('.original').css('visibility','visible');
//   }
// }

// var state = true;
// var container = $('.container');
// $('#nav-icon1').on("click", function() {
//   if (state) {
//     $('.container').animate({
      
//     }, 1000 );
//   } else {
//     $( ".container" ).animate({
//       backgroundColor: "#fff"
//     }, 1000 );
//   }
//   state = !state;
// });

// var state = true;
// var container = $('.container');
// $('#nav-icon1').on("click", function() {
//   if (state) {
//     $('.container').css('background', '#000').animate({'opacity': '0'}, 500);
//   } else {
//     $('.container').css('background-image', 'url(img/123.jpg)').animate({'opacity': '1'}, 1000)
//   }
//   state = !state;
// });
