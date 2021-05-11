// С помощью прототипа реализовать структуру "Квадрат" которая будет расширять структуру "Прямоугольник", 
// должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр

let Rectangle = function (a, b) {
    this.width = a
    this.height = b

    this.perimeter = function () {
        return (this.width + this.height) * 2
    }

    this.square = function () {
        return this.width * this.height
    }
}

let Square = function (a) {
    this.width = a
    this.height = a
}

Square.prototype = new Rectangle()

let kv = new Square(10)
console.log(kv.perimeter())
console.log(kv.square())