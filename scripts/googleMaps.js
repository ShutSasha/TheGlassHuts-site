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




// ! slider test
// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// let slideIndex = 0;

// function showSlide () {
// 	slides.forEach(slide => {
// 		slide.style.transform = `translateX(-${slideIndex * 100}%)`;
// 	});
// }

// function nextSlide () {
// 	if (slideIndex >= slides.length - 1) {
// 		slideIndex = 0;
// 	} else {
// 		slideIndex++;
// 	}
// 	showSlide();
// }

// function prevSlide () {
// 	if (slideIndex <= 0) {
// 		slideIndex = slides.length - 1;
// 	} else {
// 		slideIndex--;
// 	}
// 	showSlide();
// }

// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);