var container = document.getElementById('container');
var box = document.getElementById('box');
var div = box.getElementsByTagName('div');
var radio = getRadio(129, 20);
var audio = document.getElementById('audio');
var flag = true

for (var i = 0; i < div.length; i++) {
	div[i].style.background = "url(img/p" + (i + 1) + ".png)";
	div[i].style.transform = "rotateY(" + (i+1)*18 + "deg) translateZ(" + radio + "px)";
}

function getRadio (imgWidth, imgCount) {
	return Math.round(imgWidth / (2 * Math.tan(Math.PI / imgCount)) - 3)
}

var start = end = x = 0;
box.addEventListener('touchstart', function(e){
	event.preventDefault();
	start = e.targetTouches[0].pageX - x
});
box.addEventListener('touchmove', function(e){
	// if(flag){
	event.preventDefault();
	end = e.targetTouches[0].pageX
	x = end - start;
	box.style.transform = "rotateY(" + x + "deg)";
	// }
});
box.addEventListener('touchend', function(e){
	console.log(e);
});

$('#operator').click(function(e){
	if(audio.paused){
		audio.play();
		$('#operator').text('暂停');
	}else{
		audio.pause();
		$('#operator').text('播放');
	}
});

window.addEventListener('deviceorientation', function(e){
	var gamma = event.gamma;
	if(Math.abs(gamma) > 1){
		flag = false;
		box.style.transform = 'rotateY(' + e.gamma * 3 + 'deg)';
	}else{
		flag = true;
	}
	
})