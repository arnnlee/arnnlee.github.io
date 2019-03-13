// Add slideDown animation to dropdown
$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// Add slideUp animation to dropdown
$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

// Page transitions
$(document).ready(function() {
   $('#nav').localScroll({duration:800});
});

//Navbar Shrink
$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
      $('.navbar').addClass('shrink');
    }else {
      $('.navbar').removeClass('shrink');
    }
  });
});
