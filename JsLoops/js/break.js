// const secretWord = 'banana'
// let message = 'Access denied :('

// for (let i = 5; i >= 1; i--) {
//     let guess = prompt(`Guess the secret word you have ${i} tries`)
//     if(guess == secretWord ){
//         message = 'Welcome to the loop world'
//         break;
//     }
// }

// alert (message);

const tMinus = 10;
let message = 'Liftoff! 🚀';

for ( let i = tMinus; i >= 1; i-- ) {
    let status = prompt (`T-Minus ${i}... Continue? (Y/N)` );
    if(status === null || status.toLowerCase() === 'n'){ 
        message = 'Abort Launch!';
        break;
    }
}
alert(message);