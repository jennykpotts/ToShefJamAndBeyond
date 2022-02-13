
const imgs = ['Rocket.png', 'Rocket1.png', 'Rocket2.png', 'Rocket blue.png', 'Rocket Greyscale.png', 'Rocket P-G.png'];
const planetImgs = ['redplanet.png', 'purpleplanet.png', 'gasgiant.png', 'iceplanet.png', 'blueplanet.png'];
const spaceshipId = window.location.href.charAt(window.location.href.length - 1);

let onScreenPlanets = [];

class Planet {

    width = 12;
    height = 12;

    constructor(img, topx, topy) {
        this.img = img;
        this.topx = topx;
        this.topy = topy;

    }
    getImg() {
        return this.img;
    }
    getTopx() {
        return this.topx;
    }
    getTopy() {
        return this.topy;
    }
    setImg(img) {
        this.img = img;
    }
    setTopx(topx) {
        this.topx = topx;
    }
    setTopy(topy) {
        this.topy = topy;
    }

    moveplanet() {
        setTopx(this.topx -= 15);
    }
}

const intervalPlanets = window.setInterval(planets, 2000 / 60);
const intervalGeneratePlanet = window.setInterval(generatePlanet, 1000);
generateSpaceship()

const canvas = document.getElementById('my_canvas'),
    context = canvas.getContext('2d');

function addPlanet() {
    var newPlanet = new Planet(planetImgs[randomImageGenerator()], canvas.width + 12, generateYCoordinate());
    onScreenPlanets.push(newPlanet);
    return newPlanet;
}

function randomImageGenerator() {
    return Math.floor(Math.random() * 5);
}

function deletePlanet() {
    onScreenPlanets.shift();
}

function generateYCoordinate() {
    return Math.floor(Math.random() * (canvas.height - 12));
}

let x = 0;
let y = 0;
let planetCount = 0;
const speed = 5;

function generateSpaceship() {
    spaceship = new Image();
    spaceship.src = imgs[spaceshipId];
    spaceship.onload = function () {
        context.clearRect(x, y - speed, 12, 6 + speed);
        context.drawImage(spaceship, x, y, 12, 6);
    }
}

document.onkeydown = function (e) {
    if (e.keyCode === 38 && y >= 4) {
        context.clearRect(x, y, 12, 6);
        y -= speed;
        context.drawImage(spaceship, x, y, 12, 6);
    }
    if (e.keyCode === 40 && y <= canvas.height - 8) {
        context.clearRect(x,y,12,6);
        y += speed;
        context.drawImage(spaceship, x, y, 12, 6);
    }
}

function generatePlanet() {
    const currPlanet = addPlanet();
    const planet = new Image();
    planet.src = currPlanet.img;
    planet.onload = function () {
        context.drawImage(planet, currPlanet.topx, currPlanet.topy, 12, 12);
    }
}

function planets() {
    for (let currPlanet of onScreenPlanets) {
        
        const planet = new Image();
        planet.src = currPlanet.img;
        currPlanet.topx -= 1;
        
        planet.onload = function () {
            context.clearRect(currPlanet.topx + 1, currPlanet.topy, 12, 12);
            context.drawImage(planet, currPlanet.topx, currPlanet.topy, 12, 12);
        }
        if (currPlanet.topx < -12) {
            context.clearRect(currPlanet.topx, currPlanet.topy, 12, 12);
            onScreenPlanets.shift();
            planetCount += 1;
        }
        
        let epsilon = 10;
        if (currPlanet.topx < epsilon && currPlanet.topy < y + epsilon / 2 && currPlanet.topy > y - epsilon / 2) {
            clearInterval(intervalPlanets);
            clearInterval(intervalGeneratePlanet);
            displayText();
        }
    }
}
window.addEventListener("load", () => {
    var myAudio = new Audio('LightYears.mp3');
    myAudio.loop = true;
    myAudio.play();

})

function displayText() { 
    document.getElementById("game-over").style.display = "block";
    document.getElementById("game-over").innerHTML=`Game over :( . Your score was: ${planetCount}`;
    
    // ctx.font = "30px Arial";
    // ctx.fillText("Hello World", 10, 50);
    // context.fillText('You lost', canvas.weight/2, canvas.height/2);
}
