var pencils = 0;
var shivs =  0;

function pencilClick(number){
    pencils = pencils + number
    document.getElementById("pencils").innerHTML = pencils;
};

function buyShiv(){
	var shivCost = Math.floor(100 * Math.pow(1.1,shivs));
	if(pencils >= shivCost){
		shivs = shivs + 1;
		pencils = pencils - shivCost;
		document.getElementById("pencils").innerHTML = pencils;
		document.getElementById("shivs").innerHTML = shivs;
	};
	var nextCost = Math.floor(100 * Math.pow(1.1,shivs))
	document.getElementById("shivCost").innerHTML = nextCost;
}

window.setInterval(function(){
	pencilClick(shivs * 5);
}, 1000);