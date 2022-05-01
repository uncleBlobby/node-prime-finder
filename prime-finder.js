fs = require('fs');

console.log(`Prime Finder`)

console.log(`Go!`)

let i = 1;

function WritePrimeToFile(prime) {
    fs.appendFileSync('primes.txt', appendNewline(prime), 'utf-8', function(err) {
        if (err) return console.log(err);
    })
}

function appendNewline(prime) {
    let string = `${prime}\n`
    return string;
}

while(true) {
    let candidate = i;
    let isPrime = true;
    for (let j = 2; j < candidate; j++){
        if (candidate % j == 0){
            isPrime = false;
        }
    }
    if (isPrime == true) {
        WritePrimeToFile(candidate)
    }
    i++;
}
