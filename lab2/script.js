
$(function(){
	$(window).scroll(function() {
		if($(this).scrollTop() >= 300) {
		$('panel').addClass('stick-panel');
		}
		else{
			$('panel').removeClass('stick-panel');
		}
	});
});