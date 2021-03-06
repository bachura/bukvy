$(document).ready(function() {
	
	// Resize bg_image
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//Fixed header 
	var nav = document.getElementById("navigation");
	var current_position = 0;
	var window_position;

	window.addEventListener('scroll', function() {
	  window_position = window.pageYOffset;

	  if (window_position > current_position) { // Scroll down
	    nav.classList.add("hideNav");
	  } else { // Scroll up
	    nav.classList.remove("hideNav");
	    nav.classList.add("showNav");
	  }
	  current_position = window_position;
	  if (current_position == 0) {
	  	$(".showNav").css("background", "transparent");
	  } else {
	  	$(".showNav").css("background", "rgba(0,0,0,.8");
	  }
	});

	// header slider
	$('.slider').slick({
		arrows: true,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 6000,
	  speed: 500
	});
	
	// Tabs
	$(function() {

	  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	    $(this)
	      .addClass('active').siblings().removeClass('active')
	      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });

	});

	// Scroll to id
	$("a[href='#']").mPageScroll2id();

	// Pop_up form
	$(".mymagicoverbox").click(function()
	{
				$('#myfond_gris').fadeIn(300);
				var iddiv = $(this).attr("iddiv");
				$('#'+iddiv).fadeIn(300);
				$('#myfond_gris').attr('opendiv',iddiv);
				return false;
	});

	$('#modal_close, #dribble_modal_close, #myfond_gris, .mymagicoverbox_fermer').click(function()
	{
				var iddiv = $("#myfond_gris").attr('opendiv');
				$('#myfond_gris').fadeOut(300);
				$('#'+iddiv).fadeOut(300);
	});


/*$(".mymagicoverbox").magnificPopup({
type:"inline",
midClick: true,
callbacks: {
    open: function() {
    	$('.slider-for').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: false,
			  fade: true,
			  asNavFor: '.slider-nav'
			});
			$('.slider-nav').slick({
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  asNavFor: '.slider-for',
			  dots: true,
			  centerMode: true,
			  focusOnSelect: true
			});
    }
}
});
*/

	// Popup slider
	$('.slider-for').slick({
		autoplay: true,
	  autoplaySpeed: 6000,
	  speed: 500,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: false,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		autoplay: true,
	  autoplaySpeed: 6500,
	  speed: 500,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  arrows: false,
	  centerMode: true,
	  focusOnSelect: true
	});

	/* Humburger menu */
	$(document).delegate('.open', 'click', function(event){
	$(this).addClass('oppenned');
		event.stopPropagation();
	});
	
	$(document).delegate('body', 'click', function(event) {
		$('.open').removeClass('oppenned');
	});
	
	$(document).delegate('.oppenned', 'click', function(event){
		$('.open').removeClass('oppenned');
		event.stopPropagation();
	});

}); 
