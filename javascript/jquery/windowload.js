"use strict";
$(document).ready(function(){



/*************Load images at once**********************/
var gallery = document.querySelector(".gallery");
var images = document.querySelectorAll("img");
var loadSpinner = document.querySelector(".loader");


for(let img of images){
	img.style.visibility = 'hidden';
}

loadSpinner.style.visibility = 'visible';
var allLoaded = true;

//wait 1500ms for images to load
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
/**end Wait for images**/

/**onClicks**/
document.querySelector(".menu-icon").addEventListener("click", menuOnClick, false);
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


let buttonPressed = false;
/**
* onclick w/ animation for menu nav buttton
*/
function menuOnClick(){

	var nav = $("nav");
	if(!buttonPressed){
		nav.animate({left: '15px'});
		nav.animate({left: '-700px'});
		buttonPressed = true;
	}
	else{
		nav.animate({left: '0'});
		buttonPressed = false;
	}
}
$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom;
};
});