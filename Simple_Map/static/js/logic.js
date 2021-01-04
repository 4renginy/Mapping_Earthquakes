console.log("working");
// ADD A MAP OBJECT  // ADD A MAP OBJECT  // ADD A MAP OBJECT // ADD A MAP OBJECT  // ADD A MAP OBJECT 
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

//An alternative to using the setView() method is to modify each attribute in the map object 
//using the curly braces notation as follows: Create the map object with a center and zoom level.

        //let map = L.map("mapid", {
        //    center: [
        //      40.7, -94.5
        //    ],
        //    zoom: 4
        //  });

// ADD A TILE LAYER FOR OUT MAP  //     // ADD A TILE LAYER FOR OUT MAP  //    // ADD A TILE LAYER FOR OUT MAP  //

    //We have two options to create a tile layer.

    // We create the tile layer that will be the background of our map.
// We create the tile layer that will be the background of our map.
//  Add a marker to the map for Los Angeles, California.

//*******************************
//Adding a marker to our simple map requires only one line of code,
//let marker = L.marker([34.0522, -118.2437]).addTo(map);
//************************************* */
//To change the marker on our map to a point or dot, we'll use the circle() function. The circle() 
//function will place a circle on the map at the given coordinates. The syntax for using the circle() function follows:

 L.circleMarker([34.0522, -118.2437], {
    color: 'black',
    fillColor: 'yellow',
    fillOpacity: 0.2,
    radius: 300,
}).addTo(map);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 14,
    accessToken: API_KEY
});
    // Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);

//ADD JAVASCRIPT TAGS TO HTML PAGE  //ADD JAVASCRIPT TAGS TO HTML PAGE  //ADD JAVASCRIPT TAGS TO HTML PAGE  

