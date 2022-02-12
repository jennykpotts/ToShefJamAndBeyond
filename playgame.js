
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
        setTopy(this.bottomx-=15);
    }
}

var intervalid=window.setInterval(planets,500);


var canvas = document.getElementById('my_canvas'),
context = canvas.getContext('2d');


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


}

function addPlanet(){
    var newPlanet=new Planet(planetImgs[randomImageGenerator()], 5,5); //Doesnt work because don't have canvas width/height
    onScreenPlanets.push(newPlanet);
    return newPlanet;
}

function randomImageGenerator(){
    return Math.floor(Math.random() * 5);
}

    
var canvas = document.getElementById('my_canvas'),
context = canvas.getContext('2d');
let x = 0;
let y = 0;

generateSpaceship();
generatePlanet();

function generateSpaceship()
{
  spaceship = new Image();
  spaceship.src = imgs[spaceshipId];
  spaceship.onload = function(){
    context.drawImage(spaceship, x, y, 12, 6);
  }
}

function generatePlanet() {
    let currPlanet = addPlanet();
    planet = new Image();
    planet.src = currPlanet.img;
    planet.onload = function() {
        context.drawImage(planet, currPlanet.topy,currPlanet.topx, 12, 12);
    }
    console.log('hi')
  }

document.onkeydown = function(e) {
    if(e.keyCode === 38 && y >= 0) {
        y -= 5;
    }
    if(e.keyCode === 40) {
        y+=5;
    }
    canvas.width=canvas.width;
    context.drawImage(spaceship,x,y,12,6);
}

//Scrolling background image for canvas
//(function() {
//     window.requestAnimationFrame = window.requestAnimationFrame
//             || window.webkitRequestAnimationFrame
//             || window.mozRequestAnimationFrame
//             || function(callback) { window.setTimeout(callback, 1000 / 60); };
//     var looping = true;
//     var totalSeconds = 0;

//     var img = new Image();
//     img.onload = imageLoaded;
//     img.src = 'planets.png';

//     function imageLoaded() {
//         draw(0);
//         start();
//     }
//     var lastFrameTime = 0;

//     function start() {
//         looping = looping;

//         if (looping) {
//             lastFrameTime = Date.now();
//             requestAnimationFrame(loop);
//         }
//     }

//     function loop() {
//         if (!looping) {
//             return;
//         }
//         requestAnimationFrame(loop);

//         var now = Date.now();
//         var deltaSeconds = (now - lastFrameTime) / 1000;
//         lastFrameTime = now;
//         draw(deltaSeconds);
//     }

//     function draw(delta) {
//         totalSeconds += delta;
   
    //     var vx = 30; // background scroll speed in pixels/sec
    //     var numImages = Math.ceil(canvas.width / img.width) + 1;
    //     //var numImages = 100;
    //     var xpos = totalSeconds * vx % img.width;
   
    //     context.save();
    //     context.translate(-xpos, 0);
    //     for (var i = 0; i < numImages; i++) {
    //         context.drawImage(img, i * img.width, 0, img.width * 0.2, img.height * 0.3);
    //     }
    //     context.restore();
    // }

    /*
    //Display planets on canvas
    var imgArr = ["blueplanet.png", "gasgiant.png", "iceplanet.png", "purpleplanet.png", "redplanet.png"];

//     var photo = new Image();
//     photo.onload = function() {
//         context.drawImage(photo, 0, 0, photo.width * 0.02, photo.height * 0.04);  
//     }
//     photo.src = "blueplanet.png";
    
    //displayImg();
    */

//     /*
//     function displayImg(){
//         var num = Math.floor(Math.random() * (imgArr.length));
//         //document.canvas.src=""+imgArr[num];
//         context.drawImage(imgArr[num], 50, 50);
//     }
//     */

//     /*
//     var planet = new Image();
//     planet.src = "blueplanet.png";

//     function drawMap() {
//         context.drawImage(planet, 0, 0);
//     }

//     function init() {
//         drawMap();
//     }

//     planet.onload = function() {
//         init();
//     }
//     */
// }());

/*
    var canvas = document.getElementById('my_canvas');
    var context = canvas.getContext('2d');

    var img = new Image();
    img.onload = imageLoaded;
*/
//}());
