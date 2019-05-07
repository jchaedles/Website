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
			mainBackground.classList.remove('hidden');
			loadingScreen.classList.add('hidden');
		}
	});
})();
