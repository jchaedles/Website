"use strict";
console.log("yeet");
$(document).ready(function(){
	// var firstButton = $('.button1');
	// console.log("this is the first button\nay: " + firstButton);
	// firstButton.click(onClick);

	// function onClick(){
	// 	alert('callbakc');
	// }
	// var textJs = "<p>Js Text.</p>";
	// var textJq = $("<p></p>").text("Jq text");
	// var textDOM = document.createElement("p");
	// textDOM.innerHTML = "DOM text";
	// let button1 = document.querySelector(".button1");
	// button1.innerHTML = "yeet";

	// $("body").append(textJs, textJq, textDOM);
	
	let button1 = $(":button")
	button1.on('click', onHideClick);
	button1.hide();
	$('.img-gallery').hide('0', function(){
		console.log("images hidden");
	});
	console.log(button1);

	//after window loads
	$(window).on("load", imgLoaded);

	function imgLoaded(){
		// $('img').show('0', function(){
		// });
		// $('.img-gallery').show('200', function(){
			// button1[0].style.visibility = 'visible';
		// });
		$('.img-gallery').slideToggle('200');
		button1[0].style.visibility = 'visible';
		button1.slideToggle('200');
	}
	function onHideClick(){
		let images = $('img');
		button1[0].innerHTML = "Show";
		// hide images on click
		images.hide('200', function() {
			button1.off("click");
			// change handler to show on click
			button1.on("click", function(){
				button1[0].innerHTML = "Hide Pictures";
				$('img').show('200', function() {
					console.log("img OUTTA here");
				});
				button1.off("click");
				button1.on("click", onHideClick);
			});
		});

	}
});
