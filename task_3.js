// Написать функцию для реверсии слова не используя встроенные методы

function reverseStr(string) {
    string = typeof string === String ? string : string + ''
    let emptyStr = ''

    for (let i = string.length - 1; i >= 0; i--) {
        emptyStr += string[i]
    }
    return emptyStr;
}

console.log(reverseStr('hello'))
console.log(reverseStr(123))