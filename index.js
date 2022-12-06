const Quote = require('inspirational-quotes');
const ar=Quote.getRandomQuote();
 
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : ar,
    e : "oO",
    T : "U "
}));
