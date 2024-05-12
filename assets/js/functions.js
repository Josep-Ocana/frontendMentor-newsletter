// Selectors
const mainContainer = document.querySelector('#sign-up-container');
const successContainer = document.querySelector('#success-container');
const emailInput = document.querySelector('#email');
const formEmail = document.querySelector('#form');

// Validate Form
export function validateForm(e) {
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

// Send form
export function sendForm(email) {
	const emailSent = document.querySelector('#email-success');
	const dismisBtn = document.querySelector('#btn-success');

	emailSent.textContent = email;

	mainContainer.classList.add('hidden');
	successContainer.classList.remove('hidden');

	dismisBtn.addEventListener('click', returnMain);
}

// Return to Sign up container
export function returnMain() {
	mainContainer.classList.remove('hidden');
	successContainer.classList.add('hidden');
}

// Test email
export function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

// Show alerts
export function showAlert(message) {
	// Selectors row and exist
	const formRow = document.querySelector('.form-row');
	const exist = document.querySelector('.alert');

	// Prevent duplicate alerts (if exist .alert don't create more alerts)
	if (!exist) {
		// Create a alert container
		const divAlert = document.createElement('DIV');
		divAlert.classList.add('alert', 'message-alert');
		divAlert.textContent = message;
		formRow.appendChild(divAlert);

		// Invalid-input class to emailInput
		emailInput.classList.add('invalid-input');

		// Remove alerts
		setTimeout(() => {
			emailInput.value = '';
			divAlert.remove();
			emailInput.classList.remove('invalid-input');
		}, 2000);
	}
}
