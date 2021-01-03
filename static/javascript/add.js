var inputLatitude = document.getElementById('input-latitude')
var inputLongitude = document.getElementById('input-longitude')
var marker = L.marker([0,0]);

// Promise for geolocation callback with the location the error loads the map in a foo position
navigator.geolocation.getCurrentPosition(
    position => drawMap([position.coords.latitude, position.coords.longitude], 16),
    () => drawMap([-27.47, -58.833], 14.83) 
);

function resetMarker(event) {
    marker.setLatLng(event.latlng)
    inputLatitude.value = event.latlng.lat
    inputLongitude.value = event.latlng.lng
}


function drawMap(initialCoors, zoom) {
    // Creating the map at the user location
    var mymap = L.map('mapid').setView(initialCoors, zoom);

    // Adding the map draw from Open Street Map
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    mymap.on('click', resetMarker)
    marker.addTo(mymap)
}
