console.log("Welcome to Rock, Paper, Scissors!");

function computerPlay() {
    let i = Math.floor(Math.random() * 3)
    // console.log(i);
    if (i === 0) {
        return "rock"; 
    } else if (i === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// fixed from recursive function to while loop
function playerPrompt() {
    let k = prompt("Select your weapon:", "");
    // console.log(k);
    if (k === null) {
        return;
    }
    while (k !== 'rock' && k !== 'paper' && k !== 'scissors') {
        alert("This is an invalid weapon.\n\nPlease choose rock, paper or scissors.");
        k = prompt("Select your weapon:", "");
        if (k === null) {
            return;
        }
    }
    console.log("The player has chosen " + k + ".");
    return k;
}

function playRound(a, b) {
//  if (b === 'a') {
//      alert("And now you understand recursion.")
//  }
//  console.log('Player selection is ' + b);
    if (b === undefined) {
    return;
    }
    if (a === 'rock') {
        if (b === "rock") {
            alert("It's a tie!");
        } else if (b === 'paper') {
            alert("You win! Paper beats rock!");
        } else {
            alert("You lose! Rock beats scissors!");
        }
    }
    if (a === 'paper') {
        if (b === "paper") {
            alert("It's a tie!");
        } else if (b === 'scissors') {
            alert("You win! Scissors beat paper!");
        } else {
            alert("You lose! Paper beats rock!");
        }
    }
    if (a === 'scissors') {
        if (b === "scissors") {
            alert("It's a tie!");
        } else if (b === 'rock') {
            alert("You win! Rock beats scissors!");
        } else {
            alert("You lose! Scissors beats paper!");
        }
    }
    console.log('The computer has chosen ' + a + '.');
}

const computerSelection = computerPlay();
const playerSelection = playerPrompt();

playRound(computerSelection, playerSelection);
