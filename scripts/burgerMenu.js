const burger = document.querySelector('.burger');
const HTML = document.querySelector('html');

burger.addEventListener('click', function () {
	this.classList.toggle('active');
	if (burger.classList.contains('active')) {
		HTML.style.overflowY = 'hidden';
	}
	else {
		HTML.style.overflowY = 'visible';
	}
	document.querySelector('.nav-header').classList.toggle('open');
})