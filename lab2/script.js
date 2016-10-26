
// $(function(){
// 	$(window).scroll(function() {
// 		if($(this).scrollTop() >= 300) {
// 		$('panel').addClass('stick-panel');
// 		}
// 		else{
// 			$('panel').removeClass('stick-panel');
// 		}
// 	});
// });


$(function() {
		var box = $('.panel'); // float-fixed block
		var top = box.offset().top - parseFloat(box.css('marginTop').replace(/auto/, 0));
		$(window).scroll(function(){
				var windowpos = $(window).scrollTop();
				if(windowpos < top) {
						box.css('position', 'static');
				} else {
						box.css('position', 'fixed');
						box.css('top', 0);
				}
		});
});