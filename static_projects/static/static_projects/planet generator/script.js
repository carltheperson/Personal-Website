const c = document.getElementById("planet");
const ctx = c.getContext("2d");
ctx.filter = 'blur(6px)';

const planetNameInput = document.getElementById("planetNameInput");
const planetNameBtn = document.getElementById("planetNameBtn");
const infoArea = document.getElementById("infoArea");

let name = "Example Planet";
let amountOfPoints = 30;
let width = 400;

let points, chanceOfLand, x, y, landColor;

makePlanet();
GenerateInfo();


// If user presses enter in textinput
planetNameInput.addEventListener("keyup", function (e) {
	if (event.keyCode === 13) {
		displayPlanet();
	}
});

planetNameBtn.addEventListener("click", function () {
	displayPlanet();
});


function displayPlanet() {
	name = planetNameInput.value.charAt(0).toUpperCase() + planetNameInput.value.slice(1);;
	makePlanet();
	GenerateInfo();
}


// Random number from string
function getRandomNumber(seed) {
	let randomNumber = 1;
	seed = (name + seed.toString()).split("");

	for (let i = 0; i < seed.length; i++) {
		seed[i] = seed[i].charCodeAt(0) - 97;

		if (seed[i] <= 0) {
			seed[i] = (seed[i] * -1) + 1
		}

		if (i % 2 == 0) {
			randomNumber = randomNumber * seed[i];
		} else {
			randomNumber = randomNumber + seed[i];
		}
	}


	randomNumber = parseFloat("0." + (randomNumber * Math.PI).toString().split("").reverse().join("").replace(/^0+/i, ""));
	return randomNumber;
}


function getRandomColor(seed) {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(getRandomNumber(seed + i) * 16)];
	}
	return color;
}

function getNabouringPoints(points, point) {

	let nabours = [];

	let range = ((width) / amountOfPoints);

	for (i = 0; i < points.length; i++) {
		if (points[i][0] > point[0] - range && points[i][0] < point[0] + range) { // X
			if (points[i][1] > point[1] - range && points[i][1] < point[1] + range) { // Y
				if (points[i] != point) { // If there not the same
					nabours.push(points[i]);
				}
			}
		}
	}

	return nabours;

}

// Get full group from point
function getGroup(points, point) {
	if (point[2] != "used") { // If it's not already in a group
		let used = [];
		let newNabours = getNabouringPoints(points, point);

		let currentLength;
		let newPoints;

		while (newNabours.length > 0) {
			currentLength = newNabours.length;
			for (let i = 0; i < currentLength; i++) {
				if (!used.includes(newNabours[i])) {
					newPoints = getNabouringPoints(points, newNabours[i]);
					for (let j = 0; j < newPoints.length; j++) {
						newNabours.push(newPoints[j]);
					}
					used.push(newNabours[i]);
				}
			}

			newNabours = newNabours.filter(function (point) {
				return !used.includes(point);
			});
		}

		ctx.fillStyle = landColor;
		for (let i = 0; i < used.length; i++) {// Draw circle around points in group
			ctx.beginPath();
			ctx.arc(used[i][0], used[i][1], ((width) / amountOfPoints) * 1.75, 0, 2 * Math.PI);
			ctx.fill();
			ctx.closePath();
			points[points.indexOf(used[i])].push("used");
		}
	}

}

function drawLand(points) {
	pointgroups = [];
	for (let i = 0; i < points.length; i++) {
		getGroup(points, points[i]);
	}

}

function drawOcean() {
	ctx.fillStyle = getRandomColor("Ocean");
	ctx.beginPath();
	ctx.arc(width / 2, width / 2, width / 2, 0, 2 * Math.PI);
	ctx.fill();
}


function makePlanet() {
	points = [];
	chanceOfLand = getRandomNumber("land") * (0.5) + 0.45;
	x = ((width) / amountOfPoints) / 2;
	y = ((width) / amountOfPoints) / 2;
	for (let i = 0; i < amountOfPoints; i++) { // Make points
		for (j = 0; j < amountOfPoints; j++) {
			if (getRandomNumber("land" + i.toString() + j.toString()) > chanceOfLand) {
				points.push([Math.round(x), Math.round(y)]);
			}
			y += ((width) / amountOfPoints);
		}
		x += ((width) / amountOfPoints);
		y = ((width) / amountOfPoints) / 2;
	}


	drawOcean();
	landColor = getRandomColor("Land color");
	drawLand(points);
}

function GenerateInfo() {
	let info = "";

	info += "<h3 id=\"planetTitle\">" + name + "</h3>";

	info += "<h3>Diameter</h3>";
	if (getRandomNumber("small diameter?") > 0.6) {
		info += "<p>" + (Math.floor(getRandomNumber("diameter") * (140000 - 4500)) + 4500) + " km</p>";
	} else {
		info += "<p>" + (Math.floor(getRandomNumber("diameter") * (10000 - 4500)) + 4500) + " km</p>";
	}

	info += "<h3>Length of day</h3>";
	info += "<p>" + (Math.floor(getRandomNumber("day length") * (100 - 5)) + 5) + " hours</p>";

	info += "<h3>Length of year</h3>";
	info += "<p>" + (Math.floor(getRandomNumber("year length") * (1500 - 50)) + 50) + " days</p>";

	info += "<h3>Moons</h3>";
	if (getRandomNumber("no moons?") < 0.3) {
		info += "<p>None</p>";
	} else if (getRandomNumber("1 - 4 moons?") < 0.4) {
		info += "<p>" + (Math.floor(getRandomNumber("moons") * (4 - 1)) + 1) + "</p>";
	} else {
		info += "<p>" + (Math.floor(getRandomNumber("moons") * (65 - 1)) + 1) + "</p>";
	}

	info += "<h3>Galaxy</h3>";
	if (getRandomNumber("unnamed galaxy?") < 0.6) {
		let galaxys = ["Milky Way", "Milky Way", "Milky Way", "Andromeda", "Andromeda", "Mayall's Object", "Bode's Galaxy", "Black Eye Galaxy", "Circinus", "Sunflower Galaxy", "Estella", "Lyra"]
		info += "<p>" + galaxys[Math.floor(getRandomNumber("galaxy") * galaxys.length)] + "</p>";
	} else {
		let code = "";
		let letters = "123456789123456789123456789ABCDEFGHIJKLMNOPQRSTUVWXZY";
		for (let i = 0; i < Math.floor(getRandomNumber("unnamed") * (5 - 2)) + 2; i++) {
			code += letters[Math.floor(getRandomNumber("unamed lettercode" + i) * letters.length)];
		}
		info += "<p>#" + code + "</p>";
	}

	info += "<h3>Inhabited</h3>";
	if (getRandomNumber("inhabited?") < 0.25) {
		info += "<p>Yes</p>";
	} else {
		info += "<p>No</p>";
	}

	infoArea.innerHTML = info;

}