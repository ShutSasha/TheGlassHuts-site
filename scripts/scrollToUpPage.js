const scrollToUp = document.querySelector('.scrollTop');

window.onscroll = () => {
	if (window.scrollY > 600) {
		scrollToUp.classList.remove('hideScroll');
		scrollToUp.classList.add('showScroll');
		setTimeout(() => {
			scrollToUp.style.display = 'block';
		}, 1000);
	}

	else if (window.scrollY < 600) {
		scrollToUp.classList.remove('showScroll');
		scrollToUp.classList.add('hideScroll');
		setTimeout(() => {
			scrollToUp.style.display = 'none';
		}, 1000);
	}

	scrollToUp.onclick = () => {
		window.scrollTo(0, 0)
	}

}
