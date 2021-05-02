let word = prompt("Welcome to Hangman! Player 1, please enter a word for Player 2 to guess.").toUpperCase();
word.toUpperCase();

//out put words
console.log(word);


const maxStrikes = 6;
let strikes = 0; //number of player's penalty (lives)

let revealedLetters = new Array(word.length); // Each index of revealedLetters will correspond to a character in word, and if revealedLetters[n] is truthy, then word[n] has been correctly guessed.
// revealedLetters.fill(false);

let strikeLetters = new Array(); //contains letters that players guessed

//Player press button
let submitButton = document.getElementById("submitButton")

if (submitButton) {
    submitButton.addEventListener('click', function(){
        let userInput = document.getElementById("userInput").value;
        let upUserInput = userInput.toUpperCase();
        console.log(upUserInput);

        if (strikes != maxStrikes) {
            if (upUserInput.length == 1) {

                checkInput(upUserInput);

            } else if (upUserInput.length > 1) {
                alert('You entered more than 1 character');  
            } else {
                alert('No character. Please enter something.');
            }
        } else {
            alert("You lost. Please refresh page!");
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
            
            revealedLetters[index] = input[0];

            correct = true;
        } 

        
    }
    if (correct) {
        // here
        revealCorrectWords();
    } else { // modify this conditional to be an if-else
        // console.log(`Loop ${index}: Word ${word[index]}. User input: ${input[0]}`);
        
        if (strikes < maxStrikes) { // then this should be max strikes as well, right?
            console.log(strikeLetters);
            // revealStrikeWords(); // comment out
            let theBadBad = document.createElement("span");
            theBadBad.setAttribute("class", "strikeWords");
            theBadBad.innerHTML = input[0];
            document.getElementById("strikeDiv").appendChild(theBadBad);
            // put the check in here == 6
            // here
            strikes++; // should happen before check
            let imageSource = document.getElementById("strikeImage");
            imageSource.setAttribute("src", `../images/strike-${strikes}.png`)

            if (strikes == maxStrikes) { // because we want to check the updated value
                alert("You lost");
                const correctAnswer = document.getElementById("correctAnswer");
                correctAnswer.innerHTML = `BOO BOO! Correct answer is ${word}`;
            }
        } 
        
         // if == 6
        console.log(`Incorrect Strikes: ${strikes}`);
        
    }

    
}

function revealCorrectWords() {

    //empty element
    document.getElementById("revealedDiv").innerHTML = "";


    for (let index = 0; index < revealedLetters.length; index++) {
        
        let newLetters = document.createElement("span");
        newLetters.setAttribute("class", "rWords");

        if (!revealedLetters[index] == "") {
            newLetters.innerHTML = revealedLetters[index];
            
        } else {
            newLetters.innerHTML = "_";
        }

        document.getElementById("revealedDiv").appendChild(newLetters);
    }
}

function revealStrikeWords(input) {
    document.getElementById("strikeDiv").innerHTML = "";


    for (let index = 0; index < strikeLetters.length; index++) {
        
        
        
        if (!strikeLetters[index]) {
            let newLetters = document.createElement("span");
            newLetters.setAttribute("class", "strikeWords");
            newLetters.innerHTML = strikeLetters[index];
            document.getElementById("strikeDiv").appendChild(newLetters);
        }

    }
}