///////////////////
//  Website Scripts
///////////////////

document.addEventListener("DOMContentLoaded", function() {

	console.log('script executed')

	// Load nav content
	const navContainer = document.getElementById("navContainer");
	fetch("/assets/html/nav.html")
		.then(response => response.text())
	  	.then(data => {
			navContainer.innerHTML = data;
	  	});

	// Toggle class
	function toggleNav() {
		var element = document.getElementById("navLinks");
		element.classList.toggle("show");
	}

	// Check for mobile menu icon click
	$('#menuIcon').click(function(){
		$('ul').toggleClass('show');
		console.log('toggled menu class');
	});
  
	// Load footer content
	const footerContainer = document.getElementById("footerContainer");
	fetch("/assets/html/footer.html")
	  	.then(response => response.text())
	  	.then(data => {
			footerContainer.innerHTML = data;
	  	});
});
