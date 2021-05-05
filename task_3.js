// // Реализовать функцию для фильтрации массива по длине слов, значения длины указываются включительно, фильтр должен работать так:  
// const fruits = [‘orange’, ‘apple’, ‘banana’, ‘’]
// filterByLength(fruits, 0,5) // [‘apple’, ‘’]

function filterByLength(arr, min, max) {
    return filteredByLength = arr.filter(el => {
        return el.length >= min && el.length <= max
    })
}

let fruits = ['orange', 'apple', 'banana', '']
console.log(filterByLength(fruits, 0, 5))