$(function() {


	//namespace object
	let mySite = function() {

		return {
			mainBackground: $('div.background'),
			loadingScreen: $('div.loading-screen'),
			loaderButton: $('button.btn-load-page'),
			sotwImg: document.getElementById('SOTW'),
			output: document.getElementById('sotw'),

			initGallery: function(img, imgSrc){
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
			}
		};
	}();


	function animationDone(){
		mySite.loadingScreen.addClass("hidden");
		alert(mySite.loadingScreen);
	}




	/***Load Starter Page***/

	mySite.loaderButton.animate({opacity: '1'}, 350);
	mySite.loaderButton.on('click', mySite.loadMainPage);
	// mySite.output.onload = function(){
	// 	mySite.output.style.opactiy = 1;
	// }
	/***End Starter Page***/	

	/***Start Picks page***/
	// mySite.initGallery(document.getElementById("SOTW"), "/images/reptillia.jpg");
	// load gallery
	let gallery = Array.from(document.images).slice(0,(document.images.length-1));
	let randNum = 0;
	let randImgPath = "/";
	let sotw = "";
	//random img grab for all img in gallery
	for (let img of gallery) {
		randNum = Math.floor((Math.random()*4));
		switch(randNum){
			case 0:
				randImgPath = "/images/Divine_Feminine.png";
				sotw = "Divine Feminine - Mac Miller";
				break;
			case 1:
				randImgPath = "/images/reptillia.jpg";
				sotw = "Reptillia - The Strokes";
				break;
			case 2: 
				randImgPath = "/images/BostonBoston.jpg";
				sotw = "Boston - Boston";
				break;
			case 3:
				randImgPath = "/images/SgtPepper-1.jpg";
				sotw = "Sgt. Pepper Lonley Hearts Club Band";
				break;
		}
		mySite.initGallery(img, randImgPath);
	}//end load gallery
	mySite.initGallery(mySite.sotwImg, randImgPath);
	// mySite.displayText(sotw);


// mySite.imageInit(document.images[1]);
/***End Picks page***/


});
