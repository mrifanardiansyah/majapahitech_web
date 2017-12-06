(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

  $('.carousel').carousel();

const playVideoButton = $('#play-video-button');
const gupala = $('#gupala');
playVideoButton.hover(function(){
  playVideoButton.removeClass('animate-pop-in');
});
 $('.carousel.carousel-slider').carousel({fullWidth: true});
