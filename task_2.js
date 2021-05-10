// Кэширование

// Замыкания можно использовать для сохранения состояния и дальнейшей работы с ним.

// Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат.
// Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя его повторно

// Пример:
// const calculate = cache();

// calculate(3, 3); // { value: 27, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: true}

function cache() {
  let chech = [];

  return function calculate(val1, val2) {
    let cached = chech.filter(
      item => item.base === val1 && item.exponent === val2
    );
    if (cached.length != 0) {
      return { value: cached[0].result, fromChech: true };
    } else {
      chech.push({
        base: val1,
        exponent: val2,
        result: Math.pow(val1, val2)
      });
      return { value: chech[chech.length - 1].result, fromChech: false };
    }
  };
}

const calculate = cache();

console.log(calculate(3, 3)); // { value: 27, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: true}
console.log(calculate(3, 3));
console.log(calculate(2, 2));
console.log(calculate(2, 2));
