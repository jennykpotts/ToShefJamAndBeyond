//Scrolling background image for canvas
(function() {
    window.requestAnimationFrame = window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || function(callback) { window.setTimeout(callback, 1000 / 60); };

    var canvas = document.getElementById('my_canvas');
    var context = canvas.getContext('2d');
    var looping = true;
    var totalSeconds = 0;

    var img = new Image();
    img.onload = imageLoaded;
    img.src = 'planets.png';

    function imageLoaded() {
        draw(0);
        start();
    }
    var lastFrameTime = 0;

    function start() {
        lastFrameTime = Date.now();
        requestAnimationFrame(loop);
    }

    function loop() {
        if (!looping) {
            return;
        }
        requestAnimationFrame(loop);

        var now = Date.now();
        var deltaSeconds = (now - lastFrameTime) / 1000;
        lastFrameTime = now;
        draw(deltaSeconds);
    }

    function draw(delta) {
        totalSeconds += delta;
   
        var vx = 30; // background scroll speed in pixels/sec
        var numImages = Math.ceil(canvas.width / img.width) + 1;
        var xpos = totalSeconds * vx % img.width;
   
        context.save();
        context.translate(-xpos, 0);
        for (var i = 0; i < numImages; i++) {
            context.drawImage(img, i * img.width, 0, photo.width * 0.2, photo.height * 0.4);
        }
        context.restore();
    }

    //Display planets on canvas
    var imgArr = ["blueplanet.png", "gasgiant.png", "iceplanet.png", "purpleplanet.png", "redplanet.png"];

    var photo = new Image();
    photo.onload = function() {
        context.drawImage(photo, 0, 0, photo.width * 0.02, photo.height * 0.04);  
    }
    photo.src = "blueplanet.png";
    
    //displayImg();


    /*
    function displayImg(){
        var num = Math.floor(Math.random() * (imgArr.length));
        //document.canvas.src=""+imgArr[num];
        context.drawImage(imgArr[num], 50, 50);
    }
    */

    /*
    var planet = new Image();
    planet.src = "blueplanet.png";

    function drawMap() {
        context.drawImage(planet, 0, 0);
    }

    function init() {
        drawMap();
    }

    planet.onload = function() {
        init();
    }
    */
}());
