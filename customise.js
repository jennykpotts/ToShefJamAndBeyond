const imgs = ['Rocket.png', 'Rocket1.png', 'Rocket2.png', 'Rocket blue.png', 'Rocket Greyscale.png', 'Rocket P-G.png'];
const background = document.getElementById("spaceships");

class spaceship{

    constructor(image) {
        this.image = image;
    }
    static image(){
        return this.image
    }
}

let currIdx = 0;
background.src = imgs[currIdx % 6];
var currentSpaceship=new spaceship(imgs[currIdx % 6]);
document.querySelector(".prev").addEventListener("click", () => {
    currIdx--; 
    background.src = imgs[((currIdx % 6) + 6) % 6];
    console.log(imgs[((currIdx % 6) + 6) % 6]);
    spaceship.image()=imgs[currIdx % 6];

});
document.querySelector(".next").addEventListener("click", () => {
    currIdx++; 
    background.src = imgs[((currIdx % 6) + 6) % 6];
    spaceship.image()=imgs[currIdx % 6];

});
