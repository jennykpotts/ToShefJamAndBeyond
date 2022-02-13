
const imgs = ['Rocket.png', 'Rocket1.png', 'Rocket2.png', 'Rocket blue.png', 'Rocket Greyscale.png', 'Rocket P-G.png'];
const planetImgs=['redplanet.png','purpleplanet.png','gasgiant.png','iceplanet.png','blueplanet.png'];
const spaceshipId = window.location.href.charAt(window.location.href.length - 1);

let onScreenPlanets = [];

class Planet{

    constructor(img,topx,topy){
        this.img=img;
        this.topx=topx;
        this.topy=topy;

    }
    getImg() {
        return this.img;
    }

    getTopx() {
        return this.topx;
    }
    getTopy(){
        return this.topy;

    }
    setImg(img){
        this.img = img;
    }
    setTopx(topx){
        this.topx = topx;
    }
    setTopy(topy){
        this.topy = topy;
    }

    moveplanet(){
        setTopx(this.topx-=15);
    }
}

window.setInterval(planets,20);
window.setInterval(generatePlanet, 1000);


var canvas = document.getElementById('my_canvas'),
context = canvas.getContext('2d');

function addPlanet(){
    var newPlanet=new Planet(planetImgs[randomImageGenerator()], canvas.width - 12, generateYCoordinate());
    onScreenPlanets.push(newPlanet);
    return newPlanet;
}

function randomImageGenerator(){
    return Math.floor(Math.random() * 5);
}

function deletePlanet(){
    onScreenPlanets.shift();
}

function generateYCoordinate(){
    canvas.height=canvas.height;
    return Math.floor(Math.random()*(canvas.height-22)+12);
}

var canvas = document.getElementById('my_canvas'),
context = canvas.getContext('2d');
let x = 0;
let y = 0;
let planetCount=0;

function generateSpaceship()
{
  spaceship = new Image();
  spaceship.src = imgs[spaceshipId];
  spaceship.onload = function(){
    context.drawImage(spaceship, x, y, 12, 6);
  }
}

document.onkeydown = function(e) {
    if(e.keyCode === 38 && y >= 4) {
        y -= 5;
        canvas.width=canvas.width;
        context.drawImage(spaceship,x,y,12,6);
    }
    if(e.keyCode === 40 && y<=canvas.height-8) {
        y+=5;
        canvas.width=canvas.width;
        context.drawImage(spaceship,x,y,12,6);
    }
}

function generatePlanet() {
    let currPlanet = addPlanet();
    planet = new Image();
    planet.src = currPlanet.img;
    planet.onload = function() {
        context.drawImage(planet, currPlanet.topx,currPlanet.topy, 12, 12);
    }
}

function planets(){
    //for (let planetCount = 0; planetCount< onScreenPlanets.length-1 ; planetCount++){
        //spawn planet from list
        //move planet from list
    //}
    //if (onScreenPlanets=null || onScreenPlanets.slice(-1)){
        //Add new planet to list
        //Spawn new planet
    //}

    //if (onScreenPlanets[0].getTopx<=0 && onScreenPlanets!=0){
        //Delete planet from the array meaning it won't spawn again
    //}
    for (let currPlanet of onScreenPlanets) {
        canvas.width=canvas.width;
        planet = new Image();
        planet.src = currPlanet.img;
        currPlanet.topx -= 1;
        planet.onload = function() {
            context.drawImage(planet, currPlanet.topx,currPlanet.topy, 12, 12);
        }
        if (currPlanet.topx<0){
            onScreenPlanets.shift();
            planetCount+=1;
            console.log(planetCount)
            changingPlanetCount=document.getElementById("planetCount")
            changingPlanetCount.innerHTML=planetCount;

        }
        generateSpaceship();
    }
}
