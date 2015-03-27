function start() {
	 var myWindow=window.open('level_1.html');
	myWindow.focus();
}

window.onload=function() {
	var element = Math.ceil(Math.random()*8);
	localStorage.setItem("element", element );
	localStorage.lives = 3;
	document.getElementById("rule").innerHTML = " Map :" + element + " to " + element + " others to p";
	}