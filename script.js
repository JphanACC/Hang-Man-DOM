let word = prompt("Welcome to Hangman! Player 1, please enter a word for Player 2 to guess.").toUpperCase();
word.toUpperCase();


const maxStrikes = 6;
let strikes = 0; //number of player's penalty (lives)

let revealedLetters = new Array(word.length); // Each index of revealedLetters will correspond to a character in word, and if revealedLetters[n] is truthy, then word[n] has been correctly guessed.
// revealedLetters.fill(false);

let strikeLetters = new Array(); //contains letters that players guessed

//Player press button
let submitButton = document.getElementById("submitButton")

if (submitButton) {
    submitButton.addEventListener('click', function() {
        let userInput = document.getElementById("userInput").value;
        let upUserInput = userInput.toUpperCase();
        console.log(upUserInput);

        if (strikes != maxStrikes) {
            if (upUserInput.length == 1) {

                processGuess(upUserInput);

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
function processGuess(input) {
    let correct = false;

    for (let index = 0; index < word.length; index++) {


        if (word[index] == input[0]) {

            revealedLetters[index] = input[0];
            correct = true;

        }


    }
    
    if (correct) {
        drawWordProgress();
        checkWinCondition();

    } else {


        if (strikes < maxStrikes) {
            console.log(strikeLetters);

            drawStrikeLetters(input);

            strikes++;
            drawGallows();


            if (strikes == maxStrikes) {
                alert("You lost");
                const correctAnswer = document.getElementById("correctAnswer");
                correctAnswer.innerHTML = `BOO BOO! Correct answer is ${word}`;
            }
        }


    }


}

function drawGallows() {
    let imageSource = document.getElementById("strikeImage");
    imageSource.setAttribute("src", `../images/strike-${strikes}.png`);
}

function drawWordProgress() {

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

function drawStrikeLetters(input) {
    let theBadBad = document.createElement("span");
    theBadBad.setAttribute("class", "strikeWords");
    theBadBad.innerHTML = input[0];
    document.getElementById("strikeDiv").appendChild(theBadBad);
}

function checkWinCondition(){
    let newLetters = document.querySelectorAll(".rWords");

    if (newLetters) {
        let correctGuess = true;
        
        for (var i = 0; i < newLetters.length; i++) {
            console.log(newLetters[i].innerHTML);
            

            if (newLetters[i].innerHTML == "_") {
                return correctGuess = false;
            }
        }

        alert('Congrats! You won!');
        
    }
}