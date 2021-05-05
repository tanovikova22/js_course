// Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой { word: 'smth', length: 1, isCapitalized: false}


function createObjArray(text) {
    let strArray = text.split(' ')
    let objArray = []
    strArray.forEach(element => {
        objArray.push({
            word: element,
            length: element.length,
            isCapitalized: element[0] === element[0].toUpperCase()
        })
    });
    return objArray;
}

console.log(createObjArray('hello Tanya'))