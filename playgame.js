window.onload = event => {
    scroll();
};

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
    img.src = 'sqaurebackground.jpg';

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
   
        var vx = 30; // the background scrolls with a speed of 30 pixels/sec
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
