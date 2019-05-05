var popBar = document.querySelector(".pop-bar");
var background = document.querySelector('.background');

background.style.backgroundColor = 'white';
// alert(popBar);

var ctx = popBar.getContext("2d");
if(ctx !== null){
	console.log("not null");
	ctx.beginPath();
	ctx.rect(20, 20, 150, 150);
	ctx.fillStyle = "red";
}
else{
	alert("null!");
}