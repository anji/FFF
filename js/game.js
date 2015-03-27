
var current = 1;
var pressed = 1;
var mar_val = 1;
var mar = [];
var counter = 0;
var element;
//var lives = 3;
var countDownInterval = null;


function increase_speed() {
	var speed;
	speed = document.getElementById("scroller").getAttribute("scrolldelay");
	document.getElementById("scroller").setAttribute("scrolldelay", speed-10);
	
	
}


 

function upTime(countTo) {
	  var now,difference,mins,secs;
	  now = new Date();
	  countTo = new Date(countTo);
	  difference = (now-countTo);

	  //days=Math.floor(difference/(60*60*1000*24)*1);
	  //hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
	  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000));
	  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000);

	  //document.getElementById('days').firstChild.nodeValue = days;
	  //document.getElementById('hours').firstChild.nodeValue = hours;
	  document.getElementById('minutes').firstChild.nodeValue = mins;
	  document.getElementById('seconds').firstChild.nodeValue = secs;

	  clearTimeout(upTime.to);
	  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}

function randomize_table() {
	var arr = [];
	var randomnumber,found,i;
	while(arr.length < 9){
	  randomnumber=Math.ceil(Math.random()*9);
	  found=false;
	  for(i=0;i<arr.length;i++){
		if(arr[i]==randomnumber){
			found=true;
			break;
		}
	  }
	  if(!found)
		  arr[arr.length]=randomnumber;
	}
	//document.write(arr);
	
	
	if(arr[0] != 9) {
		document.getElementById("a1").innerHTML = arr[0];
		document.getElementById("a1").setAttribute("data-value", arr[0]);
	}
	else {
		document.getElementById("a1").innerHTML = 'x';
		document.getElementById("a1").setAttribute("data-value", arr[0]);
	}
	
	
	if(arr[1] != 9) {
		document.getElementById("a2").innerHTML = arr[1];
		document.getElementById("a2").setAttribute("data-value", arr[1]);
	}
	else {
		document.getElementById("a2").innerHTML = 'x';
		document.getElementById("a2").setAttribute("data-value", arr[1]);
	}
	
	if(arr[2] != 9) {
		document.getElementById("a3").innerHTML = arr[2];
		document.getElementById("a3").setAttribute("data-value", arr[2]);
	}
	else {
		document.getElementById("a3").innerHTML = 'x';
		document.getElementById("a3").setAttribute("data-value", arr[2]);
	}
	
	
	
	
	if(arr[3] != 9) {
		document.getElementById("b1").innerHTML = arr[3];
		document.getElementById("b1").setAttribute("data-value", arr[3]);
	}
	else {
		document.getElementById("b1").innerHTML = 'x';
		document.getElementById("b1").setAttribute("data-value", arr[3]);
	}
	
	
	if(arr[4] != 9) {
		document.getElementById("b2").innerHTML = arr[4];
		document.getElementById("b2").setAttribute("data-value", arr[4]);
	}
	else {
		document.getElementById("b2").innerHTML = 'x';
		document.getElementById("b2").setAttribute("data-value", arr[4]);
	}
	
	if(arr[5] != 9) {
		document.getElementById("b3").innerHTML = arr[5];
		document.getElementById("b3").setAttribute("data-value", arr[5]);
	}
	else {
		document.getElementById("b3").innerHTML = 'x';
		document.getElementById("b3").setAttribute("data-value", arr[5]);
	}
	
	
	
	if(arr[6] != 9) {
		document.getElementById("c1").innerHTML = arr[6];
		document.getElementById("c1").setAttribute("data-value", arr[6]);
	}
	else {
		document.getElementById("c1").innerHTML = 'x';
		document.getElementById("c1").setAttribute("data-value", arr[6]);
	}
	
	
	if(arr[7] != 9) {
		document.getElementById("c2").innerHTML = arr[7];
		document.getElementById("c2").setAttribute("data-value", arr[7]);
	}
	else {
		document.getElementById("c2").innerHTML = 'x';
		document.getElementById("c2").setAttribute("data-value", arr[7]);
	}
	
	if(arr[8] != 9) {
		document.getElementById("c3").innerHTML = arr[8];
		document.getElementById("c3").setAttribute("data-value", arr[8]);
	}
	else {
		document.getElementById("c3").innerHTML = 'x';
		document.getElementById("c3").setAttribute("data-value", arr[8]);
	}
	
	
}

