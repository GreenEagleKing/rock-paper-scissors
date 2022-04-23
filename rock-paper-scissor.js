let playerScore = 0;
let computerScore = 0;
let draw = 0;
let playerSelection;
let computerSelection;


const body = document.body
const playerSelectionDiv = document.createElement('h2');
const computerSelectionDiv = document.createElement('h2');
const resultDiv = document.createElement('h3');
const compScoreDiv = document.createElement('h4');
const playScoreDiv = document.createElement('h4');
document.body.append(playerSelectionDiv, computerSelectionDiv, resultDiv, compScoreDiv, playScoreDiv);
;

// Returning player choice from button choice

function playerPlay() {
let btns = document.querySelectorAll('button');

btns.forEach(btns => btns.addEventListener('click', (e) => {
    playerSelection = e.target.id
    playerSelectionDiv.innerText = 'Player selected ' + playerSelection;
    return playerSelection;
}))
}


// computerPlay function - computer randomly selects rock,paper or scissors and outputs

function computerPlay() {
    const shapes = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * shapes.length);
    computerSelection = (shapes[random]);
    computerSelectionDiv.innerText = 'Computer selected ' + computerSelection;
    return computerSelection;
}


// Play 1 round of RPS using playerSelection and computerSelection

function playRound() {
          
        if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
         resultDiv.innerText = "You win! Rock beats Scissors"; playerScore++;
    }   else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        resultDiv.innerText = "You win! Paper beats Rock"; playerScore++;
    }   else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
         resultDiv.innerText = "You win! Scissors beat Paper"; playerScore++;
    }   else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        resultDiv.innerText = "You lose! Rock beats Scissors"; computerScore++;
    }   else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        resultDiv.innerText = "You lose! Paper beats Rock"; computerScore++;
    }   else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        resultDiv.innerText = "You lose! Scissors beats Paper"; computerScore++;
    }   else {
        resultDiv.innerText = "Tie! Play again"; 
    }
}

// Game - playRound is run 5x and a winner is declared


function game() {
    for (let i = 0; i < 5; i++) {
    let roundResult = playRound(playerPlay(playerSelection), computerPlay(computerSelection));
    gameScore(roundResult);
    playScoreDiv.innerText = "Player score is " + playerScore;
    compScoreDiv.innerText = "Computer score is " + computerScore;

    if (playerScore === 5){
        resultDiv.innerText = "Player Wins!";
        reset();
        return
    }   else if (computerScore === 5){
        resultDiv.innerText = "Computer Wins!";
        reset()
        return
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
}}

function reset(){
    playerScore = 0
    computerScore = 0
    playerSelectionDiv.innerText = "Please select";
    computerSelectionDiv.innerText = "Awaiting player selection";
    return playerPlay();
}

// When RPS player input button is clicked, game function is run

let btn = document.getElementsByClassName('buttons');
for (var i = 0 ; i < btn.length; i++) {
    btn[i].addEventListener('click', game) ; 
 }
