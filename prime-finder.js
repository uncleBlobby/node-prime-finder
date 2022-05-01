fs = require('fs');
const START_TIME = new Date().getTime();

console.log(`Prime Finder`)
console.log(`Start Time: ${START_TIME}`)
console.log(`Go!`)

let i = 1;
let totalPrimesFound = 0;



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
        totalPrimesFound++;
        printTotalPrimesNowAndThen(totalPrimesFound)
    }
    i++;
}

function printTotalPrimesNowAndThen(total){
    let timeNow = new Date().getTime();
    let elapsedTime = timeNow - START_TIME;
    if (total % 1000 == 0){
        console.log(`Found ${total} primes in ${elapsedTime} milliseconds.`)
        console.log(`Average: ${(total/elapsedTime) * 1000} primes per second.`)
    }
}
