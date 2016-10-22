////////////////////////////////////////////////////////////////////
/////////////////// SCROLL TOP WHEN REFRESH ////////////////////////
////////////////////////////////////////////////////////////////////ы
$(document).ready(function(){
		$(this).scrollTop(0);
});

////////////////////////////////////////////////////////////////////
/////////////////// TAGS GENERATION ////////////////////////////////
////////////////////////////////////////////////////////////////////
var count = ["first", "second", "third", "fourth", "fifth", "sixth"];

for(var i = 0; i < 6; i++) {
	var par = document.getElementsByTagName("ul")[i];
	var div = document.createElement("div");
	div.className = count[i];
	par.insertBefore(div, par.children[16]);
	var divId = document.getElementById(count[i]);
	div.className = "displayNone";
	for(var j = 0; j < 985; j++) {
		var li = document.createElement("li");
		div.appendChild(li);
	}
}

////////////////////////////////////////////////////////////////////
///////////////// ACTION BUTTON ////////////////////////////////////
////////////////////////////////////////////////////////////////////
var button = document.getElementById("action");
button.onclick = function() {
	var i = 0;
	var timerId = setInterval(function() {
	var elements = document.querySelectorAll(".inputColumn li");
	var elt = elements[i];
	if(elt.className == "criterion" || elt.className == "headerRow") {
		i++;
	}
	else {
		elt.className = 'animated rubberBand';
		i++;
	}
	if(i == elements.length) {
		clearInterval(timerId);
		console.log("begin!!!");
	}
}, 30);

	function func() {
		var elm = document.querySelectorAll(".inputColumn li");
		for(var j = 0; j < elm.length; j++) {
			var el = elm[j];
			if(el.className == "criterion" || el.className == "headerRow") {
				continue;
			}
			else {
				el.className = "";
			}
		}
	}
	setTimeout(func, 1200);
}


////////////////////////////////////////////////////////////////////
///////////////////// OPEN BUTTON //////////////////////////////////
////////////////////////////////////////////////////////////////////
var open = document.getElementById("open");
open.onclick = function() {
	var hidden = document.querySelectorAll(".displayNone");
	if(hidden.length == 0) {
		open.value = "Open";
		var visible = document.querySelectorAll(".visibilityVisible");
		for(var i = 0; i < visible.length; i++) {
			visible[i].className = "visibilityHidden";
		}
		function vis() {
			hidden = document.querySelectorAll(".visibilityHidden");
			for(var i = 0; i < hidden.length; i++) {
			hidden[i].className = "displayNone";
			}
		}
		setTimeout(vis, 800);
	}
	else {
		open.value = "Close";
		for(var i = 0; i < hidden.length; i++) {
			hidden[i].className = "visibilityHidden";
			}
		function hid() {
			hidden = document.querySelectorAll(".visibilityHidden");
			for(var i = 0; i < hidden.length; i++) {
			hidden[i].className = "visibilityVisible";
			}
		}
		setTimeout(hid, 800);
	}
}


////////////////////////////////////////////////////////////////////
////////////////////// START BUTTON ////////////////////////////////
////////////////////////////////////////////////////////////////////
var start = document.getElementById("start");
start.onclick = function() {
	var wrapper = document.querySelector(".wrapper");
	wrapper.className = "wrapperClear";
	var but = document.querySelector("#start");
	but.id = "startHidden";
	var info = document.querySelector(".info");
	info.className = "infoHidden";
	var startDivHid = document.querySelector(".block");
	startDivHid.className = "startDivHid";
}

////////////////////////////////////////////////////////////////////
///////////////// SIDE PANEL////////////////////////////////////////
////////////////////////////////////////////////////////////////////
window.onload = function() {
var shiftCont = document.querySelector(".container");
var shiftBread = document.querySelector(".breadcrumbs");
var shiftFooter = document.querySelector(".footer");
document.querySelector("#panel").addEventListener("mouseover", function() {
	shiftCont.className = "container containerShift";
	shiftBread.className = "breadcrumbs containerShift";
	shiftFooter.className = "footer containerShift";
	this.addEventListener("mouseout", function() {
		shiftCont.className = "container";
		shiftBread.className = "breadcrumbs";
		shiftFooter.className = "footer";
	});
});
}

