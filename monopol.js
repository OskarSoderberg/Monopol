//Ogge är ful i mun 
window.onload = function init() {
	canvas = document.createElement("canvas");
	canvas.setAttribute("id", "spelPlan");
	//canvas.height = 400; 
	//canvas.width = 400; 
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.getElementById("farsa").appendChild(canvas);
	context = document.getElementById("spelPlan").getContext("2d");
	planBild = new Image();
	planBild.src = "Monopol.png";
	planBild.width = 600; //Ändra planens storlek här
	planBild.height = 600; // Och här
	planBild.onload = function() { //Gör allt efter planen laddats
	//context.drawImage(planBild, canvas.width / 2 - planBild.width/2, 0, planBild.width, planBild.height);
	
		ritaOm();
		antalSpelare = prompt("Hur många spelare?", "1, 2, 3 eller 4");
		while (antalSpelare != 1 && antalSpelare != 2 && antalSpelare != 3 && antalSpelare != 4) {
			antalSpelare = prompt("Felaktigt antal spelare. Hur många spelare?", "1, 2, 3 eller 4");
		}
		
		saldo = [];
		
		for (var i = 1; i <= antalSpelare; i++) {
			saldo[i] = 30000;
		}
		
		saldoPrint();
		
		for (var k = 1; k <= antalSpelare; k++) {
			window.setTimeout(ritaPjäs(0, k), 3000);
		}
		
		slåTobbe();
	};
	
	
	
	//window.setTimeout(speletsGång(), 3000);	
};

function speletsGång() {
	var gameOver = false;
	while (!gameOver) {
		//die()
		if (confirm("Vill du överföra?")) {
			överföring(prompt("Betalare"), prompt("Mottagare"), prompt("Summa"));
		}
		saldoPrint();
	
		for (var k = 1; k <= antalSpelare; k++) {
		ritaPjäs(0, k);
		}
	gameOver = true;
	}
}

function saldoPrint() {
	if (! document.getElementById("spelarSaldo")) {
		for (var i = 1; i <= antalSpelare; i++) {
			spelarSaldo = document.createElement("p");
			spelarSaldo.setAttribute("id", "spelarSaldo" + i);
			document.getElementById("farsa").appendChild(spelarSaldo);
		}
		for (var i = 1; i <= antalSpelare; i++) {
		document.getElementById("spelarSaldo" + i).innerHTML = "Spelare " + i + " har " + saldo[i] + " paulingar";
		}
	}
		//Ogge, innerHTML är fan ingen funktion, det är ett attributes
		//Henke, ett attribut, flera attributes
		
	/*for (j = 1; j <= antalSpelare; j++) {
		context.font = "20px Courier New";
		context.fillText("Spelare " + j + " har " + saldo[j] + " paulingar" , 10, 50 * j);
	}*/
}

// skapar button-tagg samt en fin knapp
function slåTobbe() {
	slåKnapp = document.createElement("button");
	slåKnapp.setAttribute("type", "button");
	slåKnapp.setAttribute("id", "slåKnapp");
	document.getElementById("farsa").appendChild(slåKnapp);
	document.getElementById("slåKnapp").innerHTML = "Slå tärningen!";
	//var bajs = antalSpelare * 30; //HENKE ADDA DIT TIX HÄR. JAG BRYR MIG INTE OM ATT VARA BRA PÅ BAJSSCRIPT.
	//document.getElementById("slåKnapp").style.top = bajs.toString(); 
}

function betala(spelare, summa) {
	try{
		saldo[spelare] = saldo[spelare] - summa;
		if(saldo[spelare]<0){
		throw "ERROR: lack of money";
		}
	}
	catch(ex){
		alert(ex);
	}
}


function fåBetalt(spelare, summa) {
	saldo[spelare] = saldo[spelare] + summa;
}

function överföring(betalare, mottagare, summa) {
	try{
		saldo[betalare] = saldo[betalare] - summa;
		if(saldo[betalare]<0){
		throw "ERROR: lack of money";
		}
	}
	catch(ex){
		alert(ex);
	}
	saldo[mottagare] = saldo[mottagare] + summa;
}

