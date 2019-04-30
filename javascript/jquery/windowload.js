"use strict";
// $(document).ready(function(){
// 	var images = $("img");
// 	// images.each(function(idx,img){
// 	// 	img.style.visibility = 'hidden';
// 	// });
// 	let gallery = $('.gallery');
// 	gallery[0].classList.addClass('hidden');
// 	$(window).on("load", windowLoaded);

// 	function windowLoaded(){
// 		// gallery.slideDown('400', function() {
// 		// 	console.log("gallery should b open");
// 		// });
// 			images.each(function(idx,img){
// 				img.style.visibility = 'visible';
// 			});
// 	}
// });

var gallery = document.querySelector(".gallery");
var images = document.querySelectorAll("img");
var loadSpinner = document.querySelector(".loader");

for(let img of images){
	img.style.visibility = 'hidden';
}

loadSpinner.style.visibility = 'visible';
var allLoaded = true;

/**
* Wait for images to load
*/
setTimeout(function(){
	// alert(checkLoad(images));
	// if all images loaded
	if(checkLoad(images)){
		console.log("show it");
		loadSpinner.classList.add("fade-out");
		for(let img of images){
			// set all images to visible, remove spinner
			img.style.visibility = 'visible';
			img.classList.add("fade-in");
			
		}
		// loadSpinner.style.visibility = 'hidden';
	}
}, 1500);

/**
* Returns true on if all images in image_list are loaded
*/
function checkLoad(image_list){
	for(let img of image_list){
		if(!img.complete){
			return false;
		}
	}

	console.log(true);
	return true;
}
