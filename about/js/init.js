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

$(document).ready(function(){
     $('.carousel').carousel({
           dist:0,
           shift:0,
           padding:20,

     });
 $('.carousel.carousel-slider').carousel();
   });


// modal trigger
var temp = window.location.search;
var temp2 = temp.substring(1, temp.length);
var value = temp2.split("=");


// When the user clicks on the button, open the modal
if(value[1] == "masukan") {
   $('.modal').modal();
   $('#modal1').modal('open');
} else if (value[1] == "gagal") {
  $('.modal').modal();
  $('#modal2').modal('open');
}
