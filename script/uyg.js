$(document).ready(function() {


	// cut the mustard
if ('querySelector' in document && 
	'addEventListener' in window) {

	var toggleButtons = document.querySelectorAll('.toggle-content');
	var fullTextWrappers = document.querySelectorAll('.full-text');
	var fullText;
	var toggleButtonText;
	
	[].forEach.call(fullTextWrappers, function(fullTextWrapper) {
		// hide all full text on load
		fullTextWrapper.setAttribute('hidden', true);
	});

	[].forEach.call(toggleButtons, function(toggleButton) {
		// show toggle more buttons
		toggleButton.removeAttribute("hidden");



	});

}

});