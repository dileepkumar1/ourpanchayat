/* Template Name: Lezir - Responsive Bootstrap 4 Landing Page Template
   Author: Themesbrand
   Version: 1.0.0
   File Description: Main js file
*/


(function ($) {

    'use strict';

	// STICKY
	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();

	    if (scroll >= 50) {
	        $(".sticky").addClass("nav-sticky");
	    } else {
	        $(".sticky").removeClass("nav-sticky");
	    }
	});




	// scrollspy
	$("#mySidenav").scrollspy({
	    offset: 70
	});


	 $( document ).ready(function() {
         $('.carousel-client').bxSlider({
            auto:false,
            slideWidth: 350,
            minSlides:2,
            maxSlides: 4,
            controls: false
        });
        $('.portel-st').bxSlider({
            auto:true,
            slideWidth:220,
            minSlides: 2,
            maxSlides:8,
            controls:true,
        });
	});

	

})(jQuery)
