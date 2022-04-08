// computerPlay function - computer randomly selects rock,paper or scissors and outputs

function computerPlay() {
    let randomSelect = ["Rock", "Paper", "Scissors"];
    return randomSelect[Math.floor(Math.random() * 3 )];
          
}

let computerResult = computerPlay();

console.log(computerResult);

// Returning user input from html dropdown

function playerSelection() {
    selectElement = document.querySelector('#handChoice');
    output = selectElement.options[selectElement.selectedIndex].value;
    console.log(output);
}
