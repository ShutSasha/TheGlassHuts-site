const initMap = () => {
	// create a map object centered on a specific location
	var map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 37.7749, lng: -122.4194 },
		zoom: 12
	});



	// add a marker to the map
	const marker = new google.maps.Marker({
		position: { lat: 37.7749, lng: -122.4194 },
		map: map,
		title: 'San Francisco'
	});
}

google.maps.event.addDomListener(window, 'load', initMap);

