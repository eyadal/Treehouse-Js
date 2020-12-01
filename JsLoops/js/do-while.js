function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
}

let counter = 0;
do {

console.log(`The random number is ${getRandomNumber(10)}`)
counter += 1
} while (counter < 100);


// Display the prompt dialogue while the value assigned to `secret` is not equal to "sesame"

// This should run after the loop is done executing
let secret;
do {
secret = prompt("What is the secret password?");


} while(secret  == 'sesame') 
alert("You know the secret password. Welcome!");
