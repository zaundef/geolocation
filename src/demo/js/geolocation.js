$(document).ready(function() {
	get_location();
});

var gApiKey = 'AIzaSyBhIkdNM0xgD9sO8GgRFvtHTGEXVF6sahw';
var gMapsUrl = 'https://maps.googleapis.com/maps/api/geocode/json?sensor=false&key='+gApiKey;

function get_location() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(show_position);
	} else {
		alert('your navigator does not support geolocation');
	}
}

function show_position(pos) {
	var lat = pos.coords.latitude;
	var lng = pos.coords.longitude;

	var language = navigator.language || navigator.userLanguage;

	var geoUrl = gMapsUrl + '&latlng=' + lat + ',' + lng + '&language=' + language;

	$.get(geoUrl, function(geoData) {
		if (geoData !== undefined && Array.isArray(geoData.results)) {
			var results = geoData.results;
			for (var i=0;i<results.length;i++) {
				if (results[i].types[0] === 'locality') {
					$('#location').html(results[i].formatted_address);
				}
			}
		}
	});
}