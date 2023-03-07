const burger = document.querySelector('.burger');
const HTML = document.querySelector('html');

burger.addEventListener('click', function () {
	this.classList.toggle('active');
	if (burger.classList.contains('active')) {
		HTML.style.overflow = 'hidden !important';
	}
	else {
		HTML.style.overflow = 'visible !important';
	}
	document.querySelector('.nav-header').classList.toggle('open');
})