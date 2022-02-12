const imgs = ['Rocket.png', 'Rocket1.png', 'Rocket2.png', 'Rocket blue.png', 'Rocket Greyscale.png', 'Rocket P-G.png'];
const background = document.getElementById("spaceships");

class spaceship{
    get image(){
        return this.image;
    }

    set image(image){
        this.image=image;
    }
}

let currIdx = 0;
background.src = imgs[currIdx % 6];
globalThis.currentSpaceship=new spaceship(imgs[currIdx % 6]);
document.querySelector(".prev").addEventListener("click", () => {
    currIdx--; 
    background.src = imgs[((currIdx % 6) + 6) % 6];
    currentSpaceship.image=(imgs[currIdx % 6]);

});
document.querySelector(".next").addEventListener("click", () => {
    currIdx++; 
    background.src = imgs[((currIdx % 6) + 6) % 6];
    currentSpaceship.image=(imgs[currIdx % 6]);

});
