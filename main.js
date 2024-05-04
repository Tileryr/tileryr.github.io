var pencils = 0;
var shivs =  0;
var valentinos = 0;

var shivStartingCost = 100;
var valentinoStartingCost = 300;
function pencilClick(number){
    pencils = pencils + number
    document.getElementById("pencils").innerHTML = pencils;
};

function buyShiv(){
	var shivCost = Math.floor(shivStartingCost * Math.pow(1.1,shivs));
	if(pencils >= shivCost){
		shivs = shivs + 1;
		pencils = pencils - shivCost;
		document.getElementById("pencils").innerHTML = pencils;
		document.getElementById("shivs").innerHTML = shivs;
	};
	var nextCost = Math.floor(shivStartingCost * Math.pow(1.1,shivs))
	document.getElementById("shivCost").innerHTML = nextCost;
}

function buyValentino(){
	var valentinoCost = Math.floor(valentinoStartingCost * Math.pow(1.1,valentinos));
	if(pencils >= valentinoCost){
		valentinos = valentinos + 1;
		pencils = pencils - valentinoCost;
		document.getElementById("pencils").innerHTML = pencils;
		document.getElementById("valentinos").innerHTML = valentinos;
	};
	var nextCost = Math.floor(valentinoStartingCost * Math.pow(1.1,valentinos))
	document.getElementById("valentinoCost").innerHTML = nextCost;
}

window.setInterval(function(){
	pencilClick(shivs * 5);
	pencilClick(valentinos * 15);
}, 1000);