var ballElement = document.querySelector(".ball");
var containerElement = document.querySelector(".container");

var stepX = window.innerHeight/20; // window.innerWidth/20;
var stepY = window.innerHeight/20;

var moveLeft = function() {
    if (ballElement.offsetLeft <= stepX) {
        ballElement.style.left = "0px";
    }
    else {
        ballElement.style.left = (ballElement.offsetLeft - stepX) + "px";
    }
};

var moveRight = function() {
    var offsetRight = ballElement.offsetLeft + ballElement.offsetWidth;

    if (offsetRight + stepX >= containerElement.offsetWidth) {
        ballElement.style.left = (containerElement.offsetWidth - ballElement.offsetWidth) + "px";
    }
    else {
        ballElement.style.left = (ballElement.offsetLeft + stepX) + "px";
    }
};

var moveUp = function() {
    if (ballElement.offsetTop <= stepY) {
        ballElement.style.top = "0px";
    }
    else {
        ballElement.style.top = (ballElement.offsetTop - stepY) + "px";
    }
};

var moveDown = function() {
    var offsetDown = ballElement.offsetTop + ballElement.offsetHeight;

    if (offsetDown + stepY >= containerElement.offsetHeight) {
        ballElement.style.top = (containerElement.offsetHeight - ballElement.offsetHeight) + "px";
    }
    else {
        ballElement.style.top = (ballElement.offsetTop + stepY) + "px";
    }
};

var onKeyPress = function(event) {
    var events = {
        // WASD Keys
        "87": moveUp, // KeyW
        "65": moveLeft, // KeyA
        "83": moveDown, // KeyS
        "68": moveRight, // KeyD

        // Arrow Keys
        "37": moveLeft,
        "38": moveUp,
        "39": moveRight,
        "40": moveDown,
    };
    if (events[event.keyCode]) {
        events[event.keyCode]();
    }
};

document.addEventListener("keydown", onKeyPress);

// To make sure the ball is inside the page when page is resized
window.onresize = function() {
    moveUp();
    moveDown();
    moveLeft();
    moveRight();
};

var getRandomNumber = function(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
};

var positionBallRandomly = function(){
    ballElement.style.top = "0px";
    ballElement.style.left = "0px";
    for (var i = 0; i <= getRandomNumber(20); i++) {
        moveRight();
    }
    for (var i = 0; i <= getRandomNumber(20); i++) {
        moveDown();
    }
}

positionBallRandomly();
