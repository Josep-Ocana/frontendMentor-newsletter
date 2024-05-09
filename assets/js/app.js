// Selectors
const mainContainer = document.querySelector('#sign-up-container');
const successContainer = document.querySelector('#success-container');
const formEmail = document.querySelector('#form');
const emailInput = document.querySelector('#email');

// AddEvenListener
document.addEventListener('DOMContentLoaded', () => {
	form.addEventListener('submit', validateForm);
});

// Functions
function validateForm(e) {
	e.preventDefault();
	const email = emailInput.value.trim();

	// Checked if email is empty
	if (email === '') {
		showAlert('Email is empty');
		return;
	}

	// Validates email
	if (!validateEmail(email)) {
		showAlert('Valid Email required');
		return;
	}
	formEmail.reset();
	sendForm(email);
}

// Email has been sent
function sendForm(email) {
	const emailSent = document.querySelector('#email-success');
	const dismisBtn = document.querySelector('#btn-success');

	emailSent.textContent = email;

	mainContainer.classList.add('hidden');
	successContainer.classList.remove('hidden');

	dismisBtn.addEventListener('click', returnMain);
}

function returnMain() {
	console.log('he entrado en la funcion retorno');

	mainContainer.classList.remove('hidden');
	successContainer.classList.add('hidden');
}

// Test email
function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

// Show alerts
function showAlert(message) {
	// Selectors row and exist
	const formRow = document.querySelector('.form-row');
	const exist = document.querySelector('.alert');

	// Prevent duplicate alerts (if exist .alert don't create more alerts)
	if (!exist) {
		// Create a alert container
		const divAlert = document.createElement('DIV');
		divAlert.classList.add('exist', 'message-alert');
		divAlert.textContent = message;
		emailInput.classList.add('invalid-input');
		formRow.appendChild(divAlert);

		// Remove alerts
		setTimeout(() => {
			divAlert.remove();
			emailInput.classList.remove('invalid-input');
			emailInput.value = '';
		}, 2000);
	}
}
