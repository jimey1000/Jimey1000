$(document).ready(function() {

	// page loader
		$(".page-loader").fadeOut();
	
});

$('#my-images').DataTable({
		searching: false, 
		paging: false, 
		info: false,
		ordering:  false
});



$("#search-results").justifiedGallery({
	rowHeight: 200,
	margins: 12,
	captions: false,
	lastRow: 'justify'
});


// menu sticky
$(document).scroll(function() {
	if ($(document).scrollTop() >= 45) {
		$(".nav-bar").addClass("sticky-nav");
		$("main").addClass("sticky-main");
	} else {
		$(".nav-bar").removeClass("sticky-nav");
		$("main").removeClass("sticky-main");
	}
});

// back to top
$(document).scroll(function() {
	if ($(document).scrollTop() >= 300) {
		$(".back-to-top").fadeIn(1000);
	} else {
		$(".back-to-top").fadeOut(500);
	}
});


$('.back-to-top').click(function() {
	$("html, body").animate({scrollTop: 0}, 500);
});




// form validation
(function() {
	'use strict';
	window.addEventListener('load', function() {
	  // Fetch all the forms we want to apply custom Bootstrap validation styles to
	  var forms = document.getElementsByClassName('needs-validation');
	  // Loop over them and prevent submission
	  var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
		  if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		  }
		  form.classList.add('was-validated');
		}, false);
	  });
	}, false);
})();