function marqueegen() {
	mar = [];
	var randomnumber,found,i;
	for(i=0;i<10;i++) {
	  randomnumber=Math.ceil(Math.random()*8);
	  mar.push(randomnumber);
			
	}
	
	document.getElementById("scroller").innerHTML = mar.join("  ");
	
}


function out_elements() {
	element = Math.ceil(Math.random()*8);
	document.getElementById("rule").innerHTML = " Map :" + element + " to " + element + " others to p";
	
	
	
}

function countdown() {
    var seconds = 60;
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            alert("Game over");
        }
    }
    tick();
}




function onstart() {
      randomize_table();
      element = localStorage.getItem("element"); 
	  marqueegen();
	  countdown();
	  

	  //var start = new Date();
	  //upTime(start); // ****** Change this line!
}



window.onload=function() {
	
		var element = Math.ceil(Math.random()*8);
		localStorage.setItem("element", element );
		localStorage.lives = 3;
		document.getElementById("rule").innerHTML = " Map :" + element + " to " + element + " others to p";
		
	  onstart();
	}

function scorer() {
	var cur;
	cur = document.getElementById("score").getAttribute('data-value');
	document.getElementById("score").innerHTML = counter+1;
	document.getElementById("score").setAttribute("data-value", counter+1);
	counter = counter+1;
	increase_speed();
	
}


function myFunction_a1() {
	pressed = document.getElementById("a1").getAttribute('data-value');
	if(  (element != mar[0]  && pressed == 9) || ( element == mar[0] && pressed == element ) ) {
    	scorer();
    	randomize_table();
    	//random_num();
    	mar.shift();
    	document.getElementById("scroller").innerHTML = mar.join("  ");;
    }
    else {
    	if(lives == 3) {
    		lives = 2;
    		document.getElementById("life3").style.display = 'none';
    	}
    	else if(lives == 2) {
    		lives = 1;
    		document.getElementById("life2").style.display = 'none';
    	}
    	else {
    		lives = 1;
    		document.getElementById("life1").style.display = 'none';
    	}
    	//onstart();
    	
    }
}

function myFunction_a2() {
	pressed = document.getElementById("a2").getAttribute('data-value');
	if((element != mar[0]  && pressed == 9) || ( element == mar[0] && pressed == element )) {
    	scorer();
    	randomize_table();
    	//random_num();
    	mar.shift();
    	document.getElementById("scroller").innerHTML =mar.join("  ");;
    }
    else {
    	if(lives == 3) {
    		lives = 2;
    		document.getElementById("life3").style.display = 'none' ;
    	}
    	else if(lives == 2) {
    		lives = 1;
    		document.getElementById("life2").style.display = 'none';
    	}
    	else {
    		lives = 1;
    		document.getElementById("life1").style.display = 'none';
    	}
    	//onstart();
    }
}

function myFunction_a3() {
	pressed = document.getElementById("a3").getAttribute('data-value');
	if((element != mar[0]  && pressed == 9) || ( element == mar[0] && pressed == element )) {
    	scorer();
    	randomize_table();
    	//random_num();
    	mar.shift();
    	document.getElementById("scroller").innerHTML = mar.join("  ");;
    }
    else {
    	if(lives == 3) {
    		lives = 2;
    		document.getElementById("life3").style.display = 'none';
    	}
    	else if(lives == 2) {
    		lives = 1;
    		document.getElementById("life2").style.display = 'none';
    	}
    	else {
    		lives = 1;
    		document.getElementById("life1").style.display = 'none';
    	}
    	//onstart();
    }
}

function myFunction_b1() {
	pressed = document.getElementById("b1").getAttribute('data-value');
	if((element != mar[0]  && pressed == 9) || ( element == mar[0] && pressed == element )) {
    	scorer();
    	randomize_table();
    	//random_num();
    	mar.shift();
    	document.getElementById("scroller").innerHTML = mar.join("  ");;
    }
    else {
    	if(lives == 3) {
    		lives = 2;
    		document.getElementById("life3").style.display = 'none';
    	}
    	else if(lives == 2) {
    		lives = 1;
    		document.getElementById("life2").style.display = 'none';
    	}
    	else {
    		lives = 1;
    		document.getElementById("life1").style.display = 'none';
    	}
    	//onstart();
    }
}

