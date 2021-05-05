// Реализовать функцию для случайной сортировки элементов массива

function randShuffle(arr) {
    return arr.sort(() => {
        return 1 - Math.random() * 2
    })
}

let array = [-1, 0, 1, 2, 3, 4, 5]

randShuffle(array)
console.log(array)