'use strict';
class ImageLoader{
	constructor(img, loaded){
		this.img = img;
		this.loaded = loaded;
	}
	get isLoaded(){
		return this.img.complete && this.img.naturalHeight !== 0;
	}
	get image()
	{
		return this.img;
	}
	hide(){
		this.img.style.visibility = 'hidden';
	}
	show(){
		this.img.style.visibility = 'visible';
		this.img.style.animation = 'fadeIn 1s linear normal';
	}
}
function isMobileDevice() {
	return (typeof window.orientation !== "undefined") 
	|| (navigator.userAgent.indexOf('IEMobile') !== -1);
}
function imgLoaded(imgElement){
	return imgElement.complete && imgElement.naturalHeight !== 0;
}

function showImages(){

	console.log("showImage " + this);
}

var imageLoaders = [true]; 
var images = document.getElementsByTagName('img');
var spinner = document.querySelector(".loader");
spinner.style.visibility = 'visible';
var overlay = document.querySelector(".overlay");
var overlayBlckQuotes = document.getElementsByTagName("blockquote");

/*mobile check*/
if((window.screen.width > 480)){
	console.log("NOT MOBILE");
	overlayBlckQuotes[0].style.visibility = 'hidden';
	//hide images, add them to the image loader
	for(var img of images){
		var imgL = new ImageLoader(img, imgLoaded(img));
		imageLoaders.push(imgL);
		imgL.hide();
	}
	var done = false;
	//check if all images are loaded after 1 second
	setTimeout(function(){
		for(var i = 1; i < imageLoaders.length; i++){
			console.log("loaded? " + i + ": " + imageLoaders[i] + "\n" +  imageLoaders[i].isLoaded);
			imageLoaders[0] = imageLoaders[i].isLoaded;
		}	
		done = true;
	}, 1000);

	//remove spinner
	setTimeout(function(){
		console.log("done?\n" + done);
		if(imageLoaders[0]){
			spinner.style.animation = 'goaway 1s linear forwards';

			

		}
	}, 1011);

	setTimeout(function(){
		for(var i = 1; i < imageLoaders.length; i++){
			imageLoaders[i].show();
		}
		overlayBlckQuotes[0].style.visibility = 'visible';
		overlayBlckQuotes[0].style.animation = 'fadeIn 1.5s linear forwards';
	}, 2021);
}
else{
	//is mobile
	console.log("mobile");
}
//load the 
// while(!done){
	
// }
//skip first element, indicates if all files are loaded or not
// }
console.log("yeet end");

//hide files
// for(var i = 0; i < images.length; i++){
// 	images[i].style.visibility = 'hidden';
// 	console.log("element " + i + " hidden");
// }	



// 	loader.style.animation = 'goaway 2s linear';
// 	for(var i = 0; i < images.length; i++){
// 		images[i].style.visibility = 'visible';
// 		console.log("element " + i + " visible");
// 	}	
// 	loader.style.visibility = 'hidden';

// check if images are loaded
//check for 7 seconds
// while(!loaded){
// 	for (var i = 0; i < images.length; i++) {
// 		if(!imgLoaded(images[i])){
// 			loaded = false;
// 		}
// 	}
// 	//if loaded, hide loadar spin thing
// 	if(loaded){
// 		console.log('totally loaded');
// 		loader.classList.add("hidden");

// 	}
// 	else
// 	{
// 		loader.classList.remove("hidden");
// 		console.log("not loaded");
// 	}

// }