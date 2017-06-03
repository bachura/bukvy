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
/*	$('.slider').slick({
		arrows: true,
	  dots: true,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 6000,
	  speed: 500
	});*/
	
	// Tabs
	$(function() {

	  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	    $(this)
	      .addClass('active').siblings().removeClass('active')
	      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });

	});

	// Scroll to id
	$("a[href*='#']").mPageScroll2id();

}); 