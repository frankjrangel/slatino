function initialize() {
      var map_canvas = document.getElementById('mapa');
      var map_options = {
          center: new google.maps.LatLng(10.434702, -66.860897),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      var map = new google.maps.Map(map_canvas, map_options)
}
google.maps.event.addDomListener(window, 'load', initialize);
