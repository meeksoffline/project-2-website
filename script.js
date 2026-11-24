// This file makes the review box on the Home page change when it is clicked.
// It is a mockup, so nothing is really saved.

// Find the review box in the HTML
var reviewBox = document.querySelector(".review-box");

// Each step has the words to show and the classes that style them.
// The steps go in order, from top to bottom of your Figma component.
var steps = [
  { words: "Tell us your thoughts here...", look: "review-box review-box-tall review-hint" },
  { words: "|", look: "review-box review-box-tall review-typed" },
  { words: "This is the best film I’ve ever seen! 5/5 stars!", look: "review-box review-box-tall review-typed" },
  { words: "Name (if desired)", look: "review-box review-box-short review-hint" },
  { words: "|", look: "review-box review-box-short review-typed" },
  { words: "Anonymous", look: "review-box review-box-short review-typed" },
  { words: "Submitted!", look: "review-box review-box-tall review-hint" }
];

// This keeps track of which step we are on. 0 is the first step.
var currentStep = 0;

// Every click moves to the next step
reviewBox.addEventListener("click", function () {
  currentStep = currentStep + 1;

  // After the last step, go back to the first one
  if (currentStep === steps.length) {
    currentStep = 0;
  }

  reviewBox.textContent = steps[currentStep].words;
  reviewBox.className = steps[currentStep].look;
});
