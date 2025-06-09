/*
    CIT 281 Project 1
    Name: Sophie Sheppe
*/


// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomString (){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let result = "";
    const length = getRandomInteger(5,26);
    for (i = 0; i< length; i++) {
        result += alphabet[(getRandomInteger(0,26))];

        // took random 0-26
        
    }
console.log(length + " lowercase letters: " + result);   
}

// random string, list out a-z, randlgenth, define result, then for loop where you specifically look at length and length is the random number
// length is a variable
// function random string
// function random number
// inside random string you will ahve two constants letters and length
// normal vairable called result inside random
// still inside for loop and logic is length 
// then console log the result
// random number is a simpel random number function like teh one he has 
// result + letters random in teh loop


// random function then random string then called random string

// evertyhing within the function
// loop of result + letters







// don't forget to call function
randomString();