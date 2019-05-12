$(function() {
	let mySite = function() {

		return {
			mainBackground: $('div.background'),
			loadingScreen: $('div.loading-screen'),
			loaderButton: $('button.btn-load-page'),

			loadMainPage: function(){
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




			}
		};
	}();
function animationDone(){
				mySite.loadingScreen.addClass("hidden");
}
/***Load Starter Page***/

mySite.loaderButton.on('click', mySite.loadMainPage);
/***End Starter Page***/	

/***Start Picks page***/

/***End Picks page***/


});
