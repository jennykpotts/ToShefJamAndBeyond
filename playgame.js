window.onload = event => {
    startGame();
};

function startGame() {  
    //myGameArea.start();
    scroll();
}

//let canvas = document.getElementById("my_canvas");
//let context = canvas.getContext("2d");
//img_width = "starrybackground.jpg".width;
//let totalSeconds = 0;

/*
function draw(delta) {
    totalSeconds += delta;
   
    var vx = 100; // the background scrolls with a speed of 100 pixels/sec
    var numImages = Math.ceil(canvas.width / img_width) + 1;
    var xpos = totalSeconds * vx % img_width;
   
    context.save();
    context.translate(-xpos, 0);
    for (var i = 0; i < numImages; i++) {
        context.drawImage("starrybackground.jpg", i * img_width, 0);
    }
    context.restore();
}
*/

(function() {
    window.requestAnimationFrame = window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || function(callback) { window.setTimeout(callback, 1000 / 60); };

    var canvas = document.getElementById('my_canvas');
    var context = canvas.getContext('2d');
    var looping = false;
    var totalSeconds = 0;

    var img = new Image();
    img.onload = imageLoaded();
    img.src = 'starrybackground.jpg';

    function imageLoaded() {
        draw(0);

        var btn = document.getElementById('btnStart');
        btn.addEventListener('click', function() {
            startStop();
        });
    }

    var lastFrameTime = 0;

    function startStop() {
        looping = !looping;

        if (looping) {
            lastFrameTime = Date.now();
            requestAnimationFrame(loop);
        }
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
   
        var vx = 100; // the background scrolls with a speed of 100 pixels/sec
        var numImages = Math.ceil(canvas.width / img.width) + 1;
        var xpos = totalSeconds * vx % img.width;
   
        context.save();
        context.translate(-xpos, 0);
        for (var i = 0; i < numImages; i++) {
            context.drawImage(img, i * img.width, 0);
        }
        context.restore();
    }
}());

/*
var myGameArea = {  
    canvas : document.createElement("canvas"),  
    start : function() {  
        this.canvas.width = 1400;  
        this.canvas.height = 650;  
        this.context = this.canvas.getContext("2d");  
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);  
    }  
}
*/