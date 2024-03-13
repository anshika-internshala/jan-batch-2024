let randomNumber = Math.trunc(Math.random() * 20) + 1;

console.log("random number", randomNumber);

let guessNumber = document.getElementById("guessNumber");
console.log(guessNumber);

let checkButton = document.getElementById("check-btn");
checkButton.addEventListener("click", checkNumber);

let message = document.querySelector(".message");
let highScore = document.querySelector("#highScore");

let number = document.querySelector(".number");

let score = document.querySelector(".score");

let againButton = document.querySelector(".again");
againButton.addEventListener("click", resetGame);

let scores = 20;

let body = document.querySelector("body");

window.addEventListener("load", function () {
    console.log("window has been loaded");
    let highscoreValue = window.localStorage.getItem("highscores");
    highScore.textContent = highscoreValue;
})

function checkNumber() {
    let guessValue = guessNumber.value;
    console.log(guessValue);

    if (guessValue == randomNumber) {
        document.querySelector("body").style.backgroundColor = "green";
        message.textContent = "Correct Number";
        highScore.textContent = scores;
        number.textContent = randomNumber;
        window.localStorage.setItem("highscores",scores);
    } else if (guessValue != randomNumber) {

        let messageValue = guessValue < randomNumber ? "too low" : "too high";

        if (Math.abs(randomNumber - guessValue) <= 2) {
            messageValue = "too close";
        }

        if (scores > 0) {
            message.textContent = messageValue;
            scores--;
            score.textContent = scores;
        }

        else {
            message.textContent = "You have lost the game!";
            document.querySelector("body").style.backgroundColor = "red";
            checkButton.disabled = true;
        }
       
    } 
    
}

function resetGame() {
    console.log("reset game");
    location.reload();
}



/**
 *  let header = document.createElement("header");
 *  let body = document.querySelector("body");
 * 
 *  body.appendChild(header);
 * 
 * let h1 = document.createElement("h1");
 * h1.textContent = "Guess My Number!";
 * 
 * header.appendChild(h1);
 * 
 * 
 */

