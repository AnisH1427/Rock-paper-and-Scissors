/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

const totalScores = { computerScore: 0, playerScore: 0, tieMatch: 0 }
const resultDiv = document.getElementById('result'); // You loose or You won
const handsDiv = document.getElementById('hands'); //display computer choice and Human choice
const playerScoreDiv = document.getElementById('player-score'); //Total 

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const computerChoice = Math.floor(Math.random() * choice.length);
  return choice[computerChoice]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  // console.log(score);
  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0;
  }
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1;
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1;
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1;
  }
  // Otherwise human loses (aka set score to -1)
  else {
    score = -1;
  }
  // return score
  console.log(score);
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  console.log(" Show result function activated...")
  if (score == -1) {
    resultDiv.innerText = "You lost !!!!";
  } else if (score == 0) {
    resultDiv.innerText = "It's tie, Draw-Draw Match";
  } else {
    resultDiv.innerText = "You Won!...BAAM";
  }

  console.log('before here');
  handsDiv.innerText = `🙎‍♀️ ${playerChoice} vs 📺 ${computerChoice}`;
  console.log("here");
  playerScoreDiv.innerText = `Your score : ${totalScores['playerScore']} Computer Score :${totalScores['computerScore']} Tie Match : ${totalScores['tieMatch']}`;
}
// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  // console.log(playerChoice);
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  if(score==1){
    totalScores['playerScore'] += 1
    
  }else if(score==-1){
      totalScores['computerScore'] +=1
  }else{
    //draw
    totalScores['tieMatch'] += 1;
  }
  console.log({ score })
  console.log(totalScores)
  showResult(score, playerChoice, computerChoice);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const buttons = document.querySelectorAll(".rpsButton");
  // buttons[0].onclick = () => console.log(buttons[0].value + "done");
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  buttons.forEach(each_button => {
    each_button.onclick = () => onClickRPS(each_button.value)
  });


  // Add a click listener to the end game button that runs the endGame() function on click
  endGameBtnDiv = document.getElementById('endGameButton');
  endGameBtnDiv.onclick=()=>endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
totalScores['playerScore']=0;
totalScores['computerScote']=0;
  
resultDiv.innerText='';
handsDiv.innerText='';
playerScoreDiv.innerText='';
  }
playGame()