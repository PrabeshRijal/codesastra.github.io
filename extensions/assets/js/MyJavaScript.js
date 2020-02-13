// animate parameters
new WOW().init();
// animate parameters

// -------------------------------------
// tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
// tooltip
// -------------------------------------
// sidenavigation
 function openNav() 
 {
  document.getElementById("mySidenav").style.width = "280px";
  document.getElementById("main").style.marginLeft = "0px";
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
}

function closeNav() 
{
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
// sidenavigation
// -------------------------------------

// Reviews slider/owl slider
        jQuery(document).ready(function($) {
            "use strict";
            $('#customers-testimonials').owlCarousel({
                loop: true,
                center: true,
                items: 3,
                margin: 0,
                autoplay: true,
                dots:true,
                autoplayTimeout: 8500,
                smartSpeed: 450,
                responsive: {
                  0: {
                    items: 1
                  },
                  768: {
                    items: 2
                  },
                  1170: {
                    items: 3
                  }
                }
            });
          });


// ---------------------------


//scroll to top button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
//scroll to top button