
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


// $(function() {
// 		var box = $('.panel'); // float-fixed block
// 		var transPanel = $('.trans-panel')
// 		var top = box.offset().top - parseFloat(box.css('marginTop').replace(/auto/, 0));
// 		$(window).scroll(function(){
// 				var windowpos = $(window).scrollTop();
// 				if(windowpos < top) {
// 						box.css('position', 'static');
// 				} else {
// 						box.css('position', 'fixed');
// 						box.css('top', 0);
// 						// transPanel.css('margin-left', '214px');
// 				}
// 		});
// });

// $(window).scroll(function() {
// 	/*----------------------------------
// 	sticky block script by makeasite.ru
// 	----------------------------------*/
// 	var sb_m = 20; /* отступ сверху и снизу */
// 	var mb = 300; /* высота подвала с запасом */
// 	var st = $(window).scrollTop();
// 	var sb = $(".panel");
// 	var sbi = $(".panel .inner-panel");
// 	var sb_ot = sb.offset().top;
// 	var sbi_ot = sbi.offset().top;
// 	var sb_h = sb.height();
 
// 	if(sb_h + $(document).scrollTop() + sb_m + mb < $(document).height()) {
// 		if(st > sb_ot) {
// 			var h = Math.round(st - sb_ot) + sb_m;
// 			sb.css({"paddingTop" : h});
// 		}
// 		else {
// 			sb.css({"paddingTop" : 20});
// 		}
// 	}
// });

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('.panel').addClass('fixed');
    } else {
        $('.panel').removeClass('fixed');
    }
});