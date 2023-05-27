const cards = document.querySelectorAll(".memory-card");
const refresh = document.querySelector(".refresh i");
const final = document.querySelector(".final");
const congrats = document.querySelector("#congratsSection");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const again = document.querySelector(".again");
const totalTime = document.querySelector("#totalTime");

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false; //To not allow 4 consecutive clicks
let totalSeconds = 0;
let interval;
let finalTime;
let click = -1;
let score = 0;
const imgarr = [
  "./card images/image1.jpg",
  "./card images/image2.jpg",
  "./card images/image3.jpg",
  "./card images/image4.jpg",
  "./card images/image5.jpg",
  "./card images/image6.jpg",
  "./card images/image7.jpg",
  "./card images/image8.jpg",
  "./card images/image9.jpg",
  "./card images/image10.jpg",
  "./card images/image11.jpg",
  "./card images/image12.jpg",
  "./card images/image13.jpg",
  "./card images/image14.jpg",
  "./card images/image15.jpg",
  "./card images/image16.jpg",
  "./card images/image17.jpg",
  "./card images/image18.jpg",
  "./card images/image19.jpg",
  "./card images/image20.jpg",
  "./card images/image21.jpg",
  "./card images/image22.jpg",
  "./card images/image23.jpg",
  "./card images/image24.jpg",
  "./card images/image25.jpg",
  "./card images/image26.jpg",
  "./card images/image27.jpg",
  "./card images/image28.jpg",
  "./card images/image29.jpg",
  "./card images/image30.jpg",
];
const numPairs = localStorage.getItem("cards-number");

function startGame() {
  var numPairs = localStorage.getItem("cards-number");
  document.getElementById("score").innerHTML = score;
  // Generate game board with the chosen number of pairs
  var gameBoard = document.getElementById("memory-game");
  gameBoard.innerHTML = ""; // Clear previous game board

  for (var i = 0; i < numPairs; i++) {
    // Create card elements dynamically
    var card1 = document.createElement("div");
    card1.className = "memory-card";
    card1.id = i + 1;
    var cont =
      '<img class="front-face" src="' +
      imgarr[i] +
      '" alt="Front image"/>' +
      '<div class="back-face"></div>';

    card1.innerHTML = cont; // Append the card to the game board
    gameBoard.appendChild(card1);
    var card2 = document.createElement("div");
    card2.className = "memory-card";
    card2.id = i + 1;
    var cont =
      '<img class="front-face" src="' +
      imgarr[i] +
      '" alt="Front image"/>' +
      '<div class="back-face"></div>';

    card2.innerHTML = cont; // Append the dup card to the game board
    gameBoard.appendChild(card2);
  }
  const cards = document.querySelectorAll(".memory-card");
  cards.forEach((card) => card.addEventListener("click", flipCard));
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * numPairs * 2);
    card.style.order = randomPos;
  });
}
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    startTime();
    return;
  }
  //second click
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.id === secondCard.id;
  isMatch ? disableCards() : unFlipCards();
  console.log("the isMatch value is " + isMatch);
}

function disableCards() {
  //when you match
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  score += 10;
  document.getElementById("score").innerHTML = score;
  resetBoard();
  gameWon();
}

function unFlipCards() {
  lockBoard = true;
  //not match
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 700);
}

function resetBoard() {
  // Allows us to click again when the card returns
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//when the refresh button is pressed
refresh.addEventListener("click", function () {
  confirm("Are you sure you want to refresh the cards?");
  location.reload();
});

//time display
function startTime() {
  if (click === -1) {
    interval = setInterval(function () {
      //interval allows it to work continuously at certain intervals.
      final.innerHTML = "You won in " + finalTime + " time!";
      finalTime = minute.innerHTML + ":" + second.innerHTML;
      totalSeconds++;
      second.innerHTML = pad(totalSeconds % 60);
      minute.innerHTML = pad(parseInt(totalSeconds / 60));
    }, 1000);
  }
  click = 1;
}

function pad(val) {
  // 00:00 as time progresses.
  const valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

//game won
function gameWon() {
  if (click < 1) {
    // clicks to stop the second. Even if the game is over, the second prevents it from continuing.
    firstCard = e.target;
  }

  if (document.getElementsByClassName("flip").length === numPairs * 2) {
    congratsSection.classList.replace("hidden", "show");
    clearInterval(interval);
    finalTime = minute.innerHTML + ":" + second.innerHTML;
    final.innerHTML =
      localStorage.getItem("user-name") +
      ", you won in " +
      finalTime +
      " time and got " +
      score +
      " points! Good Job ";
    totalTime.innerHTML = finalTime;
  }
  click = 0;
}

//congrats the player
again.addEventListener("click", function () {
  congratsSection.classList.replace("show", "hidden");
  location.reload();
});

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * numPairs * 2);
    card.style.order = randomPos;
  });
  score = 0;
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
