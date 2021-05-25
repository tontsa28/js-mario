const mario = document.getElementById("mario")

function jump() {
    if (mario.classList != "jump") {
        mario.classList.add("jump");
        setTimeout(function () {
            mario.classList.remove("jump");
        }, 500);
    }
}

document.addEventListener("keydown", function (event) {
    jump();
});