function myFunction_b2() {
	pressed = document.getElementById("b2").getAttribute('data-value');
	if((element != mar[0]  && pressed == 9) || ( element == mar[0] && pressed == element )) {
    	scorer();
    	randomize_table();
    	//random_num();
    	mar.shift();
    	document.getElementById("scroller").innerHTML = mar.join("  ");;
    }
    else {
    	if(lives == 3) {
    		lives = 2;
    		document.getElementById("life3").style.display = 'none';
    	}
    	else if(lives == 2) {
    		lives = 1;
    		document.getElementById("life2").style.display = 'none'
    	}
    	else {
    		lives = 1;
    		document.getElementById("life1").style.display = 'none';
    	}
    	//onstart();
    }
}

function myFunction_b3() {
	pressed = document.getElementById("b3").getAttribute('data-value');
	if((element != mar[0]  && pressed == 9) || ( element == mar[0] && pressed == element )) {
    	scorer();
    	randomize_table();
    	//random_num();
    	mar.shift();
    	document.getElementById("scroller").innerHTML = mar.join("  ");;
    }
    else {
    	if(lives == 3) {
    		lives = 2;
    		document.getElementById("life3").style.display = 'none';
    	}
    	else if(lives == 2) {
    		lives = 1;
    		document.getElementById("life2").style.display = 'none';
    	}
    	else {
    		lives = 1;
    		document.getElementById("life1").style.display = 'none';
    	}
    	//onstart();
    }
}

function myFunction_c1() {
	pressed = document.getElementById("c1").getAttribute('data-value');
	if((element != mar[0]  && pressed == 9) || ( element == mar[0] && pressed == element )) {
    	scorer();
    	randomize_table();
    	//random_num();
    	mar.shift();
    	document.getElementById("scroller").innerHTML = mar.join("  ");;
    }
    else {
    	if(lives == 3) {
    		lives = 2;
    		document.getElementById("life3").style.display = 'none';
    	}
    	else if(lives == 2) {
    		lives = 1;
    		document.getElementById("life2").style.display = 'none';
    	}
    	else {
    		lives = 1;
    		document.getElementById("life1").style.display = 'none';
    	}
    	//onstart();
    }
}

function myFunction_c2() {
	pressed = document.getElementById("c2").getAttribute('data-value');
	if((element != mar[0]  && pressed == 9) || ( element == mar[0] && pressed == element )) {
    	scorer();
    	randomize_table();
    	//random_num();
    	mar.shift();
    	document.getElementById("scroller").innerHTML = mar.join("  ");;
    }
    else {
    	if(lives == 3) {
    		lives = 2;
    		document.getElementById("life3").style.display = 'none';
    	}
    	else if(lives == 2) {
    		lives = 1;
    		document.getElementById("life2").style.display = 'none';
    	}
    	else {
    		lives = 1;
    		document.getElementById("life1").style.display = 'none';
    	}
    	//onstart();
    }
}

function myFunction_c3() {
	pressed = document.getElementById("c3").getAttribute('data-value');
	if((element != mar[0]  && pressed == 9) || ( element == mar[0] && pressed == element )) {
    	scorer();
    	randomize_table();
    	//random_num();
    	mar.shift();
    	document.getElementById("scroller").innerHTML = mar.join("  ");;
    }
    else {
    	if(lives == 3) {
    		lives = 2;
    		document.getElementById("life3").style.display = 'none';
    	}
    	else if(lives == 2) {
    		lives = 1;
    		document.getElementById("life2").style.display = 'none';
    	}
    	else {
    		lives = 1;
    		document.getElementById("life1").style.display = 'none';
    	}
    	//onstart();
    }
}



