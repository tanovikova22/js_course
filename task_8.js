// Создать объект human со следующими возможностями:
// 1. При записи значения в свойство fullName имя и фамилия должны записываться в отдельные свойства firstName и lastName
// 2. При чтении значения fullName оно должно получаться из объединения firstName и lastName
// 3. При задании значения свойства dateOfBirth должно так же устанавливаться свойство age в зависимости от разницы года рождения и текущего года

let human = {
    firstName: '',
    lastName: '',
    age: 0,

    set fullName(value) {
        let arr = value.split(" ")
        this.firstName = arr[0]
        this.lastName = arr[1]
    },

    get fullName() {
        return this.firstName + " " + this.lastName
    },

    set dateOfBirth(value) {
        let currYear = new Date().getFullYear()
        let date = value.split('.')
        this.age = currYear - date[date.length - 1]
    }
}

human.fullName = 'Tanya Novikova'
human.dateOfBirth = '22.03.2001'

console.log(human)