function submitValue() {
  const form = document.getElementById("my-form");
  const username = document.getElementById("user-name");
  const cardsnum = document.getElementById("cards-number");

  const usernameVal = username.value;
  const cardsnumVal = cardsnum.value;

  localStorage.setItem("user-name", usernameVal);
  localStorage.setItem("cards-number", cardsnumVal);
  console.log("before transfer");
}
