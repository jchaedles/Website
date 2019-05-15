$(function() {


	//namespace object
	let mySite = function() {

		return {
			mainBackground: $('div.background'),
			loadingScreen: $('div.loading-screen'),
			loaderButton: $('button.btn-load-page'),

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
	/***End Starter Page***/	

	/***Start Picks page***/
	mySite.initGallery(document.getElementById("SOTW"), "/images/reptillia.jpg");
	// load gallery
	let gallery = Array.from(document.images).slice(1,9);
	for (let img of gallery) {
		mySite.initGallery(img, "/images/Divine_Feminine.png");
	}//end load gallery


// mySite.imageInit(document.images[1]);
/***End Picks page***/


});
