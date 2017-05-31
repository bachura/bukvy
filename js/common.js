$(document).ready(function() {
	
	// Resize bg_image
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	// header slider
	$('.slider').slick({
		arrows: true,
	  dots: true,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 6000,
	  speed: 500
	});

}); 