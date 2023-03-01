const firstTask = () => {
  /*
    Допустим, у нас есть массив arr.
    Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
    */
  const unique = (values) => [...new Set(values)];

  let values = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
  ];

  console.log(unique(values)); // Hare,Krishna,:-O
};

const secondTask = () => {
  /*
    Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
    nap - pan
    ear - are - era
    cheaters - hectares - teachers
    Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
*/
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  const aclean = (arr) => {
    const sortArr = arr.map((el) => el.toLowerCase().split("").sort().join(""));
    const myMap = new Map();
    for (let i = 0; i < sortArr.length; i += 1) {
      if (!myMap.has(sortArr[i])) {
        myMap.set(sortArr[i], arr[i]);
      }
    }
    return [...myMap.values()];
  };
  console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
};

const thirdTask = () => {
  /*
    Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
    */
    let map = new Map();

    map.set("name", "John");
    
    let keys = [...map.keys()]; //нужно привести к array
    
    // Error: keys.push is not a function
    // Ошибка: keys.push -- это не функция
    keys.push("more");
    console.log(keys)
};

