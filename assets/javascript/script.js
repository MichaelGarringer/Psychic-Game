//Array of Choices
var userInputs = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//Win and Lose
var wins = 0;
var losses = 0;
document.onkeyup = function(event) {
       var userGuess = event.key;
 console.log (userGuess)
       var psychic = userInputs[Math.floor(Math.random() * userInputs.length)];
 console.log(psychic);
       if ((userGuess === "a" || (userGuess === "b") || (userGuess === "c")) || (userGuess === "d") || (userGuess === "e") || (userGuess === "f")|| 
       (userGuess === "g")|| (userGuess === "h")||  (userGuess === "i")|| (userGuess === "j")  || (userGuess === "k")|| (userGuess === "l")||(userGuess = "m") || (userGuess === "n")||(userGues = "o")|| (userGuess === "p")|| (userGuess === "q")||(userGuess === "r")||(userGuess === "s")|| (userGuess === "t")|| (userGuess === "u")||(userGuess === "v")||(userGuess === "w")||(userGuess === "x")||(userGuess === "y")||(userGuess ="z")){

              if (userGuess === psychic)
       {wins++}
              else{losses++};
console.log(wins)
console.log(losses)
}
}
