let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("game was drawn!! play again");
  msg.innerText = "Game was drawn!! Play again";
  msg.style.backgroundColor = "#081b31";
};

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#computer-score");

const showWin = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You win!");
    msg.style.backgroundColor = "green";
  } else {
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    console.log("Computer Wins!!");
    comScore++;
    compScorePara.innerText = comScore;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("computer choice =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // userChoice = scissors
      userWin = compChoice === "rock" ? false : true;
    }
    // ✅ FIX: pass all three arguments
    showWin(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
