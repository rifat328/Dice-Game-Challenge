let random1, random2;

const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const rollBtn = document.querySelector(".roll");
const result = document.getElementById("result");

const randomDice = () => {
  random1 = Math.floor(Math.random() * 6) + 1;
  random2 = Math.floor(Math.random() * 6) + 1;
  rollDice1(dice1, random1);
  rollDice2(dice2, random2);

  setTimeout(checkPoint, 1000);
};

const rollDice1 = (dice1, random) => {
  dice1.style.animation = "rolling 3s";
  setTimeout(() => {
    switch (random) {
      case 1:
        dice1.style.transform = "rotateX(0deg) rotateY(0deg)";
        break;
      case 6:
        dice1.style.transform = "rotateX(180deg) rotateY(0deg)";
        break;
      case 2:
        dice1.style.transform = "rotateX(-90deg) rotateY(0deg)";
        break;
      case 5:
        dice1.style.transform = "rotateX(90deg) rotateY(0deg)";
        break;
      case 3:
        dice1.style.transform = "rotateX(0deg) rotateY(90deg)";
        break;
      case 4:
        dice1.style.transform = "rotateX(0deg) rotateY(-90deg)";
        break;
      default:
        break;
    }
    dice1.style.animation = "";
  });
};
const rollDice2 = (dice2, random) => {
  dice2.style.animation = "rolling 3s";
  setTimeout(() => {
    switch (random) {
      case 1:
        dice2.style.transform = "rotateX(0deg) rotateY(0deg)";
        break;
      case 6:
        dice2.style.transform = "rotateX(180deg) rotateY(0deg)";
        break;
      case 2:
        dice2.style.transform = "rotateX(-90deg) rotateY(0deg)";
        break;
      case 5:
        dice2.style.transform = "rotateX(90deg) rotateY(0deg)";
        break;
      case 3:
        dice2.style.transform = "rotateX(0deg) rotateY(90deg)";
        break;
      case 4:
        dice2.style.transform = "rotateX(0deg) rotateY(-90deg)";
        break;
      default:
        break;
    }
    dice2.style.animation = "";
  });
};

function checkPoint() {
  {
    if (random1 === random2) {
      result.textContent = "🚩 Draw 🚩";
    } else if (random1 > random2) {
      result.textContent = "🚩 Player 1 Wins! ";
    } else {
      result.textContent = "Player 2 Wins! 🚩";
    }
  }
}

rollBtn.addEventListener("click", randomDice);
