// function getRandomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// console.log(`The color you got this time is: ${getRandomColor()}`);

const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(`The color you got this time is: ${getRandomColor()}`);






