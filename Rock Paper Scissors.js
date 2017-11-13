function getUserChoice (userInput)  {
    var userInput = userInput.toLowerCase();
    if (userInput==="rock" || userInput==="paper" || userInput==="scissors" || 
    userInput ==="bomb"){
        return userInput;}
    else {
        console.log("ERROR: Please enter 'rock', 'paper', or 'scissors'.");
    }
}
    
function getComputerChoice () {
    var randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {
        case 0:
            return "rock";
        break;
        case 1:
            return "paper";
        break;
        case 2:
            return "scissors";
        break;
    }
}

function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Tie game, shoot again!";
    }
    if(userChoice === "rock"){
       if(computerChoice === "paper"){
           return "You lose! :(";}
        else {
            return "You win!";}
    }
    if(userChoice === "paper"){
       if(computerChoice === "scissors"){
           return "You lose! :(";}
        else {
            return "You win!";}
    }
    if(userChoice === "scissors"){
       if(computerChoice === "rock"){
           return "You lose! :(";}
        else {
            return "You win!";}
    }
    if(userChoice === "bomb"){
        return "Calm down there Kim Jong Un...";
    }
}

function playGame () {
	//enter your choice between quotation marks
    userChoice = getUserChoice(" ");
    console.log(`You threw: ${userChoice}!`);
    computerChoice = getComputerChoice();
    console.log(`The computer threw: ${computerChoice}!`);
    console.log(`Result: ${determineWinner(userChoice, computerChoice)}`);
}

playGame();