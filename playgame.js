//Scrolling background image for canvas
//(function() {
//     window.requestAnimationFrame = window.requestAnimationFrame
//             || window.webkitRequestAnimationFrame
//             || window.mozRequestAnimationFrame
//             || function(callback) { window.setTimeout(callback, 1000 / 60); };
const imgs = ['Rocket.png', 'Rocket1.png', 'Rocket2.png', 'Rocket blue.png', 'Rocket Greyscale.png', 'Rocket P-G.png'];
const spaceshipId = window.location.href.charAt(window.location.href.length - 1);
console.log(imgs[spaceshipId])

class planet{

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
