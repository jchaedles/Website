(function() {
	//hide page until loader is done, 
	//outside jquery bc fuck waiting for the page to load just to hide it
	let mainBackground = document.querySelector('.background')
	mainBackground.classList.add('hidden');
	$(document).ready(function() {
		/***Load Starter Page***/
		// $('.loading-screen').removeClass('hidden');
		let loadingScreen = document.querySelector('.loading-screen');
		loadingScreen.classList.remove('hidden');

		let loaderButton = document.querySelector('.btn-load-page');
		loaderButton.addEventListener('click', loadMainPage, false);
		/***End Starter Page***/	

		/***Start Picks page***/

		/***End Picks page***/

		/***functions***/
		function loadMainPage(){
			// jqImg = $('.loading-screen');
			mainBackground.classList.remove('hidden');
			let img = document.querySelector('.img-chaedles-picks');
			let overlay = document.querySelector('.overlay');
			// img.style.position = 'absolute';
			loaderButton.style.animation = 'slideLeft 1s linear forwards';
			overlay.style.animation = 'slideLeft 1s linear forwards';
			img.style.animation = 'slideLeft 1s linear forwards';
			// jqImg.add('hidden');
			// jqImg.add()
			// jqImg.animate({left: '-00px'});
			// loadingScreen.classList.add('hidden');
		}
	});
})();
