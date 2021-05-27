// Создать функцию, которая будет принимать HTML элемент и объект.

// Требуется обойти все дочерние ноды HTML элемента и у тех элементов,
//  у которых есть атрибут data-field выставить textContent из соответствующего свойства объекта.

// В случае, если в объекте нет нужного свойства - выбросить ошибку,
// если в объекте есть свойство, которое не используется в HTML - игнорировать .


function parseTemplate(element, obj) {
	if (!element) return console.log('No element')
	if ((typeof obj !== 'object') || (obj instanceof Array) || !obj) return console.log('Not object')

	let childtenNodes = element.childNodes
	if (childtenNodes.length === 0) return console.log('No children nodes')

	childtenNodes.forEach(element => {
		if (element.dataset && element.dataset.field) {
			if (!obj.hasOwnProperty(element.dataset.field)) return console.log(`No ${element.dataset.field} in data attributes`)
			element.replaceChildren(obj[element.dataset.field])
		}
	})

}


let el = document.getElementById('item1')

// parseTemplate(el, {
// 	title: 'Hello world',
// 	description: 'The first program',
// })

// parseTemplate(el, {
// 	description: 'hello',
// })

// parseTemplate(el, {
// 	title: 'test1',
// 	description: 'test2',
// 	test: 'test3'
// })

// parseTemplate(null, {
// 	title: 'Hello world',
// 	description: 'The first program',
// })

parseTemplate(el, [])