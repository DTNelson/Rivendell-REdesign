$(document).ready(function() {

  "use strict";
  
  //smooth-scroll when clicking on  navigation
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
 		
		var target = this.hash;
	    var $target = $(target);
		
		$('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
  //collapse top navbar after clicking on navigation - mobile
    $(".navbar-inverse li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
    });
   
	
    //Activate Scrollspy
    $('body').scrollspy({
	  target: '.navbar-fixed-top'
	});
 
 
 	//Read More/Read Less Buttons
	$('.collapse-bio').click(function(){
		var $this = $(this);
		$this.toggleClass('collapse-bio');
		if($this.hasClass('collapse-bio')){
			$this.text('Read More...');			
		} else {
			$this.text('Read Less');
		}
	});
	
	//Fade-out Carousel-caption
	$("#hide-btn").click(function(){
	  $("#carousel-img1").fadeOut(1000);
	  $("#carousel-img2").fadeOut(1000);
	  $("#carousel-img3").fadeOut(1000);
	});
	
});

