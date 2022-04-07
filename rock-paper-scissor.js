// computerPlay function - computer randomly selects rock,paper or scissors and outputs


function computerPlay() {
    let randomSelect = ["Rock", "Paper", "Scissors"];
    return randomSelect[Math.floor(Math.random() * 3 )];
          
}

let result = computerPlay();

console.log(result);



