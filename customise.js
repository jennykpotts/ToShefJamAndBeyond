const imgs = ['Rocket.png', 'Rocket1.png', 'Rocket2.png', 'Rocket blue.png', 'Rocket Greyscale.png', 'Rocket P-G.png'];
const background = document.getElementById("spaceships");

class spaceship {

    constructor(image) {
        this.image = image;
    }
    static setimage(image) {
        this.image=image;
    }

    static getimage() {
        return this.image;
    }
}

let currIdx = 0;
background.src = imgs[currIdx % 6];
document.querySelector(".prev").addEventListener("click", () => {
    currIdx--; 
    if (currIdx<0){
        currIdx=5;
    }
    background.src = imgs[currIdx%6];

});
document.querySelector(".next").addEventListener("click", () => {
    currIdx++;
    if(currIdx>5){
        currIdx=0;
    } 
    background.src = imgs[currIdx%6];

});
document.querySelector(".gotogame").addEventListener("click", () => {
    console.log("called");
    window.location.href = "playgame.html?id=" + currIdx;

});
document.querySelector(".gotohome").addEventListener("click",() => {
    window.location.href = "mainpage.html";

});
