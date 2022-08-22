let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const computerChoices = ["rock", "paper", "scissors"]; 
    return computerChoices[Math.floor(Math.random() * 3)]; 
}

function playRound(computerSelection) {
    let playerSelection = prompt("Choose: Rock, Paper, or Scissors.", "");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore = ++playerScore;
            console.log( `You win! ${playerSelection} beats ${computerSelection}!`);
    } else if (playerSelection === computerSelection) {
            console.log( `Tie Game! You both chose ${playerSelection}.`)
    } else  if ((playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")) {
            computerScore = ++computerScore;
            console.log( `You Loose! The computers ${computerSelection} beats your ${playerSelection.toLowerCase()}!`);
        }
    }

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

function game () {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    
    function resetGame() {
        computerScore = 0;
        playerScore = 0;
    }

    if (playerScore > computerScore) {
        console.log("You Win!")
        console.log(`Your score is ${playerScore}, and the computer scored ${computerScore} `);
        resetGame();
    } else if (playerScore < computerScore) {
        console.log("You Loose!")
        console.log(`Your score is ${playerScore}, and the computer scored ${computerScore} `);
        resetGame();
    } else if (playerScore === computerScore) {
        console.log("I think the computer is in your head!")
        console.log(`You both scored ${playerScore}! `);
        resetGame();
    }
}