////////////////////////////////////////////////////////////////////
////////////////// TABLE DATA GENRATION ////////////////////////////
////////////////////////////////////////////////////////////////////
var firstColumnLi = document.querySelectorAll(".firstColumn li");
var secondColumnLi = document.querySelectorAll(".secondColumn li");
var thirdColumnLi = document.querySelectorAll(".thirdColumn li");
for(var i = 1; i < firstColumnLi.length - 2; i++) {
	firstColumnLi[i].innerHTML = row1[i-1];
	secondColumnLi[i].innerHTML = row2[i-1];
	thirdColumnLi[i].innerHTML = row3[i-1];
}


////////////////////////////////////////////////////////////////////
////////////////// MOUSE MOVE FETCH ////////////////////////////////
////////////////////////////////////////////////////////////////////
var mouse = 0;
$(document).mousemove(function(e) {
		var X = e.pageX; // положения по оси X
		var Y = e.pageY; // положения по оси Y
		mouse += (X * Y);
		mouse %= Math.pow(10, 6);
		$(document).mousedown(function(ev) {
			var x = ev.pageX;
			var y = ev.pageY;
			mouse += (x * y);
			mouse %= Math.pow(10, 6);
		});
	$(".display").html(mouse);
});

////////////////////////////////////////////////////////////////////
////////////////// INPUT INCORRECT NUMBERS /////////////////////////
////////////////////////////////////////////////////////////////////
$('.inputColumn input').bind("change keyup input click", function() {
		if (this.value.match(/[^0-9]/g)) {
				this.value = this.value.replace(/[^0-9]/g, '');
			$('input:focus').parent('.inputColumn li').toggleClass('animated shake');
		}
});

////////////////////////////////////////////////////////////////////
///////////////// ERROR FUNCTION ///////////////////////////////////
////////////////////////////////////////////////////////////////////
function erf(x) {
    // constants
    var a1 =  0.254829592;
    var a2 = -0.284496736;
    var a3 =  1.421413741;
    var a4 = -1.453152027;
    var a5 =  1.061405429;
    var p  =  0.3275911;
    // Save the sign of x
    var sign = 1;
    if (x < 0) {
        sign = -1;
    }
    x = Math.abs(x);
    // A&S formula 7.1.26
    var t = 1.0/(1.0 + p*x);
    var y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-x*x);
    return sign*y;
}

