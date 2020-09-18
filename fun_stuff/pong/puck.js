function resetPuck(puck, el, speed, fps) {
    // start off in the middle of the window
    puck.X = window.innerWidth / 2;
    puck.Y = window.innerHeight / 2;
    // pick random velocity direction such that there isn't too much up/down motion
    let theta = Math.random() * Math.PI
    if (theta <= Math.PI/2) {
        theta -= Math.PI/4;
    } else {
        theta += Math.PI/4;
    }
    speed = speed * (30/fps);
    puck.vX = speed * Math.cos(theta);
    puck.vY = speed * Math.sin(theta);
    // make position absolute
    el.style.position = "absolute";
    // set shape, size and color
    el.style.height = puck.height + "px";
    el.style.width = puck.width + "px";
    el.style.backgroundColor = puck.color;
}

function drawPuck(puck, el) {
    el.style.left = puck.X + "px";
    el.style.bottom = puck.Y + "px";
}

function updatePuck(puck, leftPaddle, rightPaddle) {
    // Updates the position of the puck, then detects collisions. Returns `true` as long
    // as the puck is still in play, and returns `false` if it collides with either the
    // left/right wall


    // update position assuming no collisions
    puck.X = puck.X + puck.vX;
    puck.Y = puck.Y + puck.vY;
    // update velocity upon collision with top/bottom walls
    if (
        ((puck.Y < 0) && (puck.vY < 0)) // too far down
        || ((puck.Y > window.innerHeight - puck.height) && (puck.vY > 0)) // too far up
    ) {
        puck.vY *= -1
    }
    // return false if collision with left/right walls
    if (
        ((puck.X < 0) && (puck.vX < 0)) // too far left
        || ((puck.X > window.innerWidth - puck.width) && (puck.vX > 0)) // too far right
    ) {
        // puck.vX *= -1
        return false;
    }
    // update velocity upon collision with right paddle
    if (
        (puck.X + puck.width > rightPaddle.offsetLeft) // puck right edge greater than paddle left edge
        && (puck.X < rightPaddle.offsetLeft + rightPaddle.offsetWidth) // puck left edge left of paddle right edge
        && (window.innerHeight - rightPaddle.offsetTop - rightPaddle.offsetHeight < puck.Y + puck.height) // paddle bottom edge below puck top edge
        && (window.innerHeight - rightPaddle.offsetTop > puck.Y) // paddle top edge above puck bottom edge
        && (puck.vX > 0) // moving right
    ) {
        puck.vX *= -1
    }
    // update velocity upon collision with left paddle
    if (
        (puck.X < leftPaddle.offsetLeft + leftPaddle.offsetWidth) // puck left edge less than paddle right edge
        && (puck.X + puck.width > leftPaddle.offsetLeft) // puck right edge right of paddle left edge
        && (window.innerHeight - leftPaddle.offsetTop - leftPaddle.offsetHeight < puck.Y + puck.height) // paddle bottom edge below puck top edge
        && (window.innerHeight - leftPaddle.offsetTop > puck.Y) // paddle top edge above puck bottom edge
        && (puck.vX < 0) // moving left
    ) {
        puck.vX *= -1
    }
    // return true as long as game continues
    return true;
}

function makePuckFaster(puck, speedIncrement) {
    const v = Math.sqrt(Math.pow(puck.vX, 2) + Math.pow(puck.vY, 2));
    const speedup = (v + speedIncrement)/v;
    puck.vX *= speedup;
    puck.vY *= speedup;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function run(puck, puckElement, leftPaddle, rightPaddle, fps=30, speed=20, speedupRate=1) {
    // Initiates and runs the game of pong. accepts an object describing the puck's attributes, the HTML
    // elements that represent the puck, left/right paddle, the frame rate, a speed factor, and a
    // speedup factor (speedupRate=1 increases the speed by 1 every second)


    // loop forever over matches
    while (true) {
        // loop over frames within matches as long as the puck is still in play
        resetPuck(puck, puckElement, speed, fps);
        drawPuck(puck, puckElement);
        await sleep(1500);
        while (updatePuck(puck, leftPaddle, rightPaddle)) {
            makePuckFaster(puck, speedupRate/fps)
            drawPuck(puck, puckElement);
            await sleep(1000/fps);
        }
        puckElement.style.backgroundColor = "red"; // temporarily change color
        if (puck.X < window.innerWidth/2) {
            score = document.getElementById("scorecard-right")
        } else {
            score = document.getElementById("scorecard-left")
        }
        score.innerText = parseInt(score.innerText) + 1;
        await sleep(1000);
    }
}
