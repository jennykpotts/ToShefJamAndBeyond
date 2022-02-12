"use strict";

const canvas = document.getElementById("customiseCanvas");
const ctx = canvas.getContext("2d");
var img = new Image();

img.src="Spaceship Y-LB-B.png";
img.onload = function chooseSpaceship(){ 
    ctx.drawImage(img,0,0); 
};


