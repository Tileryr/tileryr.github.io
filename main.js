var pencils = 0;
var SBA = 0;

var shivs =  0;
var valentinos = 0;

var shivStartingCost = 100;
var valentinoStartingCost = 300;

var answer = prompt("What is 1 + 2?");

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

function convertPencils(){
	if(pencils >= 1){
		SBA = SBA + 1
		pencils = pencils - 1
		document.getElementById("SBA").innerHTML = SBA;
		document.getElementById("pencils").innerHTML = pencils;
	}
}

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.pencils !== "undefined") pencils = savegame.pencils;
	if (typeof savegame.SBA !== "undefined") SBA = savegame.SBA;
	if (typeof savegame.shivs !== "undefined") shivs = savegame.shivs;
	if (typeof savegame.valentinos !== "undefined") valentinos = savegame.valentinos;
	document.getElementById("pencils").innerHTML = pencils;
	document.getElementById("SBA").innerHTML = SBA;
	document.getElementById("shivs").innerHTML = shivs;
	document.getElementById("valentinos").innerHTML = valentinos;
}

function save(){
	var save = {
		pencils: pencils,
		SBA: SBA,
		shivs: shivs,
		valentinos: valentinos,
	}
	localStorage.setItem("save",JSON.stringify(save));
}

function deleteSave(){
	localStorage.removeItem("save")
}

window.setInterval(function(){
	pencilClick(shivs * 5);
	pencilClick(valentinos * 15);
	save()
}, 1000);

function check(){
	alert("WHATTTT")
	var answer document.getElementById("answer").value;
	if (answer === "12") {
		alert("YAYYYYY");
	} else {
		alert("damn");
	}

}