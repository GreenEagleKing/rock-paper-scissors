// Returning user input from html dropdown

var playerChoice = function () {
    const selectedValue = document.getElementById("handChoice").value;
    return (selectedValue);
}

let playerSelection = playerChoice;

// computerPlay function - computer randomly selects rock,paper or scissors and outputs

function computerPlay() {
    const shapes = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * shapes.length);
    return (shapes[random]);
}

let computerSelection = computerPlay();
console.log("Computer selected " + computerSelection);


// Play round of RPS using playerSelection and computerSelection


function playRound (playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerChoice();
    console.log("Play computer selected " + computerSelection);
    
        if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        alert("You win! Rock beats Scissors");
    }   else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        alert("You win! Paper beats Rock");
    }   else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        alert("You win! Scissors beat Paper");
    }   else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        alert("You lose! Rock beats Scissors");
    }   else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        alert("You lose! Paper beats Rock");
    }   else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        alert("You lose! Scissors beats Paper");
    }   else {
        alert("Tie! Play again"); 
    }
}
