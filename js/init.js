(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


const playVideoButton = $('#play-video-button');
const gupala = $('#gupala');
playVideoButton.hover(function(){
  playVideoButton.removeClass('animate-pop-in');
});
 $('.carousel.carousel-slider').carousel({fullWidth: true});

const kebon = $("#kebon");

gupala.click(function() {
  window.location.href = "./product/gupala/";
});

kebon.click(function() {
  window.location.href = "./product/kebon/";
});



$(function () {
 $('#vidBox').VideoPopUp({
  opener: "play-video-button",
  idvideo: "demo"
  });
});

$('#vidBox').VideoPopUp({
  backgroundColor: "#000000"
});

$('#vidBox').VideoPopUp({
  maxweight: "640"
});
