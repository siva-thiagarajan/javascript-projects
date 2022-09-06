// This program has a ShiftCipher class that can encrypt a message and decrypt a message.
// Encryption is done by shifting each letter of the string by a definite value which you can choose.


const prompt = require('prompt-sync')({sigint:true});

class ShiftCipher {
  constructor (value) {
    this.shiftByNumber = value;
  }
  encrypt (str1) {
    let str = str1.toLowerCase();
    let codedString = '';
    for (let i = 0; i<str.length; i++){
        const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        if (alphabets.indexOf(str[i]) === -1) {
            codedString = codedString + str[i];
        } else {
            let number = alphabets.indexOf(str[i]) + this.shiftByNumber;
            if (number <= 25) {
                // console.log(alphabets[number].toUpperCase());
                codedString = codedString + alphabets[number].toUpperCase();
            } else if (number > 25)  {
                number = number - 26;
                //console.log(alphabets[number].toUpperCase());
                codedString = codedString + alphabets[number].toUpperCase();
            }
        }
    }
    console.log(`We have encoded your secret message to: ${codedString}`);
  }
  decrypt (str1) {
    let str = str1.toLowerCase();
    let codedString = '';
    for (let i = 0; i<str.length; i++){
        const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        if (alphabets.indexOf(str[i]) === -1) {
          codedString = codedString + str[i];
        } else {
        let number = alphabets.indexOf(str[i]) - this.shiftByNumber;
        if (number < 0) {
            number = 26 + number;
            //console.log(number);
            codedString = codedString + alphabets[number];
        } else if (number >= 0)  {
            codedString = codedString + alphabets[number];
            //console.log(number);
        }
      }
    }
    console.log(`We have decrypted your secret message back to: ${codedString}`);
  }
}
const shiftValue = prompt('How many letters do you want to shift to encrypt? ');
const cipher = new ShiftCipher(Number(shiftValue));
const encode = prompt('Enter your secret message: ');
cipher.encrypt(encode);
const decryptStr = prompt('Enter the secret message to Decrypt: ');
cipher.decrypt(decryptStr);