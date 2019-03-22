var userInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0
var losses = 0
var guesses = 10
var letters = []
var computerChoice = []
//Psychic Function

var psychic = userInputs[Math.floor(Math.random() * userInputs.length)];
computerChoice.push(psychic)
console.log(psychic[0]);


//UserGuess function
document.onkeyup = function (event) {
      var userGuess = event.key
if(letters.includes(userGuess)){
      alert("You've already guessed that letter!")
      return
}

      //logic
      if (userInputs.includes(userGuess)) {
            letters.push(userGuess)
            console.log(userGuess);
            if ((userGuess === computerChoice[0]) && (guesses > 0)) {
                  wins++; alert("You win!")
                  guesses = 10;
                  letters.length = 0;
                  computerChoice.length = 0;
                  var psychic = userInputs[Math.floor(Math.random() * userInputs.length)];
                  computerChoice.push(psychic[0]);
                  console.log(psychic[0]);


            }
            else if ((userGuess !== computerChoice[0]) && (guesses > 0)) {
                  guesses--
            }

            else {
                  losses++; alert("You lose!")
                  guesses = 10;
                  letters.length = 0;
                  computerChoice.length = 0;
                  var psychic = userInputs[Math.floor(Math.random() * userInputs.length)];
                  computerChoice.push(psychic[0]);
                  console.log(psychic[0]);

            }
            console.log(guesses)
            console.log(wins)
            console.log(losses)
            var userText = document.getElementById("choice-text");
            userText.textContent = "You chose: " + userGuess;
            var winsText = document.getElementById("wins-text");
            winsText.textContent = "Times you've won: " + wins;
            var lossesText = document.getElementById("losses-text");
            lossesText.textContent = "Times I've won: " + losses;
            var guessesText = document.getElementById("gtext");
            guessesText.textContent = "Guesses remaining: " + guesses;
            var lettersText = document.getElementById("ltext");
            lettersText.textContent = "Letters you've guessed: " + letters
      }
      else {
            alert("Please insert a letter from the alphabet!")

      }
     
}