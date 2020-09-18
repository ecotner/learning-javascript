let opponent = document.getElementById("opponent")
let player = document.getElementById("player")
let body = document.body

// function updateOpponent() {

// }


body.addEventListener("mousemove", function(event) {
    // get mouse Y coordinate
    const mY = event.pageY;
    // set middle of paddle position to Y coord
    const height = player.offsetHeight;
    let pos = mY - (height/2);
    player.style.top = pos + "px";
    opponent.style.top = pos + "px";
});

let puckElement = document.getElementById("puck");
let puck = {
    X: NaN,
    Y: NaN,
    vX: NaN,
    vY: NaN,
    height: 50,
    width: 50,
    color: puckElement.style.backgroundColor,
}


run(puck, puckElement, opponent, player, fps=60, speed=40, speedupRate=3)