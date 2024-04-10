//  homeScore initialized to zero
let homeScore = 0;
// guestScore initialized to zero
let guestScore = 0;

// stores a reference to the HOME element that displays the score.
let homeScoreEl = document.getElementById("red-light-counter-home");
// // stores a reference to the GUEST element that displays the score.
let guestScoreEl = document.getElementById("red-light-counter-guest");

// .textContent is a property for manipulating the text inside HTML elements
document.getElementById("red-light-counter-home").textContent = homeScore;

// wrong way to write .textContent
// homeScore = document.getElementById("red-light-counter-home").textContent;

document.getElementById("red-light-counter-guest").textContent = guestScore;

function plusOne() {
	homeScore += 1;
	// homeScore = homeScoreEl.textContent;
	homeScoreEl.textContent = homeScore;
}

function plusTwo() {
	homeScore += 2;
	homeScoreEl.textContent = homeScore;
}

function plusThree() {
	homeScore += 3;
	homeScoreEl.textContent = homeScore;
}

function plusOneGuest() {
	guestScore += 1;
	guestScoreEl.textContent = guestScore;
}

function plusTwoGuest() {
	guestScore += 2;
	guestScoreEl.textContent = guestScore;
}

function plusThreeGuest() {
	guestScore += 3;
	guestScoreEl.textContent = guestScore;
}
