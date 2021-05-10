// Система продажи билетов 

// Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их   
// ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
// ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
// случайный шестизначный ID билета, создать ID можно любым способом */

// ticketWindow.returnTicket('123456') /* Возвращаем билет, если в системе такой id записан
// как проданный, он должен быть удален из списка проданных и из кассы должна быть
// вычтена соответствующая его цене сумма */

function TicketSystem() {
    this.moneySum = 0
    this.eventStack = []

    this.createEvent = function (name, price) {
        this.eventStack.push({
            name,
            price,
            tickets: []
        })
    }

    this.buyTicket = function (name) {
        let currEvent = this.eventStack.find(event => {
            return event.name === name
        })

        if (currEvent) {
            this.moneySum += currEvent.price
            let createdId = Math.floor(Math.random() * 1000000);

            currEvent.tickets.push({
                id: createdId
            })

            return createdId
        } else {
            return 'No such event'
        }
    }

    this.returnTicket = function (id) {
        let isvalid = this.eventStack.find(event => {
            return event.tickets.find(ticket => {
                return ticket.id === id
            })
        })
        if (isvalid) {
            this.moneySum = this.moneySum - isvalid.price
            this.eventStack = this.eventStack.map(ev => {
                if (ev.name === isvalid.name) {
                    ev.tickets = ev.tickets.filter(t => t.id != id)
                }
                return ev
            })
        } else {
            return 'This ticket does not exist'
        }

    }
}

let ticketWindow = new TicketSystem()
ticketWindow.createEvent('Concert', 200)
ticketWindow.createEvent('Opera', 500)
let ticket1 = ticketWindow.buyTicket('Concert')
let testTicket = ticketWindow.buyTicket('Concert')
let ticket2 = ticketWindow.buyTicket('Opera')
let ticket3 = ticketWindow.buyTicket('Match')
console.log(`${ticket1}, ${ticket2}, ${ticket3}`) // 3 doesn't exist
console.log(ticketWindow.moneySum)
console.log(ticketWindow.eventStack)
console.log(ticketWindow.moneySum)
console.log(ticketWindow.eventStack)