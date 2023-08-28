$(document).ready(function() {
/*make the "About me" phrase and left-to-right part 
visible when scrolling and reaching the corresponding section*/

$(window).scroll(function() {
  var portfolioElement = $('.portfolio-wrapper');
  var portfolioPosition = portfolioElement.offset().top;
  var portfolioWindowHeight = $(window).height();
  var portfolioScrollTop = $(this).scrollTop();

  if (portfolioScrollTop + portfolioWindowHeight > portfolioPosition) {
    portfolioElement.addClass('animate-portfolio');
  } else {
    portfolioElement.removeClass('animate-portfolio');
  }

$(window).scroll(function() {
  var aboutElement = $('.about-me__text');
  var aboutPosition = aboutElement.offset().top;
  var aboutWindowHeight = $(window).height();
  var aboutScrollTop = $(this).scrollTop();

  if (aboutScrollTop + aboutWindowHeight > aboutPosition + 100) {
    aboutElement.find('#about-me-heading').addClass('animated slideInUp');
  } else {
    aboutElement.find('#about-me-heading').removeClass('animated slideInUp');
  }
});



});

/*make the "About me" phrase and left-to-right part 
visible when scrolling and reaching the corresponding section*/


/*achieve the desired effect where the element is initially hidden and then animates 
from left to right when it becomes visible on scroll*/
		document.addEventListener('DOMContentLoaded', function() {
  var portfolio = document.querySelector('.portfolio-wrapper');
  var observerOptions = {
    root: null, // use the viewport as the root
    rootMargin: '0px', // no margin
    threshold: 0.5 // trigger when 50% of the element is visible
  };

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        portfolio.classList.add('animate-portfolio');
        observer.unobserve(entry.target); // stop observing once the animation is triggered
        }
      });
    }, observerOptions);

    observer.observe(portfolio); // start observing the portfolio element
  });
/*achieve the desired effect where the element is initially hidden and then animates 
from left to right when it becomes visible on scroll*/


/*To make sure the color of button text and its border only changes when hover over them */
var button = document.getElementById('get-started-btn');

button.addEventListener('mouseover', function() {
  button.classList.add('hovered');
});

button.addEventListener('mouseout', function() {
  button.classList.remove('hovered');
});
/*To make sure the color of button text and its border only changes when hover over them */


/*To add a script that navigates to the "About me" 
section when the "Get Started" button is clicked*/
document.getElementById("get-started-btn").addEventListener("click", function() {
  var aboutMeSection = document.getElementById("About");
  aboutMeSection.scrollIntoView({ behavior: "smooth" });
});
/*To add a script that navigates to the "About me" 
section when the "Get Started" button is clicked*/



  /* The menu to be hidden when clicking anywhere outside of the menu or menu bar */
$(document).on('click', function(event) {
  var $target = $(event.target);
  
  // Check if the clicked element is not the menu or menu bar
  if ($target.closest('.main-navigation').length && !$target.closest('.burger-container').length) {
    $('.main-navigation').fadeOut('fast');
    $('body').removeClass('stop-scroll');
  }
});

$('.burger-container').on('click', function() {
  if ($('.main-navigation').is(':visible')) {
    $('.main-navigation').fadeOut('fast');
    $('body').removeClass('stop-scroll');
  } else {
    $('.main-navigation').fadeIn('fast');
    $('body').addClass('stop-scroll');
  }
});
/* The menu to be hidden when clicking anywhere outside of the menu or menu bar */

  /* About me slider */
  $('.about-me-slider').slick({
    slidesToShow: 1,
    prevArrow: '<span class="span-arrow slick-prev"><</span>',
    nextArrow: '<span class="span-arrow slick-next">></span>'
  });

  /* Blog slider */
  $('.blog-slider').slick({
    slidesToShow: 2,
    prevArrow: '<span class="span-arrow slick-prev"><</span>',
    nextArrow: '<span class="span-arrow slick-next">></span>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  var counta = 0;

  $(window).scroll(function(e) {
    /* Onscroll number counter */
    var statisticNumbers = $('.single-count');
    if (statisticNumbers.length) {
      var oTop = statisticNumbers.offset().top - window.innerHeight;
      if (counta == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          }, {
            duration: 660,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
        });
        counta = 1;
      }
    }
  });

  // Smooth scrolling behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'

      }); 
       // Close the menu after navigation
      $('.main-navigation').hide();
      $('#myBtn').removeClass('change');
      if (!$('.main-navigation').is(':visible')) {
        $('body').removeClass('stop-scroll');

      }
    });
  });
  
});