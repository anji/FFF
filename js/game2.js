var currLevel = 1;
var random_elem = [];

var current = 1;
var pressed = 1;
var mar_val = 1;
var mar = [];
var counter = 0;
var element;
var lives = 3;
var countDownInterval = null;



function increase_speed() {
	var speed;
	speed = document.getElementById("scroller").getAttribute("scrolldelay");
	document.getElementById("scroller").setAttribute("scrolldelay", speed-10);
	
	
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
	var len = random_elem.length;
	var flag = 0;
	for(var i=0;i<len;i++) {
		if(pressed == random_elem[i])
			flag = 1;
		if(mar[0] != random_elem[i] && pressed == 9) {
			flag = 1;
		}
	}
	
	if(  flag ) {
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
    		showGameOver();
    	}
    	//onstart();
    	
    }
}

function myFunction_a2() {
	pressed = document.getElementById("a2").getAttribute('data-value');
	var len = random_elem.length;
	var flag = 0;
	for(var i=0;i<len;i++) {
		if(pressed == random_elem[i])
			flag = 1;
		if(mar[0] != random_elem[i] && pressed == 9) {
			flag = 1;
		}
	}
	
	if(  flag ) {
    	scorer();
    	randomize_table();
    	//random_num();
    	mar.shift();
    	document.getElementById("scroller").innerHTML = mar.join("  ");;
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
    		showGameOver();
    	}
    	//onstart();
    }
}

function myFunction_a3() {
	pressed = document.getElementById("a3").getAttribute('data-value');
	var len = random_elem.length;
	var flag = 0;
	for(var i=0;i<len;i++) {
		if(pressed == random_elem[i])
			flag = 1;
		if(mar[0] != random_elem[i] && pressed == 9) {
			flag = 1;
		}
	}
	
	if(  flag ) {
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
    		showGameOver();
    	}
    	//onstart();
    }
}

function myFunction_b1() {
	pressed = document.getElementById("b1").getAttribute('data-value');
	var len = random_elem.length;
	var flag = 0;
	for(var i=0;i<len;i++) {
		if(pressed == random_elem[i])
			flag = 1;
		if(mar[0] != random_elem[i] && pressed == 9) {
			flag = 1;
		}
	}
	
	if(  flag ) {
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
    		showGameOver();
    	}
    	//onstart();
    }
}

function myFunction_b2() {
	pressed = document.getElementById("b2").getAttribute('data-value');
	var len = random_elem.length;
	var flag = 0;
	for(var i=0;i<len;i++) {
		if(pressed == random_elem[i])
			flag = 1;
		if(mar[0] != random_elem[i] && pressed == 9) {
			flag = 1;
		}
	}
	
	if(  flag ) {
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
    		showGameOver();
    	}
    	//onstart();
    }
}

function myFunction_b3() {
	pressed = document.getElementById("b3").getAttribute('data-value');
	var len = random_elem.length;
	var flag = 0;
	for(var i=0;i<len;i++) {
		if(pressed == random_elem[i])
			flag = 1;
		if(mar[0] != random_elem[i] && pressed == 9) {
			flag = 1;
		}
	}
	
	if(  flag ) {
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
    		showGameOver();
    	}
    	//onstart();
    }
}

function myFunction_c1() {
	pressed = document.getElementById("c1").getAttribute('data-value');
	var len = random_elem.length;
	var flag = 0;
	for(var i=0;i<len;i++) {
		if(pressed == random_elem[i])
			flag = 1;
		if(mar[0] != random_elem[i] && pressed == 9) {
			flag = 1;
		}
	}
	
	if(  flag ) {
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
    		showGameOver();
    		
    	}
    	//onstart();
    }
}

function myFunction_c2() {
	pressed = document.getElementById("c2").getAttribute('data-value');
	var len = random_elem.length;
	var flag = 0;
	for(var i=0;i<len;i++) {
		if(pressed == random_elem[i])
			flag = 1;
		if(mar[0] != random_elem[i] && pressed == 9) {
			flag = 1;
		}
	}
	
	if(  flag ) {
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
    		showGameOver();
    	}
    	//onstart();
    }
}

function myFunction_c3() {
	pressed = document.getElementById("c3").getAttribute('data-value');
	var len = random_elem.length;
	var flag = 0;
	for(var i=0;i<len;i++) {
		if(pressed == random_elem[i])
			flag = 1;
		if(mar[0] != random_elem[i] && pressed == 9) {
			flag = 1;
		}
	}
	
	if(  flag ) {
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
    		showGameOver();
    	}
    	//onstart();
    }
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


function checkMarquee() {
	if(mar.length == 0){
		console.log("sucess");
		localStorage.setItem("level",currLevel + 1);
		var myWindow=window.open('game.html');
		myWindow.focus();
	}
}


function countdown() {
    var seconds = 30;
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
            checkMarquee();
        } else {
            /*alert("Game over");*/
        	showGameOver();
        }
    }
    tick();
}

function showGameOver() {
	$('#time_up').css('display','block');
	document.getElementById("scroller").stop();	
	var cur = document.getElementById("score").getAttribute('data-value');
	document.getElementById("score_timeup").innerHTML = "Score " + cur;
	
	
	
}


function gameover() {
	var myWindow=window.open('index.html');
	myWindow.focus();
}

function start() {
	 currLevel= localStorage.getItem("level");
	 
	 if(currLevel == null) {
		 localStorage.setItem("level", 1);
		 currLevel = 1;
	 }
	 
	$("#dialogbox").css('display', 'none');
      randomize_table();
      marqueegen();
	  countdown();
	 
}



function successCB(){
	console.log("Starting Level " + currLevel);
	//level.setLevel(currLevel);
    //start();
	
	for(var i = 0; i < currLevel; i++)
	{
		random_elem[i] = Math.ceil(Math.random()*8);
		
	}
	
	var rule_string = null;
	
	rule_string = "Map: \n";
	for(i = 0; i < currLevel; i++)
	{	
		rule_string = rule_string + random_elem[i] + " to " + random_elem[i] + "\n";
			
	}
	
	rule_string = rule_string + "  others to X";

	
	
	document.getElementById("rule").innerHTML = rule_string;
	
  
}

function failureCB(){
	
	console.log("failureCB");
}


function selectLevelFromDB() {
        	var len = 0,
        	db = openDatabase('mydb', '1.0', "CLICK_DB" , 2 * 1024 * 1024);
        	
        	db.transaction(function (tx) {
     		   tx.executeSql('SELECT * FROM LEVEL', [], function (tx, results) {
     		   len = results.rows.length;
     		   // console.log("found rows " + len);
     		   
     		   if(len !== 0)
 			   {
     			  currLevel = results.rows.item(0).level; 
        		  // console.log("start Level " + currLevel);
 			   }
     		   else
 			   {
     			   currLevel = 1;
     			   // console.log("start default Level " + currLevel);
 			   }
     		 }, null);
        	}, failureCB , successCB);
        }



function dialogueOpen() {
	selectLevelFromDB();
	
}

function createDB(){
	
	var db = openDatabase('mydb', '1.0', "CLICK_DB" , 2 * 1024 * 1024);
	
	db.transaction(function (tx) {  
 	   tx.executeSql('CREATE TABLE IF NOT EXISTS LEVEL (id unique, level)');
 	});
}

window.onload=function() {
	
	//createDB();
	dialogueOpen();
	
	var element = Math.ceil(Math.random()*8);
	localStorage.setItem("element", element );
	localStorage.lives = 3;
	document.getElementById("rule").innerHTML = " Map :" + element + " to " + element + " others to X";
	}