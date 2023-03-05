const burger = document.querySelector('.burger');
const bodyHTML = document.querySelector('body');

burger.addEventListener('click', function () {
	this.classList.toggle('active');
	if (burger.classList.contains('active')) {
		bodyHTML.style.overflow = 'hidden';
	}
	else {
		bodyHTML.style.overflow = 'visible';
	}
	document.querySelector('.nav-header').classList.toggle('open');
})