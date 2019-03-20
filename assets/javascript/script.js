//Array of Choices
var userInputs = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//Win and Lose
var wins = 0;
var losses = 0;
var guesses = 9;
//Psychic Function
document.onkeyup = function(event) {
       var userGuess = event.key;
 console.log (userGuess)
       var psychic = userInputs[Math.floor(Math.random() * userInputs.length)];
 console.log(psychic);
       if ((userGuess === "a" || (userGuess === "b") || (userGuess === "c")) || (userGuess === "d") || (userGuess === "e") || (userGuess === "f")|| 
       (userGuess === "g")|| (userGuess === "h")||  (userGuess === "i")|| (userGuess === "j")  || (userGuess === "k")|| (userGuess === "l")||(userGuess = "m") || (userGuess === "n")||(userGues = "o")|| (userGuess === "p")|| (userGuess === "q")||(userGuess === "r")||(userGuess === "s")|| (userGuess === "t")|| (userGuess === "u")||(userGuess === "v")||(userGuess === "w")||(userGuess === "x")||(userGuess === "y")||(userGuess ="z")){

              if (userGuess === psychic)
       {wins++}
              else{losses++ && guesses--};
console.log(guesses)
console.log(wins)
console.log(losses)
var userText = document.getElementById("choice-text");
userText.textContent =  "You chose: " + userGuess;
var psychicText = document.getElementById("psychic-text");
psychicText.textContent =  "I chose: " + psychic;
var winsText = document.getElementById("wins-text");
winsText.textContent = "Times you've won: " + wins; 
var lossesText = document.getElementById("losses-text");
lossesText.textContent = "Times I've won: " + losses;
var guessestext = document.getElementById("guessestext");
guessestext.textContent = "Guess remaining: " + guesses;
       }
if (guesses === 0){alert("Out of guesses! You lose!") && re
}
}
