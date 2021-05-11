// Реализовать 2 разных типа верфей, каждая из которых должна будет специализироваться на своем типе кораблей 

// Для моторных кораблей доступны следующие специфичные характеристики:
// Мощность двигателя
// Материал корпуса

// Для парусных кораблей доступны следующие специфичные характеристики:
// Количество мачт
// Общая площадь парусов

// Что можно делать в верфи:
// Строить корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Перекрашивать корабли - Можно красить любые корабли
// Обменивать старый корабль на новый - Можно обменивать только корабли того же типа

// Главное требование: Чистый код, весь дублирующийся код для кораблей и верфей должен быть вынесен в их прототипы. 
// Задание потребует воспользоваться гуглом для решения. 

// Верфи и корабли должны создаваться с помощью функций-конструкторов.

// let motorWerf = function () {

// }

// let sailWerf = function () {

// }

let Werf = function () {
    this.colorShip = function () {
        return 'Cilired your ship'
    }
}

let Ship = function () {
    this.sail = function () {
        return "I am sailing"
    }
}

let MotorShip = function (motorType, material) {
    this.motorType = motorType
    this.matrial = material
}

let SailShip = function (mastAmount, sailSquare) {
    this.mastAmount = mastAmount
    this.sailSquare = sailSquare
}

SailShip.prototype = new Ship()
MotorShip.prototype = new Ship()

let shipSail = new SailShip('usual motor', 'metal')
let shipMotor = new MotorShip(2, 200)