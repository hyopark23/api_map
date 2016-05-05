//function init() {
//  var mapOptions = {
//    center: new google.maps.LatLng(47.855094, -122.258900),
//    mapTypeId: google.maps.mapTypeId.ROADMAP,
//    zoom: 13
//  };
//  var venueMap;
//  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
//}
 function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 47.855094, lng: -122.258900},
          zoom: 20
        });
 }