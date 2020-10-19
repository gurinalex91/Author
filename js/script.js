$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu') .toggleClass('active');
    $('body') .toggleClass('lock');
  });
});

$(document).ready(function(){
   $('.main-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:0
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    });
$(document).ready(function(){
   $('.plans__carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:3
            }
        }
    })
    });
$(document).ready(function(){
   $('.reviews-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:0
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    });
// scrollTop button
$(document).ready(function(){
  $('#scrollTop__btn').hide();  
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('#scrollTop__btn').fadeIn();
        }else{
          $('#scrollTop__btn').fadeOut();
        }
  });
});