////////////////////////////////////////////////////////////////////
////////////////// Lagged Fibonacci Generator //////////////////////
////////////////////// GENERATE BUTTON /////////////////////////////
////////////////////////////////////////////////////////////////////
var a = 4;
var b = 1;
var fourthColumnLi = document.querySelectorAll(".fourthColumn li");
var fifthColumnLi = document.querySelectorAll(".fifthColumn li");
var sixthColumnLi = document.querySelectorAll(".sixthColumn li");
var generate = document.getElementById("generate");
var index1 = new Array(10);
var index2 = new Array(90);
var index3 = new Array(900);
var criterion1 = 0;
var criterion2 = 0;
var criterion3 = 0;
var sum = 0;
var mean = 0;
var expValue = 0;
var stdDev = 0;
var varFactor = 0;
var inputColumnLi = document.querySelectorAll('.inputColumn li')
var inp = $("input[class='inp']");
var inputArr = [];
var index1 = [];
generate.onclick = function() {
	var mouseArr = [];
	var k1 = new Array(4000);
	var k2 = new Array(1000);
	var k3 = new Array(1000);
	mouseArr = mouse.toString().split('');
	for(var i = 3; i >= 0; i--) {
			k1[i] = mouseArr[i] / 10;
		}
	for(var i = 4; i < k1.length; i++) {
		if(k1[i-a] >= k1[i-b]) {
			k1[i]= k1[i-a] - k1[i-b]; 
		}
		else if(k1[i-a] < k1[i-b]) {
			k1[i] = k1[i-a] - k1[i-b] + 1;
		}
		else {
			console.log("I need help!");
		}
	}
	for(var i = 0; i < k1.length; i++) {
		if(k1[i] >= 1) {
			k1[i] -= 1;
		}
		k1[i] = Math.floor(k1[i] * 10);
	}
	for(var i = 1; i <= 1000; i++) {
		fourthColumnLi[i].innerHTML = k1[i + 4];
	}

/////////// SECOND FIB ROW ////////////////////////////
	for(var i = 0, j = 4; i <= 1000; i++, j += 2) {
		if(k1[j] == 0) {
			i--;
			continue;
		}
		k2[i] = (k1[j]).toString() + (k1[j+1]).toString();
	}
	// for(var i = 0; i < k2.length; i++) {
	//   k2[i] = k2[i] * 100;
	// }
	for(var i = 1; i <= 1000; i++) {
		fifthColumnLi[i].innerHTML = k2[i];
	}
/////////// THIRD FIB ROW ////////////////////////////
for(var i = 0, j = 4; i <= 1000; i++, j += 3) {
		if(k1[j] == 0) {
			i--;
			continue;
		}
		k3[i] = (k1[j]).toString() + (k1[j+1]).toString() + (k1[j+3]).toString();
	}
	for(var i = 1; i <= 1000; i++) {
		sixthColumnLi[i].innerHTML = k3[i];
	}

//////////////////////////////////////////////////////////////////////////
////////////////////////////// ANALYSIS //////////////////////////////////
////////////////////////////// CRITERION /////////////////////////////////
//////////////////////////////////////////////////////////////////////////
  var criter = 0;
  for(var i = 0; i < 10; i++) { // FIRST FIB ROW ///////////
   index1[i] = 0;
   for(var j = 1; j <= 1000; j++) {
     if(i == fourthColumnLi[j].innerHTML) {
       index1[i] += 1;
     }
    }
    if(index1[i] >= 100) {
      criter += (index1[i] - 100) / 10;
    }
    else {
      criter += (100 - index1[i]) / 10;
    }
  }
  criter = 100 - criter;
  console.log('index =', index1);
  console.log('criter =', criter, '%');

  var criter = 0;
  for(var i = 10; i < 99; i++) { // SECOND FIB ROW ///////////
   index2[i] = 0;
   for(var j = 1; j <= 1000; j++) {
     if(i == fifthColumnLi[j].innerHTML) {
       index2[i] += 1;
     }
    }
    if(index2[i] >= (100/9)) {
      criter += (index2[i] - (100/9)) / 10;
    }
    else {
      criter += ((100/9) - index2[i]) / 10;
    }
  }
  criter = 100 - criter;
  console.log('index =', index2);
  console.log('criter =', criter, '%');

	// for(var i = 0; i < 10; i++) { // FIRST FIB ROW ///////////
	// 	index1[i] = 0;
	// 	for(var j = 1; j < fourthColumnLi.length - 1; j++) {
	// 		if(i == fourthColumnLi[j].innerHTML) {
	// 			index1[i] += 1;
	// 		}
	// 		summary += fourthColumnLi.innerHTML;
	// 	}
	// 	if(index1[i] >= 100) {
	// 		criterion1 += (index1[i] - 100) / 10;
	// 	}
	// 	else {
	// 		criterion1 += (100 - index1[i]) / 10;
	// 	}
	// }


// TABLE ROW ////////////////////////////////////////////////////
var criter = 0;
  for(var i = 0; i < 10; i++) { // FIRST FIB ROW ///////////
   index1[i] = 0;
   for(var j = 1; j <= 1000; j++) {
     if(i == firstColumnLi[j].innerHTML) {
       index1[i] += 1;
     }
    }
    if(index1[i] >= 100) {
      criter += (index1[i] - 100) / 10;
    }
    else {
      criter += (100 - index1[i]) / 10;
    }
   // if(index1[i] >= 100) {
   //   criterion1 += (index1[i] - 100) / 10;
   // }
   // else {
   //   criterion1 += (100 - index1[i]) / 10;
   // }
  }
  criter = 100 - criter;
  console.log('index table =', index1);
  console.log('criter table =', criter, '%');


	// for(var i = 10; i < 100; i++) { // SECOND FIB ROW ////////////
	// 	index2[i] = 0;
	// 	for(var j = 1; j < fourthColumnLi.length; j++) {
	// 		if(i == fifthColumnLi[j].innerHTML) {
	// 			index2[i] += 1;
	// 		}
	// 	}
	// 	if(index2[i] >= 11.111) {
	// 		criterion2 += (index2[i] - 11.111) / 90;
	// 	}
	// 	else {
	// 		criterion2 += (11.111 - index2[i]) / 90;
	// 	}
	// }

	// for(var i = 100; i < 1000; i++) { // THIRD FIB ROW ///////////////
	// 	index3[i] = 0;
	// 	for(var j = 1; j < sixthColumnLi.length; j++) {
	// 		if(i == sixthColumnLi[j].innerHTML) {
	// 			index3[i] += 1;

	// 		}
	// 	}
	// 	if(index3[i] >= 1.111) {
	// 		criterion3 += (index3[i] - 1.111) / 900;
	// 	}
	// 	else {
	// 		criterion3 += (1.11 - index3[i]) / 900;
	// 	}
	// }

	// console.log(criterion1);
	// console.log(index1);
	// console.log(criterion2);
	// console.log(index2);
	// console.log(criterion3);
	// console.log(index3);
	// criterion1 = Math.floor(100 - criterion1);
	// criterion2 = Math.floor(100 - criterion2);
	// criterion3 = Math.floor(100 - criterion3);
	// var crit4 = document.querySelector('.crit4');
	// var crit5 = document.querySelector('.crit5');
	// var crit6 = document.querySelector('.crit6');
	// crit4.innerHTML = criterion1;
	// crit5.innerHTML = criterion2;
	// crit6.innerHTML = criterion3;

	// var count = 0;
	// for(var i = 0; i < index3.length; i++) {
	// 	if(index3[i] == 0) {
	// 		count++;
	// 	}
	// }
	// console.log(count);
 // END OF FUNCTION ///////////////////////////////////////
sum = 0;
mean = 0;
expValue = 0;
stdDev = 0;
varFactor = 0;

    inp.each(function() {
      inputArr.push(this.value);
    });
  console.log("input array:", inputArr);

    for(var i = 0; i < 15; i++) { // MEAN /////////////////////////////////
    sum += parseInt(inputArr[i], 10);
    if(i == 14) {
      mean = sum / i;
      console.log("mean", mean);
    }
  }
  for(var i = 0; i < 15; i++) { // EXPECTATION VALUE ///////////////////
    expValue += Math.pow((((parseInt(inputArr[i], 10)) - mean) / 15), 2);
  }
  console.log("expectation value", expValue);
  
  stdDev = Math.sqrt(expValue); // STANDART DEVIATION ////////////////////
  console.log("standart deviation", stdDev);
  
  varFactor = (stdDev / mean) * 100;
  console.log("variation factor", varFactor, "%"); // VARIATION FACTOR /////////////////////////


}

////////////////////////////////////////////////////////////////////
//////////////////////// LEFT PANEL ////////////////////////////////
////////////////////////////////////////////////////////////////////
	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() == 0) {
				$('.panel-buttons').fadeTo(0, 0);
				$('.leftPanel').fadeOut(0);
			}
			else { 
				$('.panel-buttons').fadeTo(0, 1);
				$('.leftPanel').fadeIn(0);
			}
		});
		$('.leftPanel').click(function() {
			$('body,html').animate({scrollTop:0},500);
		});
	});