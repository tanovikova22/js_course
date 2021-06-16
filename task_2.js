// Элементом массива может являться либо строка, либо массив, в случае строки нужно показать этот элемент на как элемент списка,
// в случае массива - создать новый вложенный список, н

function displayArrays(arrays) {
  if (!Array.isArray(arrays)) return "Not array";
  let ulNode = document.createElement("ul");
  let li = document.createElement("li");

  for (let i = 0; i < arrays.length; i++) {
    if (typeof arrays[i] === "string") {
      li.innerText = arrays[i];
    } else if (Array.isArray(arrays[i])) {
      let a = displayArrays(arrays[i]);
      li.appendChild(a);
    }
    ulNode.appendChild(li);
  }
  return ulNode;
}

const nestedList = ["Item1", ["Item2", ["Item3"]]];
let result = displayArrays(nestedList);
console.log(result);
document.body.appendChild(result);
