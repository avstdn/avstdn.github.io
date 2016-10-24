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
var inp = document.querySelectorAll(".inp");
var crit7 = document.querySelector(".crit7");
var inpArr = new Array(15);
var bitStr = 0;
var bitInt = 0;
var bitSum = 0;
var criterion7 = 0;

button.onclick = function() {
 var k = 0;
 var timerId = setInterval(function() {
 var elements = document.querySelectorAll(".inputColumn li");
 var elt = elements[k];
 if(elt.className == "criterion" || elt.className == "headerRow") {
	 k++;
 }
 else {
	 elt.className = 'animated rubberBand';
	 k++;
 }
 if(k == elements.length) {
	 clearInterval(timerId);
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

	// var criter = 0;
	// for(var i = 0; i < 10; i++) { // FIRST FIB ROW ///////////
	// 	for(var j = 1; j <= 15; j++) {
	// 		if(i == inputColumnLi[j].innerHTML) {
	// 			index1[i] += 1;
	// 		}
	// 	}
	// 	if(index1[i] >= 100) {
	// 		criter += (index1[i] - 100) / 10;
	// 	}
	// 	else {
	// 		criter += (100 - index1[i]) / 10;
	// 	}
	// }
	// criter = Math.round(100 - criter);
	// // crit4.innerHTML = criter;
	// console.log('input criterion', criter);


	var count = 100;
	var dif = 0;
	for(var i = 1; i < 14; i++) { // 2 DIGITS DIFFERENCE
		dif = inp[i].value - inp[i-1].value;
		if(inp[i+1].value - inp[i].value == dif) {
			count -= 7;
		}
	}
	var dif = 0;
	for(var i = 1; i < 13; i++) { // 3 DIGITS DIFFERENCE
		dif = inp[i+1].value - inp[i-1].value;
		if(inp[i+2].value - inp[i].value == dif) {
			count -= 7;
		}
	}
	if(count < 0) {
		crit7.innerHTML = 0;
	}
	else {
		crit7.innerHTML = count;
	}
} // END OF FUNCTION /////////////


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
var crit1 = document.querySelector(".crit1");
var crit2 = document.querySelector(".crit2");
var crit3 = document.querySelector(".crit3");
var index = [];
var cnt;
var diff;

for(var i = 1; i < firstColumnLi.length - 2; i++) {
	firstColumnLi[i].innerHTML = row1[i-1];
	secondColumnLi[i].innerHTML = row2[i-1];
	thirdColumnLi[i].innerHTML = row3[i-1];
}

cnt = 100;
differ = 0;
	for(var i = 2; i < 999; i++) { // 2 DIGITS DIFFERENCE
		differ = firstColumnLi[i].innerHTML - firstColumnLi[i-1].innerHTML;
		if(firstColumnLi[i+1].innerHTML - firstColumnLi[i].innerHTML == differ) {
			cnt -= 0.1;
		}
	}
	var differ = 0;
	for(var i = 2; i < 998; i++) { // 3 DIGITS DIFFERENCE
		differ = firstColumnLi[i+1].innerHTML - firstColumnLi[i-1].innerHTML;
		if(firstColumnLi[i+2].innerHTML - firstColumnLi[i].innerHTML == differ) {
			cnt -= 0.1;
		}
	}
	if(cnt < 0) {
		crit1.innerHTML = 0;
	}
	else {
		crit1.innerHTML = Math.round(cnt);
	}

/*
var criterion = 0;
	for(var i = 0; i < 10; i++) { // FIRST FIB ROW ///////////
	 index[i] = 0;
	 for(var j = 1; j <= 1000; j++) {
		 if(i == firstColumnLi[j].innerHTML) {
			 index[i] += 1;
		 }
		}
		if(index[i] >= 100) {
			criterion += (index[i] - 100) / 10;
		}
		else {
			criterion += (100 - index[i]) / 10;
		}
	}
	criterion = Math.round(100 - criterion);
	crit1.innerHTML = criterion;
*/

cnt = 100;
differ = 0;
	for(var i = 2; i < 999; i++) { // 2 DIGITS DIFFERENCE
		differ = secondColumnLi[i].innerHTML - secondColumnLi[i-1].innerHTML;
		if(secondColumnLi[i+1].innerHTML - secondColumnLi[i].innerHTML == differ) {
			cnt -= 1;
		}
	}
	var differ = 0;
	for(var i = 2; i < 998; i++) { // 3 DIGITS DIFFERENCE
		differ = secondColumnLi[i+1].innerHTML - secondColumnLi[i-1].innerHTML;
		if(secondColumnLi[i+2].innerHTML - secondColumnLi[i].innerHTML == differ) {
			cnt -= 1;
		}
	}
	if(cnt < 0) {
		crit2.innerHTML = 0;
	}
	else {
		crit2.innerHTML = Math.round(cnt);
	}

/*
	var criterion = 0;
	for(var i = 10; i < 100; i++) { // SECOND FIB ROW ///////////
	 index[i] = 0;
	 for(var j = 1; j <= 1000; j++) {
		 if(i == secondColumnLi[j].innerHTML) {
			 index[i] += 1;
		 }
		}
		if(index[i] >= (100/9)) {
			criterion += (index[i] - (100/9)) / 10;
		}
		else {
			criterion += ((100/9) - index[i]) / 10;
		}
	}
	criterion = Math.round(100 - criterion);
	crit2.innerHTML = criterion;
*/

cnt = 100;
differ = 0;
	for(var i = 2; i < 999; i++) { // 2 DIGITS DIFFERENCE
		differ = thirdColumnLi[i].innerHTML - thirdColumnLi[i-1].innerHTML;
		if(thirdColumnLi[i+1].innerHTML - thirdColumnLi[i].innerHTML == differ) {
			cnt -= 10;
		}
	}
	var differ = 0;
	for(var i = 2; i < 998; i++) { // 3 DIGITS DIFFERENCE
		differ = thirdColumnLi[i+1].innerHTML - thirdColumnLi[i-1].innerHTML;
		if(thirdColumnLi[i+2].innerHTML - thirdColumnLi[i].innerHTML == differ) {
			cnt -= 10;
		}
	}
	if(cnt < 0) {
		crit3.innerHTML = 0;
	}
	else {
		crit3.innerHTML = Math.round(cnt);
	}

/*
var criterion = 0;	// THIRD ROW ////////////
	for(var i = 100; i < 1000; i++) {
		index[i] = 0;
		for(var j = 1; j <= 1000; j++) {
		 if(i == thirdColumnLi[j].innerHTML) {
			 index[i] += 1;
		 }
		}
		if(index[i] > (10/9)) {
			criterion += (index[i] - (10/9)) / 10;
		}
		else {
			criterion += ((10/9) - index[i]) / 10;
		}
	}
	criterion = Math.round(criterion);
	crit3.innerHTML = criterion;
*/


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
////////////////// Lagged Fibonacci Generator //////////////////////
////////////////////// GENERATE BUTTON /////////////////////////////
////////////////////////////////////////////////////////////////////
var a = 4;
var b = 1;
var fourthColumnLi = document.querySelectorAll(".fourthColumn li");
var fifthColumnLi = document.querySelectorAll(".fifthColumn li");
var sixthColumnLi = document.querySelectorAll(".sixthColumn li");
var inputColumnLi = document.querySelectorAll('.inputColumn li')
var generate = document.getElementById("generate");
var index1 = new Array(10);
var index2 = new Array(90);
var index3 = new Array(900);
var crit4 = document.querySelector(".crit4");
var crit5 = document.querySelector(".crit5");
var crit6 = document.querySelector(".crit6");
	var count;
	var dif;


generate.onclick = function() {

	// BACKGROUND COLOR CHANGE ///////////////
// $(function(){

// });
// BACKGROUND COLOR CHANGE ///////////////
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

count = 100;
dif = 0;
	for(var i = 2; i < 999; i++) { // 2 DIGITS DIFFERENCE
		dif = fourthColumnLi[i].innerHTML - fourthColumnLi[i-1].innerHTML;
		if(fourthColumnLi[i+1].innerHTML - fourthColumnLi[i].innerHTML == dif) {
			count -= 0.1;
		}
	}
	var dif = 0;
	for(var i = 2; i < 998; i++) { // 3 DIGITS DIFFERENCE
		dif = fourthColumnLi[i+1].innerHTML - fourthColumnLi[i-1].innerHTML;
		if(fourthColumnLi[i+2].innerHTML - fourthColumnLi[i].innerHTML == dif) {
			count -= 0.1;
		}
	}
	if(count < 0) {
		crit4.innerHTML = 0;
	}
	else {
		crit4.innerHTML = Math.round(count);
	}

/*

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
	criter = Math.round(100 - criter);
	crit4.innerHTML = criter;

*/

count = 100;
dif = 0;
	for(var i = 2; i < 999; i++) { // 2 DIGITS DIFFERENCE
		dif = fifthColumnLi[i].innerHTML - fifthColumnLi[i-1].innerHTML;
		if(fifthColumnLi[i+1].innerHTML - fifthColumnLi[i].innerHTML == dif) {
			count -= 1;
		}
	}
	var dif = 0;
	for(var i = 2; i < 998; i++) { // 3 DIGITS DIFFERENCE
		dif = fifthColumnLi[i+1].innerHTML - fifthColumnLi[i-1].innerHTML;
		if(fifthColumnLi[i+2].innerHTML - fifthColumnLi[i].innerHTML == dif) {
			count -= 1;
		}
	}
	if(count < 0) {
		crit5.innerHTML = 0;
	}
	else {
		crit5.innerHTML = count;
	}

/*
	var criter = 0;
	for(var i = 10; i < 100; i++) { // SECOND FIB ROW ///////////
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
	criter = Math.round(100 - criter);
	crit5.innerHTML = criter;
*/


count = 100;
dif = 0;
	for(var i = 2; i < 999; i++) { // 2 DIGITS DIFFERENCE
		dif = sixthColumnLi[i].innerHTML - sixthColumnLi[i-1].innerHTML;
		if(sixthColumnLi[i+1].innerHTML - sixthColumnLi[i].innerHTML == dif) {
			count -= 10;
		}
	}
	var dif = 0;
	for(var i = 2; i < 998; i++) { // 3 DIGITS DIFFERENCE
		dif = sixthColumnLi[i+1].innerHTML - sixthColumnLi[i-1].innerHTML;
		if(sixthColumnLi[i+2].innerHTML - sixthColumnLi[i].innerHTML == dif) {
			count -= 10;
		}
	}
	if(count < 0) {
		crit6.innerHTML = 0;
	}
	else {
		crit6.innerHTML = count;
	}


/*var criter = 0;	// THIRD FIB ROW ////////////
var zero = 0;
	for(var i = 100; i < 1000; i++) {
		index3[i] = 0;
		for(var j = 1; j <= 1000; j++) {
		 if(i == sixthColumnLi[j].innerHTML) {
			 index3[i] += 1;
		 }
		}
		if(index3[i] > (10/9)) {
			criter += (index3[i] - (10/9)) / 10;
		}
		else {
			criter += ((10/9) - index3[i]) / 10;
		}
	}
	criter = Math.round(criter);
	crit6.innerHTML = criter;
*/
}

////////////////////////////////////////////////////////////////////
//////////////////////// LEFT PANEL ////////////////////////////////
////////////////////////////////////////////////////////////////////
	$(function() {
		$('.leftPanel').hide();
		$(window).scroll(function() {
			if($(this).scrollTop() == 0) {
				$('#up').fadeTo(0, 0);
				$('.leftPanel').fadeOut(0);
			}
			else { 
				$('#up').fadeTo(0, 1);
				$('.leftPanel').fadeIn(0);
			}
		});
		$('.leftPanel').click(function() {
			$('body,html').animate({scrollTop:0},500);
		});
	});