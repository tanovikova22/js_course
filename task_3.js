// Калькулятор

// Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат, 
// по умолчанию должны присутствовать методы add, substract

// Пример: 
// const calculator = new Calc()

// calculator.operation('31 + 32') // 63
// calculator.operation('10 * 2') // 10
// calculator.addOperation('/', (a, b) => a / b)
// calculator.operation('10 / 2') // 5

// Также, он должен хранить историю всех операций и выводить ее по запросу:

// calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*', 
// operands: [10,2]}, {operation: '/', operands: [10,2]}] */

// И очищать историю
// calculator.clearHistory()
// calculator.history() // []

function Calc() {
    function add(a, b) {
        return a + b
    }

    function substract(a, b) {
        return a * b
    }

    this.history = []
    this.allOperations = [{
            operation: '+',
            func: add
        },
        {
            operation: '*',
            func: substract
        }
    ]


    this.clearHistory = () => {
        this.history.length = 0
    }

    this.addOperation = function (symbol, callback) {
        this.allOperations.push({
            operation: symbol,
            func: callback
        })
    }

    this.operation = function (value) {
        let splited = value.split(" ")
        let operationToDo = splited.find(value => {
            if (isNaN(value)) {
                return value
            }
        })

        let operation = this.allOperations.find(operation => {
            return operation.operation === operationToDo
        })

        this.history.push({
            operationToDo,
            operands: [+splited[0], +splited[2]]
        })

        return operation.func(+splited[0], +splited[2])
    }

}

let calculator = new Calc()

console.log(calculator.operation('77 + 3'))
console.log(calculator.history)
calculator.addOperation('/', (a, b) => a / b)
console.log(calculator.operation('20 / 2'))
console.log(calculator.history)
calculator.clearHistory()
console.log(calculator.history)