function getRandomNumber(){
    const randomNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    //console.log(randomNumber)
    return randomNumber
}

let random_number = getRandomNumber()
const form = document.getElementById('form')
const user_guess = document.getElementById('user_guess')
let attempts = 4

function makeAGuess(guess){
    subtractAttempt()
    console.log(typeof(guess))
    if (typeof guess !== 'number') { // Check if the guess is not a number
        console.log('Guess must be a number');
    } else if (guess !== random_number) { // Check if the guess is not equal to the random number
        console.log('Wrong answer');
    } else {
        console.log('Correct');
    }
}

function subtractAttempt(){
    if (attempts <= 0 ){
        console.log('your out of turns')
        alert(`game over the anwser was ${random_number} refresh the page`)
    }
    attempts -= 1
}

form.addEventListener('submit', (event) => {
    event.preventDefault() // stops page refresh
    let guess = parseInt(user_guess.value)
    console.log(guess)
    makeAGuess(guess)
})