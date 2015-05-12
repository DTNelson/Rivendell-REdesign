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
	
<<<<<<< HEAD
	//Fade-out Carousel-caption
	$("#hide-btn").click(function(){
	  $("#carousel-img1").fadeOut(1000);
	  $("#carousel-img2").fadeOut(1000);
	  $("#carousel-img3").fadeOut(1000);
	});
	
=======
	 $('#hide-btn-1').on('click', function () {
        if ($('#quote-1').is(':visible')) {
            $(this).text('Show Quote');
            $('#quote-1').fadeToggle( "slow" );
        } else {
            $(this).text("Hide Quote");
            $('#quote-1').fadeToggle( "slow" );
        }
    });
	
	 $('#hide-btn-2').on('click', function () {
        if ($('#quote-2').is(':visible')) {
            $(this).text('Show Quote');
            $('#quote-2').fadeToggle( "slow" );
        } else {
            $(this).text("Hide Quote");
            $('#quote-2').fadeToggle( "slow" );
        }
    });
	
	 $('#hide-btn-3').on('click', function () {
        if ($('#quote-3').is(':visible')) {
            $(this).text('Show Quote');
            $('#quote-3').fadeToggle( "slow" );
        } else {
            $(this).text("Hide Quote");
            $('#quote-3').fadeToggle( "slow" );
        }
    });
	
	$('#hide-btn-4').on('click', function () {
        if ($('#quote-4').is(':visible')) {
            $(this).text('Show Quote');
            $('#quote-4').fadeToggle( "slow" );
        } else {
            $(this).text("Hide Quote");
            $('#quote-4').fadeToggle( "slow" );
        }
    });
	
	$('#hide-btn-5').on('click', function () {
        if ($('#quote-5').is(':visible')) {
            $(this).text('Show Quote');
            $('#quote-5').fadeToggle( "slow" );
        } else {
            $(this).text("Hide Quote");
            $('#quote-5').fadeToggle( "slow" );
        }
    });
>>>>>>> gh-pages
});

