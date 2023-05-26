$(document).ready(function() {
  // Array of image URLs
  var images = [
    "./card images/image1.jpg",
    "./card images/image2.jpg",
    "./card images/image3.jpg",
    "./card images/image4.jpg",
    "./card images/image5.jpg",
    "./card images/image6.jpg",
    // Add more image URLs as needed
  ];

  // Create an array to store card elements
  var cards = [];

  // Function to initialize the game
  function initializeGame(cardCount) {
    // Clear the game board
    $("#game-board").empty();

    // Randomly select card images
    var selectedImages = [];
    for (var i = 0; i < cardCount / 2; i++) {
      var randomIndex = Math.floor(Math.random() * images.length);
      var image = images[randomIndex];
      selectedImages.push(image);
      selectedImages.push(image);
    }

    // Shuffle the selected images
    selectedImages.sort(function() { return 0.5 - Math.random(); });

    // Create card elements and append them to the game board
    for (var i = 0; i < cardCount; i++) {
      var card = $("<div>", { class: "card" });
      var image = $("<img>", { src: selectedImages[i], alt: "Card" });
      card.append(image);
      $("#game-board").append(card);

      // Attach click event handler to the card
      card.on("click", cardClickHandler);

      // Store the card element in the cards array
      cards.push(card);
    }
  }

  // Click event handler for the card
  function cardClickHandler() {
    // Ignore click if the card is already open or there are two open cards
    if ($(this).hasClass("open") || $(".open").length === 2) {
      return;
    }

    // Open the clicked card
    $(this).addClass("open");

    // Check if two cards are open
    if ($(".open").length === 2) {
      // Disable click events on all cards
      $(".card").off("click");

      // Check if the two open cards have the same image
      if ($(".open img:first").attr("src") === $(".open img:last").attr("src")) {
        // If the images match, keep the cards open
        $(".open").addClass("match");
      } else {
        // If the images don't match, close the cards after a short delay
        setTimeout(function() {
                    $(".open").removeClass("open");
        }, 1000);
      }

      // Enable click events on cards after a short delay
      setTimeout(function() {
        $(".card:not(.match)").on("click", cardClickHandler);
      }, 1000);
    }
  }

  // Call the initializeGame function with an initial card count
  var initialCardCount = 6; // You can change this value as needed
  initializeGame(initialCardCount);
});

         
