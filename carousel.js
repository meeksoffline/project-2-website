// This file makes the two arrow buttons scroll the typography cards
// on the Concepts page.

// Find the row of cards and the two arrow buttons in the HTML
var track = document.querySelector(".carousel-track");
var leftArrow = document.querySelector(".arrow-left");
var rightArrow = document.querySelector(".arrow-right");

// One card is 602px wide plus a 40px gap, so each click moves 642px
var cardWidth = 642;

// Left arrow: scroll back by one card
leftArrow.addEventListener("click", function () {
  track.scrollBy({ left: -cardWidth, behavior: "smooth" });
});

// Right arrow: scroll forward by one card
rightArrow.addEventListener("click", function () {
  track.scrollBy({ left: cardWidth, behavior: "smooth" });
});