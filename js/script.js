prompt("What is your favorite hang out spot?");


alert("Welcome to The Lights....Enjoy!");
      

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(31.841019,-106.401198),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);