const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});
const form = document.querySelector('.contact-form');
const submitButton = document.querySelector('.form-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Your logic here (e.g., send data to server, show success message)
    // For demonstration purposes, let's just show an alert:
    alert('Form submitted successfully!');
});
