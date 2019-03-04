var selectElem = document.getElementById('select')
var img = document.getElementById('img');
var imgSelected = [];
var clickTimes = 0;
var clickTimes1 = 0;
var imgs = document.getElementById('imgs1');
var imgs1 = document.getElementById('imgs2');
var imgs2 = document.getElementById('imgs3');
var times = document.getElementById('times');
var tm1 = document.getElementById('tm1');
var tm2 = document.getElementById('tm2');

console.log(imgs2);

console.log(selectElem.value); // print the value of option

console.log(selectElem.selectedIndex); // print index of option


selectElem.onchange = function() {
	if (this.value === "bmw") {
		imgs.style.display = "block";
		imgs1.style.display = "none";
	} else if (this.value === "marsadi") {
		imgs.style.display = "none";
		imgs1.style.display = "block";
	} else {
		imgs.style.display = "none";
		imgs1.style.display = "none";
	}

	clicks();
}

function clicks() {
	imgs.onclick = function() {
		clickTimes++;
		tm1.textContent = clickTimes;
	}

	imgs1.onclick = function() {
		clickTimes1++;
		tm2.textContent = clickTimes1;
	}
}

