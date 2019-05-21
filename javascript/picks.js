$(function() {


	//namespace object
	let mySite = function() {

		return {
			mainBackground: $('div.background'),
			loadingScreen: $('div.loading-screen'),
			loaderButton: $('button.btn-load-page'),
			sotwImg: document.getElementById('SOTW'),
			output: document.getElementById('sotw-out'),

			initGalleryImg: function(img, imgSrc){
					let dynamicImg = new Image();
					dynamicImg.onload = function() {
						img.src = this.src;
					};
					dynamicImg.src = imgSrc;
			},
			//init gallery images as dynamic
			imageInit: function(img){
				//init images

				let dynamicImg = new Image();
				dynamicImg.onload = function() {
					img.src = this.src;
				};
				dynamicImg.src = "/images/Divine_Feminine.png";
				
			},
			loadMainPage: function(){
				mySite.mainBackground.removeClass('hidden');
				mySite.loadingScreen.find('.img-chaedles-picks').animate({opacity: '0.0'}, "500");
				mySite.loadingScreen.find('.overlay').animate({opacity: '0'}, 
				{
					duration: 500, 
						// on complete, display main page
						complete: function(){
							mySite.mainBackground.css("opacity", "0");
							mySite.loadingScreen.addClass('hidden');
							mySite.mainBackground.animate(
							{
								opacity: '1'
							},
							{
								duration: 350,
							}
							);
						}
					}
					);
				mySite.loaderButton.css("border", "none").animate(
				{
					opacity: '0'
				},
				{
					duration: 500
				});
			},

			waitLoadButton: function() {
				loaderButton.removeClass('hidden');
				alert(loaderButton);
			},
			displayText(text){
				mySite.output.innerHTML = text;
			},
			initRandomGallery(gallery){
				let randNum = 0;
				let randImgPath = "/";
				let sotw = "";
				let albums = ["/images/Divine_Feminine.png", "/images/reptillia.jpg", "/images/BostonBoston.jpg", "/images/SgtPepper-1.jpg"];
				//random img grab for all img in gallery
				for (let img of gallery) {
						randNum = Math.floor((Math.random()*4));
					mySite.initGalleryImg(img, albums[randNum]);
				}//end load gallery

				mySite.initGalleryImg(mySite.sotwImg, albums[randNum]);
				mySite.displayText(albums[randNum]);
			}
		};
	}();


	function animationDone(){
		mySite.loadingScreen.addClass("hidden");
		alert(mySite.loadingScreen);
	}




	

	/***Start Picks page***/
	// load gallery
	let gallery = Array.from(document.images).slice(0,(document.images.length-1));
	mySite.initRandomGallery(gallery);
	// let randNum = 0;
	// let randImgPath = "/";
	// let sotw = "";
	// let albums = ["/images/Divine_Feminine.png", "/images/reptillia.jpg", "/images/BostonBoston.jpg", "/images/SgtPepper-1.jpg"];
	// //random img grab for all img in gallery
	// for (let img of gallery) {
	// 	randNum = Math.floor((Math.random()*4));
	// 	mySite.initGalleryImg(img, albums[randNum]);
	// }//end load gallery
	// mySite.initGalleryImg(mySite.sotwImg, albums[randNum]);
	// mySite.displayText(sotw);


// mySite.imageInit(document.images[1]);
/***End Picks page***/


});
