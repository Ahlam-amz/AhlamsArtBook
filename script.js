function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random position
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.bottom = "0px";

    // Random size
    let size = Math.random() * 12 + 2;
    star.style.width = size + "px";
    star.style.height = size + "px";

    // Random color
    const colors = ["#ffcc00", "#ff6666", "#66ff66", "#6699ff", "#ff66ff"];
    star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(star);

    // Remove the star after animation
    setTimeout(() => {
        star.remove();
    }, 5000);
}

/*const pages= document.querySelectorAll(".page");
const img= document.querySelector("img");
var colorThief= new colorThief();
let color=colorThief.getColor(img);
pages.forEach((page) =>{
    page.style.backgroundColor="rgb("+ color +")"
; 
});*/
