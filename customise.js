const imgs = ['Rocket.png', 'Rocket1.png', 'Rocket2.png', 'Spaceship.png', 'Spaceship1.png', 'Spaceship2.png'];
const background = document.getElementById("spaceships");

let currIdx = 0;
background.src = imgs[currIdx % 6];
document.querySelector(".prev").addEventListener("click", () => {
    currIdx--; 
    background.src = imgs[((currIdx % 6) + 6) % 6];
});
document.querySelector(".next").addEventListener("click", () => {
    currIdx++; 
    background.src = imgs[((currIdx % 6) + 6) % 6];
});
