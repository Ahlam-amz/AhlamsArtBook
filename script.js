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

function adjustFlipbookSize() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    if (width < 768) {  // Mobile screens
        $(".flipbook").turn("size", width * 0.9, height * 0.8);
    } else {  // Desktop
        $(".flipbook").turn("size", 1000, 680);
    }
}

// Adjust on page load and resize
$(document).ready(adjustFlipbookSize);
$(window).resize(adjustFlipbookSize);


if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    $(".flipbook").turn({
        display: "single", // Show one page at a time
        width:  window.innerWidth * 0.9,
        height: window.innerHeight * 0.8,
        autoCenter: true,
        when: {
            turned: function(event, page, view) {
                console.log("Page turned: " + page);
            }
        }
    });

    // Add tap-to-turn feature
    $(".flipbook").on("click", function(e) {
        var half = $(this).width() / 2;
        if (e.pageX < half) {
            $(".flipbook").turn("previous");
        } else {
            $(".flipbook").turn("next");
        }
    });
}


/*const pages= document.querySelectorAll(".page");
const img= document.querySelector("img");
var colorThief= new colorThief();
let color=colorThief.getColor(img);
pages.forEach((page) =>{
    page.style.backgroundColor="rgb("+ color +")"
; 
});*/
