(function($){

	ajaxCall("data/contacts.json", function(rsp){
		console.log(rsp);
		$("body").append(rsp);
	});
	



	function getHTTPObject(){
		let xhr;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}
		if(window.ActiveXObject){
			xhr = new ActiveXObject("Msxm112.XMLHTTP");
		}
		return xhr;
	}	

	function ajaxCall(dataURL, callback){
		let req = getHTTPObject();

		req.onreadystatechange = function() {
			console.log(req.readyState);
			if(req.readyState === 4){
				console.log(typeof req.responseText);
				var rsp = req.responseText;
				if(typeof callback === "function"){
					callback(rsp);
				}
			}
	}
// get all info 
req.open("GET", dataURL, true);

// send
req.send(null);
}
})(jQuery);

