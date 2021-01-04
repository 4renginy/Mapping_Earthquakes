console.log("working");
 
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([39.011902, -98.4842465], 4);

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [40.6413111, -73.7781391],
    [30.20212225, -97.6681283281297],
    [43.678524, -79.6291291306445],
    [37.6213, -122.3790],
  ];

  // Create a polyline using the line coordinates and make the line red.
  L.polyline(line, {
    color: 'blue',
    weight:4,
    dashArray: '5,5',
    opacity: 0.5,
  }).addTo(map);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 14,
    accessToken: API_KEY
});
    // Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);

//ADD JAVASCRIPT TAGS TO HTML PAGE  //ADD JAVASCRIPT TAGS TO HTML PAGE  //ADD JAVASCRIPT TAGS TO HTML PAGE  

