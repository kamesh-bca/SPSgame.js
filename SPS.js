const playGame = confirm("Shall we play stone, paper or scissor game?");
//play
if (playGame) {
  let playerChoice = prompt("please enter your stone, paper, scissor");
  if (playerChoice) {
    // user play code
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "stone" ||
      playerOne === "paper" ||
      playerOne === "scissor"
    ) {
      // computer play code
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "stone"
          : computerChoice === 2
          ? "paper"
          : "scissor";

      let result =
        playerOne === computer
          ? "Tie"
          : playerOne === "stone" && computer === "paper"
          ? `plaerOne :${playerOne}\n computer :${computer} \n computer wins!`
          : playerOne === "paper" && computer === "scissor"
          ? `plaerOne :${playerOne}\n computer :${computer} \n computer wins!`
          : playerOne === "scissor" && computer === "stone"
          ? `plaerOne :${playerOne}\n computer :${computer} \n computer wins!`
          :  `plaerOne :${playerOne}\n computer :${computer} \n player wins!`;
      alert(result);
      let playAgain = confirm("play Again");
      playAgain ? location.reload() : alert("ok, tanks for playing");
    } else {
      confirm("you didn't enter stone, paper, scissor. ");
      if (confirm) {
        location.reload();
      }
    }
  } else {
    alert("I gusee you changed your mind. Maybe next time");
  }
} else {
  alert("ok, maybe next time will play");
}
