// action = function() {
	// document.getElementsByTagName('ul').innerHTML = 99999;

	// var elements = document.querySelectorAll('.firstColomn li');

	// for (var i = 1; i < 11; i++) {
	// 	elements[i].innerHTML = Math.pow(i, 2);
	// }

// 	var elements = document.querySelectorAll('.secondColomn li');

// 	for (var i = 1; i < 11; i++) {
// 		elements[i].innerHTML = Math.pow(elements[i].innerHTML, 2);
// 	}
// }

// var flip = document.getElementById("flip");
// var button = document.getElementById("action");

// button.onclick = function() {
// 	if(flip.className == "done") {
// 		flip.className = "";
// 	}
// 	else {
// 		flip.className = "done";
// 	}
// }

// var column = document.getElementByClassName("firstColumn");
// var open = document.getElementById("open");

// button.onclick = function() {
// 	if(column.className == "open") {
// 		column.className = "";
// 	}
// 	else {
// 		column.className = "done";
// 	}
// }

// var par1 = document.getElementsByTagName("ul")[0];
// var par2 = document.getElementsByTagName("ul")[1];
// var par3 = document.getElementsByTagName("ul")[2];
// var par4 = document.getElementsByTagName("ul")[3];
// var par5 = document.getElementsByTagName("ul")[4];
// var par6 = document.getElementsByTagName("ul")[5];

// var divFirst = document.createElement("div");
// var divSecond = document.createElement("div");
// var divThird = document.createElement("div");
// divFirst.className = "first";
// divSecond.className = "second";
// divThird.className = "third";
// par1.insertBefore(divFirst, par1.children[16]);
// par2.insertBefore(divSecond, par2.children[16]);
// par3.insertBefore(divThird, par3.children[16]);
// var divFirstId = document.getElementById("first");
// var divSecondId = document.getElementById("second");
// var divThirdId = document.getElementById("third");
// divFirst.className = "hidden";
// divSecond.className = "hidden";
// divThird.className = "hidden";
// for(var i = 0; i < 985; i++) {
// 	var li1 = document.createElement("li");
// 	var li2 = document.createElement("li");
// 	var li3 = document.createElement("li");
// 	divFirst.appendChild(li1);
// 	divSecond.appendChild(li2);
// 	divThird.appendChild(li3);
// 	li1.innerHTML = i + 16;
// 	li2.innerHTML = i + 16;
// 	li3.innerHTML = i + 16;
// }

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

  // var phones = $('input[name*="phone"]');
  // var arr = [];
  // phones.each(function() {
  //   if (this.value != "") {
  //     arr.push(this.value);
  //   }
  // });
  // console.log(arr);
}

// function doSomething() {
// 	console.log(rand());
// }
// (function loop() {
//     var rand = Math.round(Math.random() * (1000 - 500)) + 500;
//     setTimeout(function() {
//             doSomething();
//             loop();  
//     }, rand);
// }());

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

// animation generation /////////////////////////////////////////////
// function time() {
//   $("[class*=thColumn] li").toggleClass('animated jello');
// }
// $("#generate").click(function(e) {
//   e.preventDefault();
//   $("[class*=thColumn] li").toggleClass('animated jello');
//   setTimeout(time, 1000);
// })


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

//////////////////// ANALYSIS ////////////////////
  var index1 = new Array(10);
  var index2 = new Array(90);
  var index3 = new Array(900);
  var criterion1 = 0;
  var criterion2 = 0;
  var criterion3 = 0;

  for(var i = 0; i < 10; i++) { // FIRST FIB ROW ///////////
    index1[i] = 0;
    for(var j = 1; j < fourthColumnLi.length - 1; j++) {
      if(i == fourthColumnLi[j].innerHTML) {
        index1[i] += 1;
      }
    }
    if(index1[i] >= 100) {
      criterion1 += (index1[i] - 100) / 10;
    }
    else {
      criterion1 += (100 - index1[i]) / 10;
    }
  }

  for(var i = 10; i < 100; i++) { // SECOND FIB ROW ////////////
    index2[i] = 0;
    for(var j = 1; j < fourthColumnLi.length; j++) {
      if(i == fifthColumnLi[j].innerHTML) {
        index2[i] += 1;
      }
    }
    if(index2[i] >= 11.111) {
      criterion2 += (index2[i] - 11.111) / 90;
    }
    else {
      criterion2 += (11.111 - index2[i]) / 90;
    }
  }

  for(var i = 100; i < 1000; i++) { // THIRD FIB ROW ///////////////
    index3[i] = 0;
    for(var j = 1; j < sixthColumnLi.length; j++) {
      if(i == sixthColumnLi[j].innerHTML) {
        index3[i] += 1;

      }
    }
    if(index3[i] >= 1.111) {
      criterion3 += (index3[i] - 1.111) / 900;
    }
    else {
      criterion3 += (1.11 - index3[i]) / 900;
    }
  }

  console.log(criterion1);
  console.log(index1);
  console.log(criterion2);
  console.log(index2);
  console.log(criterion3);
  console.log(index3);
  criterion1 = Math.floor(100 - criterion1);
  criterion2 = Math.floor(100 - criterion2);
  criterion3 = Math.floor(100 - criterion3);
  var crit4 = document.querySelector('.crit4');
  var crit5 = document.querySelector('.crit5');
  var crit6 = document.querySelector('.crit6');
  crit4.innerHTML = criterion1;
  crit5.innerHTML = criterion2;
  crit6.innerHTML = criterion3;

  var count = 0;
  for(var i = 0; i < index3.length; i++) {
    if(index3[i] == 0) {
      count++;
    }
  }
  console.log(count);
} // END OF FUNCTION ///////////////////////////////////////


