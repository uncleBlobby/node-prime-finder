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
    if (i % 2 != 0) {
        WritePrimeToFile(i);
        console.log(`${i} is prime.`)
        
    }
    i++;
}
