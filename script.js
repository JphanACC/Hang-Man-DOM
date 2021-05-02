let word = prompt("Welcome to Hangman! Player 1, please enter a word for Player 2 to guess.").toUpperCase();
word.toUpperCase();

//out put words
console.log(word);


const maxStrikes = 6;
let strikes = 0; //number of player's penalty (lives)

let revealedLetters = new Array(word.length); // Each index of revealedLetters will correspond to a character in word, and if revealedLetters[n] is truthy, then word[n] has been correctly guessed.
// revealedLetters.fill(false);

let strikeLetters = new Array(maxStrikes); //contains letters that players guessed

//Player press button
let submitButton = document.getElementById("submitButton")

if (submitButton) {
    submitButton.addEventListener('click', function(){
        let userInput = document.getElementById("userInput").value;
        let upUserInput = userInput.toUpperCase();
        console.log(upUserInput);
        

        if (upUserInput.length == 1) {

            checkInput(upUserInput);

        } else if (upUserInput.length > 1) {
            alert('You entered more than 1 character');  
        } else {
            alert('No character. Please enter something.');
        }
        
    })
}

//check player input
function checkInput(input) {
    let correct = false;

    for (let index = 0; index < word.length; index++) {

        
        if (word[index] == input[0]) {
            // console.log(`correct. Word ${word[index]}. User input: ${input[0]}`);
            // console.log(word[index]);
            
            revealedLetters.push(input[0]);
            
            revealCorrectWords();

            return correct = true;

        } 

        
    }
    if (!correct) {
        // console.log(`Loop ${index}: Word ${word[index]}. User input: ${input[0]}`);
        
        strikeLetters.push[input[index]];

        strikes++;
        console.log(`Incorrect Strikes: ${strikes}`);

    }
}

function revealCorrectWords() {

    
    strikeWordsP = document.getElementById("strikeLetters");


    for (let index = 0; index < revealedLetters.length; index++) {
        console.log(revealedLetters);
        
        console.log(`revealCorrectWords Function: ${revealedLetters[index]}`);
        
        let newLetters = document.createElement("p")

        if (revealedLetters !== "") {
            newLetters.innerHTML(revealedLetters[index]);
        } else {
            newLetters.innerHTML("__");
        }

        document.getElementById("lettersR").append(newLetters);
    }
}

function revealStrikeWords(input) {

}