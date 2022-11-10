// random value generated
let y = Math.floor(Math.random() * 100 + 1);

// counting the number of guesses and previous guesses
// made for correct Guess
let guessnum = 0;
let previousGuesses = [];
document.getElementById("submitguess").onclick = function () {
  // number guessed by user
  let x = document.getElementById("guessField").value;
  if (guessnum == 4) {
    alert("YOU LOSE " + "THE CORRECT NUMBER WAS " + y);
    previousGuesses = [];
    guessnum = 0;
    guessfield = " ";
    y = Math.floor(Math.random() * 100 + 1);
  } else {
    if (x < 1 || x > 100) {
      alert("Please Enter a number Between 1 to 100");
    } else {
      previousGuesses.push(x);
      guessnum++;

      if (x == y) {
        alert("YOU DID IT! YOU GUESSED IT RIGHT IN " + guessnum + " GUESSES ");
        document.getElementById("listOfGuesses").innerHTML = previousGuesses;
        previousGuesses = [];
        guessnum = 0;
        guessfield = " ";
      } else if (x > y) {
        alert("TRY A LOWER NUMBER");
        document.getElementById("listOfGuesses").innerHTML = previousGuesses;
      } else {
        alert("TRY A HIGHER NUMBER");
        document.getElementById("listOfGuesses").innerHTML = previousGuesses;
      }
    }
  }
};