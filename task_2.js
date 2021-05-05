// Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент 

function compareArrs(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false
    } else {
        let value = arr1.every((el, idx) => el === arr2[idx])
        return value
    }
}

console.log(compareArrs(['1', 'apple', '232111'], ['1', 'apple', '232111']))
console.log(compareArrs(['1', 'apple', '232111'], ['apple', '232111']))
console.log(compareArrs(['1', 'apple', '232111'], ['apple', '232111', 'green']))
console.log(compareArrs([200, 20, 111], [200, 20, 111]))
console.log(compareArrs([10, 20], [10, 20]))
console.log(compareArrs([10, 20], [-2, 20]))