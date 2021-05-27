// target submit button
const submit = document.querySelector('#submit');

// target error messages
const nameError = document.querySelector('.nameError');
const subjectError = document.querySelector('.subjectError');
const emailError = document.querySelector('.emailError');
const messageError = document.querySelector('.messageError');

// onclick event
submit.onclick = function (event) {
	event.preventDefault();
	console.log('message sent');

	const name = document.querySelector('#name').value.trim();
	const subject = document.querySelector('#subject').value;
	const email = document.querySelector('#email').value.trim();
	const message = document.querySelector('#message').value;
	if (testLen(name, 5)) {
		nameError.classList.add('hide');
		nameError.classList.remove('show');
	} else {
		nameError.classList.add('show');
		nameError.classList.remove('hide');
	}

	if (subject.length >= 15) {
		subjectError.classList.add('hide');
		subjectError.classList.remove('show');
	} else {
		subjectError.classList.add('show');
		subjectError.classList.remove('hide');
	}

	if (validateEmail(email)) {
		emailError.classList.add('hide');
		emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
		emailError.classList.remove('hide');
	}

	if (testLen(message, 25)) {
		messageError.classList.add('hide');
		messageError.classList.remove('show');
	} else {
		messageError.classList.add('show');
		messageError.classList.remove('hide');
	}
};

function validateEmail(emailAddy) {
	const emailExpression =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const isEmailVaild = emailExpression.test(emailAddy);
	return isEmailVaild;
}

function testLen(elm, len) {
	if (elm.length > len) {
		alert('Message sent!');
		return true;
	} else {
		return false;
	}
}
