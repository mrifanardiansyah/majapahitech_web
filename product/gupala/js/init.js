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

const var1 = $('#varian1');
const var2 = $('#varian2');
const var3 = $('#varian3');
const var4 = $('#varian4');
const var5 = $('#varian5');

var1.click(function(){
    window.open("https://www.tokopedia.com/gupalamajapahit/alarm-motor-gupala-varian-1?trkid=f%3DCa0000L000P0W0S0Sh00Co0Po0Fr0Cb0_src%3Dshop-product_page%3D1_ob%3D11_q%3D_catid%3D1365_po%3D5","_blank");
});

var2.click(function(){
    window.open("https://www.tokopedia.com/gupalamajapahit/alarm-motor-gupala-varian-2?trkid=f=Ca0000L000P0W0S0Sh00Co0Po0Fr0Cb0_src=shop-product_page=1_ob=11_q=_catid=1365_po=4","_blank");
});

var3.click(function(){
    window.open("https://www.tokopedia.com/gupalamajapahit/alarm-motor-gupala-varian-3?trkid=f=Ca0000L000P0W0S0Sh00Co0Po0Fr0Cb0_src=shop-product_page=1_ob=11_q=_catid=1365_po=3","_blank");
});

var4.click(function(){
    window.open("https://www.tokopedia.com/gupalamajapahit/alarm-motor-gupala-varian-4?trkid=f=Ca0000L000P0W0S0Sh00Co0Po0Fr0Cb0_src=shop-product_page=1_ob=11_q=_catid=1365_po=2","_blank");
});

var5.click(function(){
    window.open("https://www.tokopedia.com/gupalamajapahit/alarm-motor-gupala-varian-5?trkid=f=Ca0000L000P0W0S0Sh00Co0Po0Fr0Cb0_src=shop-product_page=1_ob=11_q=_catid=1365_po=1","_blank");
});

$(function () {
 $('#vidBox').VideoPopUp({
  opener: "video-button",
  idvideo: "demo"
  });
});

$('#vidBox').VideoPopUp({
  backgroundColor: "#000000"
});

$('#vidBox').VideoPopUp({
  maxweight: "640"
});
