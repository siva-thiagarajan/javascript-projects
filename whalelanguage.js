// This code extracts the vowels from any phrase and doubles only the 'e' and 'u's

let youSay = "turpentine and turtles";
const vowels = ['a', 'e', 'i', 'o', 'u'];

//the whale language output is stored in result Array
let resultArray = [];

/* while loop because we dont have to worry about the length of the phrase
nested while loop -- outer one get all the characters from the phrase
inner while loop does the matching with vowels array */

let i = 0;
let j = 0;
while (i < youSay.length) {
  if (youSay[i] === 'e') {
    resultArray.push(youSay[i]);
  }
   if (youSay[i] === 'u') {
    resultArray.push(youSay[i]);
  }
  while (j < vowels.length) {
    if (youSay[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
    j++;
  }
  //if you don't reset j=0 then j = 5 and innerloop wont run
  j = 0;
  i++;
}
var resultString = resultArray.join('');
console.log(`You say: ${youSay}`);
console.log(`Beluga whale says: ${resultString.toUpperCase()}`);
console.log("Note: Whale drops all the consonants and doubles only the 'e' and 'u' for melody!");
