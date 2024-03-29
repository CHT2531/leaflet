// const geojsonExample = {
//     "type": "Feature",
//     "properties": {
//         "name": "Stone Henge",
//         "type": "Historical site",
//         "description": "This is Stone Henge!"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [-1.826236,51.178956]
//     }
// };

function initMap()
{
	const myMap = L.map('map').setView([48.85828, 2.29451], 17);
	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	 	attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
	    maxZoom: 18
	 }).addTo(myMap);
} //end of initMap, don't remove this


// function itWorks(position)
// {
// 	let latitude = position.coords.latitude;
// 	let longitude = position.coords.longitude;
// 	console.log('latitude: '+latitude);
// 	console.log('longitude: '+longitude);
// 	initMap(latitude,longitude); //calls initMap and passes the user's latitude and longitude
// }

// function itDoesntWork(error)
// {
// 	console.log('There is an error '+error);
// }

// function getLocation()
// {
// 	navigator.geolocation.getCurrentPosition(itWorks, itDoesntWork);
// }


window.addEventListener("load", initMap); // calls initMap when the page loads


/*
1. Open the HTML page in a browser. The page should be displaying a map. This example is similar to one shown in https://leafletjs.com/examples/quick-start/. To test your understanding try and make the following changes:
a) Instead of the map being centred on Paris, centre the map on Stonehenge (latitude:51.178956, longitude:-1.826236).
b) Change the zoom level of the map.
c) Add a marker at the location of Stonehenge. See https://leafletjs.com/reference.html#marker for some advice.
d) Add a pop-up for the marker. See https://leafletjs.com/reference.html#popup for some advice.
*/

/*
2. Instead of hard coding the data think how you can use some GeoJSON data instead. Uncomment the variable geojsonExample at the top of the page. 
a) Can you use the values from this variable to set the latitude, longitude and pop-up text. NOTE: In GeoJSON points are represented as [longitude, latitude] i.e. the opposite way round to Leaflet. 
*/

/*
3. Uncomment the functions itWorks(), itDoesntWork() and getLocation(). These are for working with the Geolocation API. Change the window load event listener so that it calls getLocation() instead of initMap(). If this works you should get your current position displayed in the console.
a) If you look at the final line of itWorks(), it calls initMap() and passes the user's latitude and longitude as arguments. Can you use these values to centre the map on the user's location?
b) Can you add a marker at the user's location? You should now have two markers. One for Stonehenge  and one for the user's location.
c) Depending on your location and the zoom level of the map, the user's location and the Stonehenge's location might not be visible. Have a go at using fitBounds() to rescale the map to fit the markers (https://leafletjs.com/reference.html#latlngbounds).
*/
