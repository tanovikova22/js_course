// Реализовать if для проверки доступа
// Выполняется проверка прав доступа пользователя к сайту при соблюдении следующих условий:
// 1. Возраст от 18 до 35 лет
// 2. Оплачена месячная подписка
// 3. Не действует блокировка
// 4. Имя пользователя не содержит внутри себя запрещенные слова
// Если пользователь является администратором, для получения доступа достаточно соблюдения только первого условия
// Информация о пользователе хранится в объекте такого вида:
// {
//  age: 18,
//  paid: true,
//  blocked: false,
//  badUsername: false,
//  isAdmin: false
// }


let users = [{
    age: 36,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: false
}]

// users.map(user => {
//     if (user.age >= 18 && user.age <= 35) {
//         if (user.isAdmin) {
//             console.log('Admin entrance is allowed')
//         } else {
//             if (user.paid && !user.blocked && !user.badUsername) {
//                 console.log('entrance is allowed')

//             }
//         }
//     }
// })

users.map(user => {
    !(user.age >= 18 && user.age <= 35) ?
    console.log('entrance denied') : 
    user.isAdmin ? console.log('Admin entrance is allowed') : 
        (user.paid && !user.blocked && !user.badUsername) ? console.log('entrance is allowed') : console.log('entrance denied')
})
