// Написать функцию для подсчета количества букв в слове
// is it possiable to use string.length?

// function lettersNum(string) {
//     return string.length
// }

// console.log(lettersNum('hel'))

// if it's not possible to use string.length

function lettersNum(string) {
    let num = 0;
    while (string[num]) {
        num++;
    }
    return num;
}

console.log(lettersNum('world'))