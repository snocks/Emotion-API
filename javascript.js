
function request(config , cb) {
	var xhr = new XMLHttpRequest();
	xhr.open(config.method,config.url, true);
	xhr.setRequestHeader("Content-Type","application/json");
	xhr.setRequestHeader("Ocp-Apim-Subscription-Key","668a9b304de3436d82815b549b0dab73");
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var result = JSON.parse(xhr.responseText);
			cb(undefined, result);
		}else if(xhr.readyState == 4 && xhr.status !== 200){
			alert("Fail");
		}
	};
	var data = '{"url":"' + config.urlImage + '"}';
	xhr.send(data);
}
function analyzFace(images, cb) {
	request({
		method: "POST",
		url: "https://api.projectoxford.ai/emotion/v1.0/recognize",
		urlImage: randomImages(images)
		}, 
		function( error,data) {
			if(isHappy(data)){
				cb(undefined, {
					isHappy:true,
					mess:"Fantastic, Keep going in your Happiness :)"
				});
			}else{
				cb(undefined, {
					isHappy:false,
					mess:'we will make you so happy'
				});
			}
	});
}
function isHappy(data){
	return data[0].scores.happiness > data[0].scores.sadness;
}
function randomImages(list) {
	return list[Math.floor(Math.random() * list.length)];
 
}



