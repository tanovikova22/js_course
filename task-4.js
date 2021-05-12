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


let Werf = function () {
    this.colorShip = function () {
        console.log('Colored your ship ')
    }
}

let MotorWerf = function () {
    this.build = function (ship) {
        if (ship instanceof MotorShip) {
            console.log('MotorShip is built')
        }
    }
    this.repair = function (ship) {
        if (ship instanceof MotorShip) {
            console.log('MotorShip is repaired')
        }
    }
    this.exchange = function (ship) {
        if (ship instanceof MotorShip) {
            return new MotorShip(ship.motorType, ship.material)
        }
    }

}

let SailWerf = function () {
    this.build = function (ship) {
        if (ship instanceof SailShip) {
            console.log('SailShip is built')

        }
    }
    this.repair = function (ship) {
        if (ship instanceof SailShip) {
            console.log('SailShip is repaired')
        }
    }
    this.exchange = function (ship) {
        if (ship instanceof SailShip) {
            return new SailShip(ship.mastAmount, ship.sailSquare)
        }
    }
}

MotorWerf.prototype = new Werf()
SailWerf.prototype = new Werf()

let Ship = function () {
    this.sail = function () {
        console.log("I am sailing")
    }
}

let MotorShip = function (motorType, material) {
    this.motorType = motorType
    this.material = material
}

let SailShip = function (mastAmount, sailSquare) {
    this.mastAmount = mastAmount
    this.sailSquare = sailSquare
}

SailShip.prototype = new Ship()
MotorShip.prototype = new Ship()


///////////////////////////

let shipSail = new SailShip('usual motor', 'metal')
let shipMotor = new MotorShip(2, 200)
let werf = new MotorWerf()
werf.build(shipMotor)
let a = werf.exchange(shipMotor)
console.log(a)