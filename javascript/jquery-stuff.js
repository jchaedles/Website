$(document).ready(function(){
	// var loaded = false;
	// var imagesLoaded = 0;
	// var totalImages = $('img').length;
	// //remove all images from view before load
	// $('img').each(function(idx,img){
	// 	$('img').on('load', imageLoaded);
	// 	$('img').css('visibility', 'hidden');
	// });
	// //show spinner
	// var spinner = $('.loader');
	// spinner.css('visibility', 'visible');

	// function imageLoaded(){
	// 	imagesLoaded++;
	// 	if (imagesLoaded == totalImages) {
	// 		allImagesLoaded();
	// 	}
	// }
	// function allImagesLoaded(){
	// 	loaded = true;
	// 	console.log("loaded status: " + loaded);
	// }
	var images = document.querySelectorAll("img");
	for(let im of images){
		im.style.visibility = 'hidden';
	}
	preloadImages(callbacko);
	function preloadImages(callback){
		let counter = 0;
		let imgs = document.querySelectorAll(".img");
		function onLoad(){
			counter++;
			if(counter == sources.length)
				callback();
		}
		//loop through images and add onLoad
		for(let img of imgs) {
			img.addEventListener('load', onLoad);
		}
	}

	function callbacko(){
		console.log("callback!");
		$('img').each(function(idx,img){
			$('img').css('visibility', 'visible');
		});
	}
});