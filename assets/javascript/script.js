//Array of Choices
var userInputs = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//Win and Lose
var wins = 0;
var losses = 0;

document.onkeyup = function(event) {

       // Determines which key was pressed.
       var userGuess = event.key;
 console.log (userGuess)
       // Randomly chooses a choice from the options array. This is the Computer's guess.
       var psychic = userInputs[Math.floor(Math.random() * userInputs.length)];
 console.log(psychic);
       // Reworked our code from last step to use "else if" instead of lots of if statements.
 
       // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
       if ((userGuess === "a" || (userGuess === "b") || (userGuess === "c")) || (userGuess === "d") || (userGuess === "e") || (userGuess === "f")|| 
       (userGuess === "g")|| (userGuess === "h")||  (userGuess === "i")|| (userGuess === "j")  || (userGuess === "k")|| (userGuess === "l")||(userGuess = "m") || (userGuess === "n")||(userGues = "o")|| (userGuess === "p")){

              if (userGuess === psychic)
       {wins++}
              else{losses++};
console.log(wins)
console.log(losses)
}
}
