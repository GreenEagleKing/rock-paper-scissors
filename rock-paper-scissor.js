let playerScore = 0;
let computerScore = 0;
let draw = 0;
let playerSelection;
let computerSelection;


const body = document.body
const playerSelectionDiv = document.createElement('div');
const computerSelectionDiv = document.createElement('div');
document.body.append(playerSelectionDiv, computerSelectionDiv);
;


// Returning player choice from button choice

let btns = document.querySelectorAll('button');

btns.forEach(btns => btns.addEventListener('click', (e) => {
    playerSelection = e.target.id
    console.log('Player selected ' + playerSelection)
    playerSelectionDiv.innerText = 'Player selected ' + playerSelection;
}))


// computerPlay function - computer randomly selects rock,paper or scissors and outputs

function computerPlay() {
    const shapes = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * shapes.length);
    computerSelection = (shapes[random]);
    computerSelectionDiv.innerText = 'Computer selected ' + computerSelection;
    return computerSelection;
}



// Play 1 round of RPS using playerSelection and computerSelection

function playRound (playerSelection, computerSelection) {
    
    console.log("Computer selected " + computerSelection);
        
        if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
         alert("You win! Rock beats Scissors"); playerScore++;
    }   else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        alert("You win! Paper beats Rock"); playerScore++;
    }   else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
         alert("You win! Scissors beat Paper"); playerScore++;
    }   else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        alert("You lose! Rock beats Scissors"); computerScore++;
    }   else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        alert("You lose! Paper beats Rock"); computerScore++;
    }   else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        alert("You lose! Scissors beats Paper"); computerScore++;
    }   else {
        alert("Tie! Play again"); 
    }
}

// Game - playRound is run 5x and a winner is declared


function game() {
    for (let i = 0; i < 5; i++) {
    //let playerSelection = player();
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    gameScore(roundResult);
    console.log("Player score is " + playerScore);
    console.log("Computer score is " + computerScore);

    if (playerScore === 5){
        alert("Player Wins!");
        return;
    }   else if (computerScore === 5){
        alert("Computer Wins!")
    } else {
        return;
    }
}

// Result - Keeping track of the score 

function gameScore(result){

    if (result === playerScore) {
        playerScore++;
    } else if (result === computerScore) {
        computerScore++;
    } else {
        return draw;
    }
}
}

// When RPS button is clicked game function is run

let btn = document.getElementsByClassName('buttons');
for (var i = 0 ; i < btn.length; i++) {
    btn[i].addEventListener('click', game) ; 
 }
