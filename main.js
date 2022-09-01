let playerCount = 0;
let computerCount = 0;
let playerSelection;
let computerSelection;

// Chooses what the computer is picking
function computerPlay(){
    const computerChoices = ["rock", "paper", "scissors"]; 
    return computerChoices[Math.floor(Math.random() * 3)]; 
}

function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    

    // Decide who wins each round
    const result1 = document.querySelector(".result1");

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore = ++playerCount;
            result1.innerHTML = 'You win! ' + capitalize(playerSelection) +' beats '+ computerSelection + '!';
            result1.style.color = "green"
    } else if (playerSelection === computerSelection) {
        result1.innerHTML = 'You both choose '+ computerSelection + '!';
    } else  if ((playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")) {
            computerCount = ++computerCount;
            result1.innerHTML = 'You lose! ' + capitalize(playerSelection) +' beats '+ computerSelection + '!';
            result1.style.color = "red"
        }

    // Change the computer choice icon 
    // Should probably group this in a function that also changes player icon
        const computerImage = document.querySelector(".computerImage");

        if (computerSelection === "rock") {
        computerImage.innerHTML = '<img src="rockBtn.png" />';
        } else if (computerSelection === "paper") {
        computerImage.innerHTML = '<img src="paperBtn.png" />';
        } else if (computerSelection === "scissors") {
        computerImage.innerHTML = '<img src="scissorsBtn.png" />';
        }

    // I guess we should show score, huh?

        const userScore = document.querySelector(".userScore");
        userScore.innerText =  `Player: ${playerCount}`;

        const computerScore = document.querySelector(".computerScore");
        computerScore.innerText =  `Computer: ${computerCount}`;



    }

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }


function playGame() {

  const rockBtn = document.querySelector(".rockBtn");
  const paperBtn = document.querySelector(".paperBtn");
  const scissorsBtn = document.querySelector(".scissorsBtn");
  const userImage = document.querySelector(".userImage");

    rockBtn.addEventListener('click', function() {
        const playerSelection = 'rock';
        userImage.innerHTML = '<img src="rockBtn.png" />';
        playRound(computerSelection, playerSelection);
        gameOver(computerCount, playerCount);
    });

    paperBtn.addEventListener('click', function() {
        const playerSelection = 'paper';
        userImage.innerHTML = '<img src="paperBtn.png" />';
        playRound(computerSelection, playerSelection);
        gameOver(computerCount, playerCount);
    });

        scissorsBtn.addEventListener('click', function() {
        const playerSelection = 'scissors';
        userImage.innerHTML = '<img src="scissorsBtn.png" />';
        playRound(computerSelection, playerSelection);
        gameOver(computerCount, playerCount);
    });
}

    


    function resetGame() {
        computerCount = 0;
        playerCount = 0;
}

    function gameOver(computerCount, playerCount) {

    const overlay = document.querySelector(".overlay");
    const showScore = document.querySelector(".showScore");

        if (playerCount === 5) {
            overlay.style.display = "block";
            showScore.style.display = "block";
            showScore.style.color = "green";
            showScore.innerHTML =  `You Win! <br> Your score is ${playerCount}, and the computer scored ${computerCount} `
            resetGame();
        } else if (computerCount === 5) {
            overlay.style.display = "block";
            showScore.style.display = "block";
            showScore.style.color = "red";
            showScore.innerHTML =  `You Loose! <br> Your score is ${playerCount}, and the computer scored ${computerCount}. <br> Click here to play again! `
            resetGame();
        } else if (playerCount === 5 && computerCount === 5) {
            showScore.innerHTML =  `Tie Game!`
            showScore.innerHTML = `Your score is ${playerCount}, and the computer scored ${computerCount} `;  
            resetGame();
        }

        showScore.addEventListener("click", function(){
            overlay.style.display = "none";
            showScore.style.display = "none";
        })
    }



  