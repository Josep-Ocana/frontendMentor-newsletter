import {
	validateForm,
	validateEmail,
	returnMain,
	showAlert,
	sendForm,
} from './functions.js';

(function () {
	// Change svg image when resize screen
	window.addEventListener('resize', () => {
		const img = document.querySelector('.hero-img');
		if (window.innerWidth <= 510) {
			img.src = 'assets/images/illustration-sign-up-mobile.svg';
		} else {
			img.src = 'assets/images/illustration-sign-up-desktop.svg';
		}
	});

	const formEmail = document.querySelector('#form');
	formEmail.addEventListener('submit', validateForm);
})();
