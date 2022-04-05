var hScore = 0;
var cScore = 0;
var pcDigit = document.querySelector("#pc-digit");
var huDigit = document.querySelector("#h-digit");
let midText = document.querySelector("#middle-p");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
let resetBtn = document.querySelector("#reset");

function computerPlay() {
    let selection = ["rock", "paper", "scissor"]
    return selection[~~(Math.random() * selection.length)] //~~cuts all fractional digits
}
computerPlay()

function game(playerSelection) {
    let computerSelection = computerPlay()

    if (playerSelection == computerSelection) {
        midText.textContent = "Draw";
        document.getElementById(playerSelection).classList.add("yellow")
        setTimeout(function () {
            document.getElementById(playerSelection).classList.remove("yellow")
        }, 500)

    } else if ((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissor") ||
        (playerSelection == "scissor" && computerSelection == "rock")) {
        cScore++
        pcDigit.textContent = cScore;
        midText.textContent = `${computerSelection}  beats ${playerSelection} point for computers`;
        document.getElementById(playerSelection).classList.add("red")
        setTimeout(function () {
            document.getElementById(playerSelection).classList.remove("red")
        }, 500)
    } else if ((playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "scissor")) {
        hScore++
        huDigit.textContent = hScore
        midText.textContent = `${playerSelection} beats ${computerSelection} point for humans`;
        document.getElementById(playerSelection).classList.add("green")
        setTimeout(function () {
            document.getElementById(playerSelection).classList.remove("green")
        }, 500)
    }

    function limitPlay() {

        if (hScore == 5 || cScore == 5) {
            document.getElementById("btns").classList.add("disapear")
            declareWinner();
        }
    }
    limitPlay()
}
game()

function main() {
    rockBtn.addEventListener("click", function () {
        game("rock");
    })

    paperBtn.addEventListener("click", function () {
        game("paper");
    })

    scissorBtn.addEventListener("click", function () {
        game("scissor");
    })
}
main()

function declareWinner() {
    if (hScore > cScore) {
        midText.textContent = "You win!"

    } else if (hScore < cScore) {
        midText.textContent = "Man kind has lost!"
    }
}
declareWinner()

function reset() {
    resetBtn.addEventListener("click", function () {
        window.location.reload();
    })
}
reset()