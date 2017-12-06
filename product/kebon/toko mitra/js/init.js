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

 var locations = [
        {lat: -7.772103,  lng:  110.375191} //gamaAutoService
        // {lat: -7.775921,  lng: 110.388879}

      ];

 function initMap() {
   // var gamaAutoService = {
   //   lat: -7.765052,
   //   lng: 110.375093
   // };
   //
   // var unyAutoCare = {
   //   lat: -7.775921,
   //   lng: 110.388879
   // };
   //
   // var map = new google.maps.Map(document.getElementById('map'), {
   //   zoom: 13,
   //   center: gamaAutoService
   // });
   // var marker = new google.maps.Marker({
   //   position: gamaAutoService,
   //   map: map
   // });
   //
   // var marker2 = new google.maps.Marker({
   //   position: unyAutoCare,
   //   map: map
   // });

   var map = new google.maps.Map(document.getElementById('map'), {
           zoom: 13,
           center: {lat: -7.765052,  lng: 110.375093}
         });

         // Create an array of alphabetical characters used to label the markers.
         var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

         // Add some markers to the map.
         // Note: The code uses the JavaScript Array.prototype.map() method to
         // create an array of markers based on a given "locations" array.
         // The map() method here has nothing to do with the Google Maps API.
         var markers = locations.map(function(location, i) {
           return new google.maps.Marker({
             position: location,
             label: labels[i % labels.length]
           });
         });

         // Add a marker clusterer to manage the markers.
         var markerCluster = new MarkerClusterer(map, markers,
             {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

   infoWindow = new google.maps.InfoWindow();

         // Try HTML5 geolocation.
         if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(function(position) {
             var pos = {
               lat: position.coords.latitude,
               lng: position.coords.longitude
             };

             infoWindow.setPosition(pos);
             infoWindow.setContent('Location found.');
             infoWindow.open(map);
             map.setCenter(pos);
           }, function() {
             handleLocationError(true, infoWindow, map.getCenter());
           });
         } else {
           // Browser doesn't support Geolocation
           handleLocationError(false, infoWindow, map.getCenter());
         }
 }

 function handleLocationError(browserHasGeolocation, infoWindow, pos) {
         infoWindow.setPosition(pos);
         infoWindow.setContent(browserHasGeolocation ?
                               'Error: The Geolocation service failed.' :
                               'Error: Your browser doesn\'t support geolocation.');
         infoWindow.open(map);
       }

 $('#gamaAutoService').click(function (){
   window.location.href="https://www.google.com/maps/?q=" + locations[0].lat + "," + locations[0].lng;
 });
