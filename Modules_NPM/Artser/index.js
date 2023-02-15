const prompt = require('prompt-sync')();

const figlet = require('figlet');
const colors = require('colors');


let phrase = prompt("Enter your phrase: ");

// figlet("Colorful world!", function (err, data) {
//     if(err){
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data.rainbow);
// });  


//Checking to see if there are too many words
figlet(phrase, function (err, data) {
    if(err || !(typeof(phrase) === 'string')){
        console.log("Something went wrong...");
        console.dir(err);
        return;
    } else if(phrase.length >= 25){
        console.log("Too many words!");
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});  