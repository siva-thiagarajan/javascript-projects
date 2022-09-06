//Guess a number between 0 and 99 within 7 attempts :-)

const prompt = require('prompt-sync')({sigint:true});

let userNumber = prompt('Guess a number between 0 and 100? ');

const target = Math.floor(Math.random() * 100);
let numberOfAttempts = 1;

while(target != Number(userNumber)) {
    if (numberOfAttempts >= 7) {
        console.log('You have exceeded the maximum number of tries');
        return;
    }
    if (target > Number(userNumber)) {
        console.log('You guessed too low -- ', 7 - numberOfAttempts, ' more guesses left!')
        userNumber = prompt('Guess again: ');
    } else {
        console.log('You guessed too high -- ', 7 - numberOfAttempts, ' more guesses left!')  
        userNumber = prompt('Guess again: '); 
    }
    numberOfAttempts++;
}

if (target === Number(userNumber)) {
    console.log('YAAY! - You got it in', numberOfAttempts, 'attempts')
} 