/*
function myFunction_a1() {
	pressed = document.getElementById("a1").getAttribute('data-value');
	if(pressed == mar_val) {
    	scorer();
    	random_num();
    }
    else {
    	document.getElementById("a1").innerHTML = "abcdef";
    }
}

function myFunction_a2() {
	pressed = document.getElementById("a2").getAttribute('data-value');
	if(pressed == mar_val) {
    	scorer();
    	random_num();
    }
    else {
    	document.getElementById("a2").innerHTML = "abcdef";
    }
}

function myFunction_a3() {
	pressed = document.getElementById("a3").getAttribute('data-value');
	if(pressed == mar_val) {
    	scorer();
    	random_num();
    }
    else {
    	document.getElementById("a3").innerHTML = "abcdef";
    }
}


function myFunction_b1() {
	pressed = document.getElementById("b1").getAttribute('data-value');
	if(pressed == mar_val) {
    	scorer();
    	random_num();
    }
    else {
    	document.getElementById("b1").innerHTML = "abcdef";
    }
}

function myFunction_b2() {
	pressed = document.getElementById("b2").getAttribute('data-value');
	if(pressed == mar_val) {
    	scorer();
    	random_num();
    }
    else {
    	document.getElementById("b2").innerHTML = "abcdef";
    }
}

function myFunction_b3() {
	pressed = document.getElementById("b3").getAttribute('data-value');
	if(pressed == mar_val) {
    	scorer();
    	random_num();
    }
    else {
    	document.getElementById("b3").innerHTML = "abcdef";
    }
}


function myFunction_c1() {
	pressed = document.getElementById("c1").getAttribute('data-value');
	if(pressed == mar_val) {
    	scorer();
    	random_num();
    }
    else {
    	document.getElementById("c1").innerHTML = "abcdef";
    }
}

function myFunction_c2() {
	pressed = document.getElementById("c2").getAttribute('data-value');
	if(pressed == mar_val) {
    	scorer();
    	random_num();
    }
    else {
    	document.getElementById("c2").innerHTML = "abcdef";
    }
}

function myFunction_c3() {
	pressed = document.getElementById("c3").getAttribute('data-value');
	if(pressed == mar_val) {
    	scorer();
    	random_num();
    }
    else {
    	document.getElementById("c3").innerHTML = "abcdef";
    }
}
*/

/*
function myFunction_a1() {
	pressed = document.getElementById("a1").getAttribute('data-value');
	if(pressed == current) {
    	scorer();
    	current = current+1;
    	speedUp();
    }
    else {
    	document.getElementById("a1").style.backgroundColor = "black";
    	document.getElementById("a1").innerHTML = "abcdef";
    }
}

function myFunction_a2() {
	pressed = document.getElementById("a2").getAttribute('data-value');
	if(pressed == current) {
    	scorer();
    	current = current+1;
    	speedUp();
    }
    else {
    	document.getElementById("a2").style.backgroundColor = "black";
    	document.getElementById("a2").innerHTML = "abcdef";
    }
}

function myFunction_a3() {
	pressed = document.getElementById("a3").getAttribute('data-value');
    if(pressed == current) {
    	scorer();
    	current = current+1;
    	speedUp();
    }
    else {
    	document.getElementById("a3").style.backgroundColor = "black";
    	document.getElementById("a3").innerHTML = "abcdef";
    }
}

function myFunction_b1() {
	pressed = document.getElementById("b1").getAttribute('data-value');
    if(pressed == current) {
    	scorer();
    	current = current+1;
    }
    else {
    	document.getElementById("b1").style.backgroundColor = "black";
    	document.getElementById("b1").innerHTML = "abcdef";
    }
}

function myFunction_b2() {
	pressed = document.getElementById("b2").getAttribute('data-value');
    if(pressed == current) {
    	scorer();
    	current = current+1;
    }
    else {
    	document.getElementById("b2").style.backgroundColor = "black";
    	document.getElementById("b2").innerHTML = "abcdef";
    }
}

function myFunction_b3() {
	pressed = document.getElementById("b3").getAttribute('data-value');
    if(pressed == current) {
    	scorer();
    	current = current+1;
    }
    else {
    	document.getElementById("b3").style.backgroundColor = "black";
    	document.getElementById("b3").innerHTML = "abcdef";
    }
}

function myFunction_c1() {
	pressed = document.getElementById("c1").getAttribute('data-value');
    if(pressed == current) {
    	scorer();
    	current = current+1;
    }
    else {
    	document.getElementById("c1").style.backgroundColor = "black";
    	document.getElementById("c1").innerHTML = "abcdef";
    }
}

function myFunction_c2() {
	pressed = document.getElementById("c2").getAttribute('data-value');
    if(pressed == current) {
    	scorer();
    	current = current+1;
    }
    else {
    	document.getElementById("c2").style.backgroundColor = "black";
    	document.getElementById("c2").innerHTML = "abcdef";
    }
}

function myFunction_c3() {
	pressed = document.getElementById("c3").getAttribute('data-value');
    if(pressed == current) {
    	scorer();
    	current = current+1;
    }
    else {
    	document.getElementById("c3").style.backgroundColor = "black";
    	document.getElementById("c3").innerHTML = "abcdef";
    }
}
*/


