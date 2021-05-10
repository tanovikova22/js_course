// Копилка 

// Замыкания могут применяться для простой реализации инкапсуляции, т.е. для того чтобы скрыть реализацию какой-то функциональности.

// Реализуйте функцию MoneyBox, который будет создавать объект с двумя методами:
//     addCoin - Добавляет 1 монету в копилку 
//     getAmount - Возвращает количество монет в копилке 
// Не должно быть возможности задать количество монет напрямую, минуя метод addCoin. При создании в копилке нет монет.

// Пример:  
// const box = new MoneyBox();

// box.getAmount(); // 0
// box.addCoin();
// box.addCoin();
// box.getAmount(); // 2


function moneyBox() {
    this.coin = 0

    this.addCoin = () => {
        this.coin++
    }
    this.getAmount = () => {
        return this.coin
    }
}


let box = new moneyBox()

console.log(box.getAmount())
box.addCoin()
box.addCoin()
console.log(box.getAmount())