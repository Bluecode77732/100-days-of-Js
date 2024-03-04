const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const control = document.querySelector(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

// Get high score from local storage

let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `${highScore}`;

// Pass a random between 1 and 30 as food position

const updateFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) * 1;
    foodY = Math.floor(Math.random() * 30) * 1;
}

const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
}

// Change velocity value based on key press

const changeDirection = e =>  {
    if(e.key == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if(e.key == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

//Change Direction on each key click.

/* control.forEach(button => button.addEnventListener() { }); */

const initGame = () => {
    if(gameOver) 
    return handleGameOver;

    let html = `<div class="food" style="grid-area : ${foodY} / ${foodX}"></div>`;
    //When the snake eat food
    if(snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        snakeBody.push([foodY, foodX]); //It adds food into the snake body array.
        score++;
        highScore = score >= highScore ? score : highScore // if score > high score => high score = score

        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score : ${score}`;
        highScoreElement.innerText = `High Score : ${highScore}`;
    }

    //Update snake head.
    snakeX += velocityX;
    snakeY += velocityY;

    //Shfting forward values of elements in snake body by one.
    for (let i = snakeBody.length; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    } 

    snakeBody[0] = [snakeX, snakeY];

    //Check whether snake body is out of wall.
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        return gameOver();
    }

    
}









