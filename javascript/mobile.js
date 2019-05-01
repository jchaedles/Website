/* nav bar scroll animation */
window.onscroll = function() {
	scrollFunction();
}

function scrollFunction(){
	//if body has been scrolled up more than 20px
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		document.querySelector(".navigation-bar").style.top = "0";
	}
	else {
    document.querySelector(".navigation-bar").style.top = "-50px";
  }
}

/************/