////////////////////////////////////////////////////////////////////
//////////////////////// LEFT PANEL ////////////////////////////////
////////////////////////////////////////////////////////////////////
$('#up').hide();
$('.leftPanel').hide();
  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() == 0) {
        $('#up').fadeOut();
        $('.leftPanel').fadeOut();
      }
      else { 
        $('#up').fadeIn();
        $('.leftPanel').fadeIn();
      }
    });
    $('#up').click(function() {
      $('body,html').animate({scrollTop:0},800);
    });
  });

//   for(var i = j = 4; i < k2.length; i++, j++) {
//     if(k2[j-a] >= k2[j-b]) {
//       if(Math.floor((k2[j-a] - k2[j-b])*100) <= 10) {
//         j++;
//         k2[j] = (k2[j-a] - k2[j-b]); 
//       }
//       else {
//         k2[j] = (k2[j-a] - k2[j-b]);
//       }
//     }
//     else if(k2[j-a] < k2[j-b]) {
//       if (Math.floor((k2[j-a] - k2[j-b] + 1)*100) <= 10) {
//         j++;
//         k2[j] = k2[j-a] - k2[j-b] + 1;
//       }
//       else {
//         k2[j] = k2[j-a] - k2[j-b] + 1;
//       }
//     }
//     else {
//       console.log("I need help!");

//     }
//   }
//     console.log(k2);
//     for(var i = 0; i < k2.length; i++) {
//       if(k2[i] >= 1) {
//         k2[i] -= 1;
//       }
//       k2[i] = Math.floor(k2[i] * 100);
//     }
//     for(var i = 1; i < k2.length; i++) {
//         fifthColumnLi[i].innerHTML = k2[i];
//     }

// } // END OF FUNCTION ///////////////////////////////////////


// for(var i = j = 4; i < k2.length; i++, j++) {
//     if(k2[i-a] >= k2[i-b]) {
//       if(Math.floor((k2[i-a] - k2[i-b])*100) >= 10) {
//         k2[i] = (k2[i-a] - k2[i-b]); 
//       }
//       else if(Math.floor((k2[i-a] - k2[i-b])*100) == 0) {
//         k2[i] = 0.99;
//       }
//       else {
//         k2[i] = (k2[i-a] - k2[i-b])*10;
//       }
//     }
//     else if(k2[i-a] < k2[i-b]) {
//       if (Math.floor((k2[i-a] - k2[i-b] + 1)*100) >=10) {
//         k2[i] = k2[i-a] - k2[i-b] + 1;
//       }
//       else if(Math.floor((k2[i-a] - k2[i-b] + 1)*100) == 0) {
//         k2[i] = 0.99;
//       }
//       else {
//         k2[i] = (k2[i-a] - k2[i-b] + 1)*10;
//       }
//     }
//     else {
//       console.log("I need help!");

//     }
//   }
//     console.log(k2);
//     for(var i = 0; i < k2.length; i++) {
//       if(k2[i] >= 1) {
//         k2[i] -= 1;
//       }
//       k2[i] = Math.floor(k2[i] * 100);
//     }
//     for(var i = 1; i < k2.length; i++) {
//         fifthColumnLi[i].innerHTML = k2[i];
//     }
// } // END OF FUNCTION ///////////////////////////////////////


// var mouse = document.

// $(document).ready(function() {
// 	$(".container").css("filter", "blur(0)");
// });

// var fileDisplayArea = document.getElementById('fileDisplayArea');
// function readTextFile(file) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.open("GET", file, false);
//   rawFile.onreadystatechange = function() {
//     if(rawFile.readyState === 4) {
//       if(rawFile.status === 200 || rawFile.status == 0) {
//         var allText = rawFile.responseText;
//         fileDisplayArea.innerText = allText;
//       }
//     }
//   }
//   rawFile.send(null);
// }
// readTextFile("file:///C:/table.txt");

// function getXmlHttp(){
//   var xmlhttp;
//   try {
//     xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
//   } catch (e) {
//     try {
//       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     } catch (E) {
//       xmlhttp = false;
//     }
//   }
//   if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
//     xmlhttp = new XMLHttpRequest();
//   }
//   return xmlhttp;
// }
// console.log(getXmlHttp());

// window.onload = function() {
//         var fileInput = document.getElementById('fileInput');
//         var fileDisplayArea = document.getElementById('fileDisplayArea');

//         fileInput.addEventListener('change', function(e) {
//             var file = fileInput.files[0];
//             var textType = /text.*/;

//             if (file.type.match(textType)) {
//                 var reader = new FileReader();

//                 reader.onload = function(e) {
//                     fileDisplayArea.innerText = reader.result;
//                 }

//                 reader.readAsText(file);    
//             } else {
//                 fileDisplayArea.innerText = "File not supported!"
//             }
//         });
// }

// shift.setAttribute("class", "wrapperClear");
// shift.firstChild.nodeValue = "bodyShift";

// function open() {
// 	var parent = document.getElementsByTagName("ul")[0];
// 	var li = document.createElement("li");
// 	parent.appenChild(li);
// 	console.log("hello!");
// }

// var intervalId = setInterval(function() {
//   if (index >= $elements.length) return clearInterval(intervalId);
//   $elements.eq(index).css({border: '1px solid red'}); // тут делаем что нужно
//   index++;
// }, 1000);