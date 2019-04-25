'use strict';
function imgLoaded(imgElement){
	return imgElement.complete && imgElement.naturalHeight !== 0;
}


var images = document.getElementsByTagName('img');
var loader = document.querySelector(".loader");
let loaded = false;
console.log("yeet");
// check if images are loaded
//check for 7 seconds
while(!loaded){
	for (var i = 0; i < images.length; i++) {
		if(!imgLoaded(images[i])){
			loaded = false;
		}
	}
	//if loaded, hide loadar spin thing
	if(loaded){
		console.log('totally loaded');
		loader.classList.add("hidden");

	}
	else
	{
		loader.classList.remove("hidden");
		console.log("not loaded");
	}

}