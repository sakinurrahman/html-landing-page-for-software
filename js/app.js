(function($) {
  "use strict";
 
  $(document).ready(function () {

/*---------------------------------------------------
       Owl carousel activication
----------------------------------------------------*/
      $('.owl').owlCarousel();

      $(".testi-carousel").owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
      center:false,
      autoplay:true,
      responsive:{
      0:{
      items:1,
      nav:true,
      },

      600:{
      items:1,
      nav:true,
      },

      1000:{
      items:1,
      nav:true,
      }
    }
});
 
});


/*---------------------------------------------------
       Prevent View Source code
----------------------------------------------------*/
$(document).bind('contextmenu', function(e){
  e.preventDefault();
});

/*---------------------------------------------------
       Animation activation
----------------------------------------------------*/

AOS.init({
  duration:700
  });




/*---------------------------------------------------
        sticky header
----------------------------------------------------*/
    $(window).on('scroll', function() {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
          $("#header").removeClass("sticky");
      } else {
          $("#header").addClass("sticky");
      }
  });


/*---------------------------------------------------
            BROWSER DEFAULT PREVENT
----------------------------------------------------*/
$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
      window.location.hash = hash;
    });
  } 
}); 
//JQuery code ends

}(jQuery));




/*



$(document).ready(function(){

    //SLICK SLIDER 
    $('.slider').slick({
        infinite: true,
        slideToShow:1,
        slideToScroll:1
    });
    


$('.video').magnificPopup({
  type:'iframe',
  iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=', 
          src: 'http://www.youtube.com/embed/%id%?autoplay=1'
        },
      },
      srcAction: 'iframe_src',
   }
});


$('.img-link').magnificPopup({type:'image'});




$('.skillbar').skillBars({
from: 0,       
to: false,      
speed: 1000,   
interval: 100,    
decimals: 0,      
onUpdate: null,   
onComplete: null,   
classes:{
  skillBarBar : '.skillbar-bar',
  skillBarPercent : '.skill-bar-percent',
}
});







$('.counter-up').countUp({
'time': 3000,
'delay': 10
});

var mixer = mixitup('.filter-bar');







$('.owl').owlCarousel();

$(".owl-carousel-team").owlCarousel({
loop:true,
margin:30,
nav:true,
navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
center:false,
autoplay:true,
dotsEach:true,
responsive:{
0:{
 items:1,
 nav:true,
},

600:{
items:2,
nav:true,
},

1000:{
items:4,
nav:true,
}
}
});

$('.fa-bars').click(function(){
$('.navbar').addClass("bg",1000);
});

$(".banner-theme").owlCarousel({
loop:true,
margin:0,
items:1,
autoplay:true,
navText:['<i class="fa fa-angle-double-right"></i>','<i class="fa fa-angle-double-left"></i>'],
nav:true,
dots:false,
autoplayHoverPause: false,
autoplaySpeed: 100,
animateOut: 'fadeOut',
animateIn: 'fadeIn',
responsive:{
0:{
    items:1,
    nav:true,
},
767:{
    items:1,
    nav:true,
},
992:{
    items:1
}
}
});







$('.owl').owlCarousel();

$(".owl-carousel-testimonial").owlCarousel({
loop:true,
margin:30,
navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
nav:true,
center:false,
autoplay:true,
dotsEach:true,
responsive:{
0:{
 items:1
},

600:{
items:1
},

1000:{
items:1
}
}
});


})(jQuery);


*/