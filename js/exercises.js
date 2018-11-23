//Typically this data would be loaded using Ajax
const takeaways=[
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.648559, -1.7825]
	  },
	  "properties": {
	    "name": "Centros",
	    "description":"Best doner kebab in Huddersfield."
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.647828, -1.79016]
	  },
	  "properties": {
	    "name": "Trinity HFC",
	    "description":"Good fish masala and chicken."
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "Kobeda Hut",
	    "description":"Never been but heard it's good."
	  }
	}
];


const infoDiv = document.querySelector("#info");
const nameDiv = document.querySelector("#takeawayName");
const descDiv = document.querySelector("#takeawayDesc");


function initMap(){
	myMap = L.map('map').setView([48.858271, 2.294589], 17);

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	 	attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
	    maxZoom: 18
	 }).addTo(myMap);
	 
}


function itWorks(position) 
{
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	console.log('latitude: '+latitude);
	console.log('longitude: '+longitude);
}

function itDoesntWork(error) 
{
	console.log('There is an error '+error);
}

function getUserPosition()
{
    navigator.geolocation.getCurrentPosition(itWorks, itDoesntWork);
}


window.addEventListener("load",getUserPosition,false);
	
//1. Open the HTML page in a browser, make sure the console.log displays the latitude and longitude of your current location.
//2. Add some code that will call the function initMap. This needs to be called after the browser has determined the user's current location. Have a look at https://leafletjs.com/, see if you can make sense of the code in initMap().
//3. Modify initMap so that the map is centred on the user's current location. You will need to pass the latitude and longitude as arguments to the initMap() function.
//4. Add a marker to the map (see https://leafletjs.com/reference-1.3.4.html#marker) at the user's location.
//5. Add a popup to the marker that says 'You are here'. The popup should appear when the page loads.
//6. The variable takeaways (at the top of the script) is an array of GeoJSON objects. Add a forEach in the initMap() function that loops over this array and displays the name of each takeaway in the console. 
//7. Modify this so that the loop also displays the latitude of each takeaway
//8. Modify this so that the loop  adds markers to the map showing the location of each takeaway. You might have to adjust the zoom level so you can see all the markers
//9. Modify the loop so that you make each marker clickable. When clicked the name of the takeaway should be displayed in the console. It would probably be a good idea to use a closure to do this. Have a look at the example at the end of last week's lecture slides. 
//10. Instead of displaying the details for the takeaway in the console.log can you display them in the HTML page, in the div called 'info'. It already has some CSS applied so that it overlaps the map. 
//11. Have a look at https://leafletjs.com/reference-1.3.4.html#latlngbounds. How can you make the map automatically adjust the zoom level to show all the markers?
