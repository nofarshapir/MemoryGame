let symbols = [
    "bicycle",
    "bicycle",
    "leaf",
    "leaf",
    "cube",
    "cube",
    "anchor",
    "anchor",
    "paper-plane-o",
    "paper-plane-o",
    "bolt",
    "bolt",
    "bomb",
    "bomb",
    "diamond",
    "diamond",
  ],
  opened = [],
  match = 0,
  moves = 0;

// Initialize Memory Game
function initGame() {
  let cards = shuffle(symbols); // need to create this function */
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
