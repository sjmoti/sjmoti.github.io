$(document).ready(function() {


function typeWrite(){
	if (i< txt.length){
		document.getElementById("uyg-text").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWrite, speed);
	}
}

var i = 0;
var txt = 'Unleash Your Geek!'
var speed = 50;
typeWrite();


});