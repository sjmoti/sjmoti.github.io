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
			// show learn more buttons
			toggleButton.removeAttribute("hidden");

			// add a listener for each button
			toggleButton.addEventListener('click', function(){
				fullTextWrapper = this.parentElement.parentElement.querySelector('.full-text');
			

				toggleButtonText = this.querySelector('.btn-text');
				toggleButtonArrow = this.querySelector('.helper-arrow')

				//change attributes and text if full text is show or hidden
				//if hidden
				if (!fullTextWrapper.hasAttribute('hidden')) {
					toggleButtonText.innerText = 'LEARN MORE';
					fullTextWrapper.setAttribute('hidden', true);
					toggleButton.setAttribute('aria-expanded', false);
					toggleButton.classList.add('downArrow-clear-btn-style');
					toggleButton.classList.remove('upArrow-clear-btn-style');
					toggleButtonArrow.classList.add('blueArrowDown');
					toggleButtonArrow.classList.remove('blueArrowUp');
				//if not hidden
				} else {
					toggleButtonText.innerText = 'SHOW LESS';
					fullTextWrapper.removeAttribute('hidden');
					toggleButton.setAttribute('aria-expanded', true);
					toggleButton.classList.remove('downArrow-clear-btn-style');
					toggleButton.classList.add('upArrow-clear-btn-style');
					toggleButtonArrow.classList.add('blueArrowUp');
					toggleButtonArrow.classList.remove('blueArrowDown');
				}
			})
		});
	}

});