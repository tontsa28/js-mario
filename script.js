const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe");

function jump() {
    if (mario.classList != "jump") {
        mario.classList.add("jump");
        setTimeout(function () {
            mario.classList.remove("jump");
        }, 700);
    }
}

let isAlive = setInterval(function () {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));

    if (pipeLeft <50 && pipeLeft > 0 && marioTop >= 245) {
        alert("Game over!");
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});