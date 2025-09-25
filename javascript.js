let humanScore = 0;
let computerScore = 0;

const button = document.getElementById("playButton");

button.addEventListener("click", () => {
    
    playGame();

    });

function getHumanChoice() {

    let userInput = prompt("Enter paper, rock, or scissors");

    if(userInput)
    {
        userInput = userInput.toLowerCase();
    }
    return userInput;

}

function getComputerChoice() {

// Return Rock Paper Scissors

const choices = ["rock","paper","scissors"];

// So we know that it needs to choose a random index
// How do we do that?
// We can do this by declaring a randomIndex variable, and using Math.random

const randomIndex = Math.floor(Math.random() * choices.length);

// Math.floor rounds DOWN to the nearest integer
// Math.random generates a number from 0 to 1 * length

return choices[randomIndex];

}

function playGame() {

    humanScore = 0;
    computerScore = 0;
    
    
    for(let i = 0; i < 5; i++){

    let humanChoice = getHumanChoice();

    if (humanChoice === null) 
    {
        alert("Game cancelled!");
        return; 
    }

    playRound(humanChoice, getComputerChoice());
    }

    if (humanScore > computerScore) {
    alert("You beat the Computer " + humanScore + "-" + computerScore + "!");
    }
    else if (computerScore > humanScore) {
    alert("You lost to the Computer " + computerScore + "-" + humanScore + "!");
    }
    else {
    alert("It's a tie! " + humanScore + "-" + computerScore + "!");
    }

}



function playRound(humanChoice, computerChoice){

    // To play the round, you have to compare humanChoice, and computerChoice

    // Scissor Beats Paper
    // Paper beats rock
    // Rock beats scissors

    if(humanChoice == computerChoice)
    {
        alert("Tie!");
    }
    else if(humanChoice == "rock" && computerChoice == "paper")
    {
        computerScore++;
        alert("Computer Wins!");

    }
    else if(humanChoice == "rock" && computerChoice == "scissors")
    {
        humanScore++;
        alert("You Win!");
    }
    else if(humanChoice == "paper" && computerChoice == "rock")
    {
        humanScore++;
        alert("You Win!");
    }
    else if(humanChoice == "paper" && computerChoice == "scissors")
    {
        computerScore++;
        alert("Computer Wins!");
    }
    else if(humanChoice == "scissors" && computerChoice == "paper")
    {
        humanScore++;
        alert("You Win!");
    }
    else if(humanChoice == "scissors" && computerChoice == "rock")
    {
        computerScore++;
        alert("Computer Wins!");
    }
}



// Notes:
// Game will play 5 rounds. playGame function will call playRound to play 5 rounds.
// Keep track of the score and declare winner at the end