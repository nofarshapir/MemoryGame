var images = [
  "./card images/image1.jpg", "./card images/image2.jpg", "./card images/image3.jpg", "./card images/image4.jpg", 
  "./card images/image5.jpg","./card images/image6.jpg", "./card images/image7.jpg", "./card images/image8.jpg",
  "./card images/image9.jpg","./card images/image10.jpg","./card images/image11.jpg","./card images/image12.jpg",
  "./card images/image13.jpg","./card images/image14.jpg","./card images/image15.jpg","./card images/image16.jpg",
  "./card images/image17.jpg","./card images/image18.jpg","./card images/image19.jpg","./card images/image20.jpg",
  "./card images/image21.jpg","./card images/image22.jpg","./card images/image23.jpg","./card images/image24.jpg",
  "./card images/image25.jpg","./card images/image26.jpg","./card images/image27.jpg","./card images/image28.jpg",
  "./card images/image29.jpg","./card images/image30.jpg",
];
var matchesCards = [];


// Initialize Memory Game
function initGame() {
  const cardsAmount = document.querySelector("#cards-number").value;
  const username = document.querySelector("#user-name").value;
  localStorage.setItem("cardsAmount", cardsAmount);
  localStorage.setItem("username", username);
  //open('gameBoard.html');
  //window.Location.href='gameBoard.html';
  mainSection = document.querySelector(".vh-100");
  mainSection.classList.add("display-none");
  initializeGameBoard();
  match = 0;
  moves = 0;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

function startTimer() {
  // Firs twe start by clearing the existing timer, in case of a restart
  var sec = 0;
  function pad(val) {
    return val > 9 ? val : "0" + val;
  }
  setInterval(function () {
    $("#seconds").html(pad(++sec % 60));
    $("#minutes").html(pad(parseInt(sec / 60, 10)));
  }, 1000);
  var second = 0;
}
startTimer();

function initializeGameBoard(){
  
  const gameSection = document.createElement("section");
  const headerDiv = document.createElement("div");
  const cardsContainer = document.createElement("div");
}



function createElements(cardsAmount){
  const indexSet = new Set();
  const imageArray = new Array();
  while(indexSet.size < cardsAmount){
      let randomNumber = Math.floor(Math.random() * 30);
      if(!indexSet.has(randomNumber)){
          indexSet.add(randomNumber);
      }
  }
  indexSet.forEach(value => {
    imageArray.push(images[value]);
    imageArray.push(images[value]);
  })
  for(let i = 0; i<cardsAmount*2; i++){
    createCard(imageArray.pop(Math.floor(Math.random()* imageArray.size), 1));
  }
}

function createCard(image){
  container = document.querySelector(".row");
  const newDiv = document.createElement("div");
  newDiv.classList.add("col-6");
  newDiv.classList.add("col-sm-3");
  newDiv.classList.add("col-md-2");
  newDiv.classList.add("col-lg-1");
  newDiv.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${image}" class="card-img">
</div>`
  container.appendChild(newDiv);
}
