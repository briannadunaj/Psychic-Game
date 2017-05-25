var letters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      wins= 0,
      losses=0,
      guessesLeft=9,
      guessesMade=[],
      computerGuess = "";
      

//Computer immediately generates a random letter 
if (guessesLeft === 9) {
  computerGuess = letters[Math.floor(Math.random() * letters.length)];
    }

//start game when when user presses a key
document.onkeyup = function(event){
  var userGuess = event.key;
        

//If you guess the computer's guess, wins increase and guesses left start over at 9
    if((userGuess === computerGuess)){
      wins++
      guessesLeft=9
      guessesMade = [];
      computerGuess = letters[Math.floor(Math.random() * letters.length)];
    }
      
//if your guess does not equal the computer's guess, losses increase and guesses left decrease
    else{
      guessesLeft--
      guessesMade.push(userGuess);     
    }

//if you have no guesses left computer guesses a new letter, losses increase
    if (guessesLeft === 0){
      guessesLeft = 9;
      guessesMade = [];
      losses++
    }


      html = "You chose: " +userGuess + "<br>";
      html += 'Wins: ' + wins +  "<br>" +
      'Losses: ' + losses + "<br>" +
      'Guesses left: ' + guessesLeft + "<br>" +
      'Your Guesses so far: ' + guessesMade;
      
      document.getElementById("game").innerHTML = html;

      console.log('computer chose ' + computerGuess);
      console.log('you chose ' + userGuess); 
      console.log("losses: " + losses);
      console.log("wins: " + wins);
  }