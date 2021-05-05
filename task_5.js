// Есть массив сотрудников компании
// Нужно выполнить с ним следующие преобразования:
// 1. Узнать среднюю зарплату сотрудников
// 2. Отсортировать сотрудников по зарплате
// 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет

const employees = [{
        firstName: 'Alex',
        lastName: 'Smith',
        age: 54,
        salary: 10000,
        position: 'Architect'
    },
    {
        firstName: 'Gustav',
        lastName: 'Andersen',
        age: 31,
        salary: 5000,
        position: 'Software engineer'
    },
    {
        firstName: 'Liz',
        lastName: 'Taylor',
        age: 20,
        salary: 7000,
        position: 'Manager'
    }
]

// avarage salary
let averageSalary = (employees.map(item => item.salary).reduce((acc, currVal) => (acc + currVal))) / employees.length
console.log(averageSalary) // 7333.33333

// sort ASC by salary
employees.sort((a, b) => {
    if (a.salary < b.salary) {
        return -1
    }
    if (a.salary > b.salary) {
        return 1
    }
    return 0
})

console.log(employees)

// filtered users who has salary > 4500 and older then 25
let filteredEmployees = employees.filter(employee => {
    return employee.salary > 4500 && employee.age > 25
})

console.log(filteredEmployees)