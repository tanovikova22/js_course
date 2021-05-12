// Модифицировать прототип Array, добавив в него метод shuffle,
// чтобы получить возможность выполнять случайную сортировку для любого массива

Array.prototype.shuffle = function () {
    return this.sort(() => {
        return 1 - Math.random() * 2
    })
};

let a = [1, 2, 3, 4, 5, 6];
a.shuffle();
console.log(a)