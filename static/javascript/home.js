function main(markesCoords) {
    
    function drawMap(initialCoors, zoom) {
        // Creating the map at the user location
        var mymap = L.map('mapid').setView(initialCoors, zoom);

        // Adding the map draw from Open Street Map
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);
        // draw the markers
        drawMakers(mymap, markesCoords)
    }

    function drawMakers(map, markersCoords) {
        // for each marker in the list draws it into the map
        markersCoords.forEach(makerCoord => {
            L.marker([makerCoord.latitude, makerCoord.longitude]).addTo(map);
        });
    }
    
    // Promise for geolocation callback with the location the error loads the map in a foo position
    navigator.geolocation.getCurrentPosition(
        position => drawMap([position.coords.latitude, position.coords.longitude], 16),
        () => drawMap([-27.47, -58.833], 14.83) 
    );
}