function die() {
	antalRullningar = 20; //Hur många gånger tärningen rullar innan den stannar
	results = []; //Alla rullningar tärningen gör
	for (i = 0; i<antalRullningar;i++){
	    //genererar alla resultat, sista i results är det som man flyttar efter
		randomSlag = Math.floor((Math.random() * 6) +1);
		if (randomSlag !== results[results.length-1]){ 
			results.push(randomSlag);
		}
		else {
			i--;
		}
	}
	console.log(results);
	etta = new Image();
	tvåa = new Image();
	trea = new Image();
	fyra = new Image();
	femma = new Image();
	sexa = new Image();
	etta.src = "etta.png";
	tvåa.src = "tvåa.png";
	trea.src = "trea.png";
	fyra.src = "fyra.png";
	femma.src = "femma.png";
	sexa.src = "sexa.png";
	var tärningssidor = {1:etta, 2:tvåa, 3:trea, 4:fyra, 5:femma, 6:sexa};
	for (var item in results){
		item = results[item];
		console.log(item);
		if (item === 1){
			etta.onload = function() {
				context.drawImage(etta, canvas.width / 2 + planBild.width/2+10, 0);
			}
		}
		else if (item === 2){
			tvåa.onload = function() {
				context.drawImage(tvåa,canvas.width / 2 + planBild.width/2+10, 0);
			}
		}
		else if (item === 3){
			trea.onload = function() {
				context.drawImage(trea,canvas.width / 2 + planBild.width/2+10, 0);
			}
		}
		else if (item === 4){
			fyra.onload = function() {
				context.drawImage(fyra,canvas.width / 2 + planBild.width/2+10, 0);
			}
		}
		else if (item === 5){
			femma.onload = function() {
				context.drawImage(femma,canvas.width / 2 + planBild.width/2+10, 0);
			}
		}
		else if (item === 6){
			sexa.onload = function() {
				context.drawImage(sexa,canvas.width / 2 + planBild.width/2+10, 0);
			}
		}
		
	}
}
function ritaPjäs(nummer, pjäs) {
	var avstånd = 0.03;
	if (pjäs === 1) {
		 a = planBild.width * avstånd;
		 b = planBild.width * avstånd;
	}
	if (pjäs === 2) {
		 a = planBild.width * avstånd * 2;
		 b = planBild.width * avstånd;
	}
	if (pjäs === 3) {
		 a = planBild.width * avstånd;
		 b = planBild.width * avstånd * 2;
	}
	if (pjäs === 4) {
		 a = planBild.width * avstånd * 2;
		 b = planBild.width * avstånd * 2;
	}
				//0 = Gå. Varje rutas storlek är 85*85
	var rutor = {0:"25 25", 1:"135 25", 2:"244 25", 3:"353 25", 4:"462 25", 5:"570 25", 6:"680 25", 7:"788 25", 
				8:"897 25", 9:"897 135", 10:"897 244", 11:"897 354", 12:"897 463", 13:"897 571", 14:"897 680", 15:"897 789",
				16:"897 897", 17:"788 898", 18:"680 898", 19:"570 898", 20:"460 898", 21:"354 898", 22:"245 898", 23:"136 898", 
				24:"28 898", 25:"28 789", 26:"28 680", 27:"28 571", 28:"28 463", 29:"28 354", 30:"28 244", 31:"28 135"};
	var cool = rutor[nummer];
	console.log(parseInt(cool.substring(0,cool.indexOf(" ")))); //Printar x-koordinat
	console.log(parseInt(cool.substring(cool.indexOf(" ") + 1, parseInt(cool.length)))); //Printar y-koordinat
	
	// Rita ut pjäs
	context.beginPath();//Till kanten på planen		en bit in		förhållande				koordinat enligt paintbild 1000*1000
	context.arc(canvas.width / 2 - planBild.width / 2 + a + (planBild.width * 0.001) * parseInt(cool.substring(0,cool.indexOf(" "))), // X-koordinat
										b + (planBild.width * 0.001) * parseInt(cool.substring(cool.indexOf(" ") + 1, parseInt(cool.length))), // Y-koordinat
										5, // Pjässtorlek
										0, // Rör ej
										2*Math.PI); // Rör ej
	context.closePath();
	context.fill();
}

function ritaOm() {
	context.drawImage(planBild, canvas.width / 2 - planBild.width/2, 0, planBild.width, planBild.height);
};