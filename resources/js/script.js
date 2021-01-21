$(document).ready(() => {
    // sticky navbar
    $('.js--section--features').waypoint((direction) => {
        if (direction == 'down') {
            return $('nav').addClass('sticky')
        }
        $('nav').removeClass('sticky')
    }, {
        offset: '70px'
    })

    //   buttons

    $('#scroll-to-plan').click(() => {
        $('html,body').animate({ scrollTop: $('.js--section--plan').offset().top }, 1000)
    })

    $('#scroll-to-feat').click(() => {
        $('html,body').animate({ scrollTop: $('.js--section--features').offset().top }, 1000)
    })

    $('a[href*="#"]')

  //----------------------FOR NAVIGATION---------------------------------    
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // ----------------------------FOR ANIMATION-------------------

  $('.feature-animate').waypoint((direction) => {
     $('.feature-animate').addClass('animate__animated animate__fadeInDown')
}, {
    offset: '70%'
})

  $('.phone-animate').waypoint((direction) => {
     $('.phone-animate').addClass('animate__animated animate__fadeInUp')
}, {
    offset: '70%'
})


  $('.cities-animate').waypoint((direction) => {
     $('.cities-animate').addClass('animate__animated animate__fadeIn')
}, {
    offset: '40%'
})


  $('.plan-animate').waypoint((direction) => {
     $('.plan-animate').addClass('animate__animated animate__pulse')
}, {
    offset: '70%'
})

// -------------NAV ICON-----------

$('.js--nav--icon').click(()=>{
  let icon = $('.js--nav--icon')
  $('.main-nav').slideToggle(200);   
  
  if(icon.hasClass('open')){
        icon.empty()
        icon.removeClass('open')
        icon.addClass('close')
        icon.append("<ion-icon name='close'></ion-icon>")
  }
  else {
    icon.empty()
    icon.removeClass('close')
    icon.addClass('open')
    icon.append("<ion-icon name='reorder-four'></ion-icon>")
  }
})

})