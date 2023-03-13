const firstTask = () => {
  /*
    Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
    Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?
    */
  function makeCounter() {
    let count = 0;

    return function () {
      return count++;
    };
  }

  let counter = makeCounter();
  let counter2 = makeCounter();

  console.log(counter()); // 0
  console.log(counter()); // 1

  console.log(counter2()); // ? 0
  console.log(counter2()); // ? 1
  // у counter и counter2 разное лексическое окружение с разным значением count
};

const secondTask = () => {
  /*
Здесь объект счётчика создан с помощью функции-конструктора.
Будет ли он работать? Что покажет?
*/
  function Counter() {
    let count = 0;

    this.up = function () {
      return ++count;
    };
    this.down = function () {
      return --count;
    };
  }

  let counter = new Counter();

  console.log(counter.up()); // ? 1
  console.log(counter.up()); // ? 2
  console.log(counter.down()); // ? 1
  /* 
да, будет работать, т.к. в обеих функциях, т.к. в конструкторе функции ссылаются на одну переменную
*/
};

const thirdTask = () => {
  /*
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
Да, именно таким образом, используя двойные круглые скобки (не опечатка).
Например:
*/

  const sum = (a) => {
    return (otherSum = (b) => a + b);
  };

  console.log(sum(1)(2)); //= 3
  console.log(sum(5)(-1)); // = 4
};

const fourthTask = () => {
  /*
    У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
    Сделайте набор «готовых к употреблению» фильтров:

    inBetween(a, b) – между a и b (включительно).
    inArray([...]) – находится в данном массиве.
    Они должны использоваться таким образом:

    arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
    arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
    Например:
    */

  const inBetween = (a, b) => {
    return function (el) {
      return el >= a && el <= b;
    };
  };

  const inArray = (arr) => {
    return function (el) {
      return arr.includes(el);
    };
  };

  let arr = [1, 2, 3, 4, 5, 6, 7];

  console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

  console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
};

const fifthTask = () => {
  //У нас есть массив объектов, который нужно отсортировать:
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
  ];

  const byField = (nameField) => {
    return function (a, b) {
      return a[nameField] > b[nameField] ? 1 : -1;
    };
  };

  //Сделать сортировку так
  users.sort(byField("name"));
  console.log(users);
  users.sort(byField("age"));
  console.log(users);
};

const sixthTask = () => {
  /*
    Следующий код создаёт массив из стрелков (shooters).
    Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
    */

  function makeArmy() {
    let shooters = [];

    for (let i = 0; i <= 10; i += 1) {
      let shooter = function () {
        console.log(i); // должна выводить порядковый номер
      };
      shooters.push(shooter);
    }

    return shooters;
  }

  let army = makeArmy();

  army[0](); // 0
  army[5](); // 5
  //ранее в лексическом окружении функции была одна переменная на всех shooter, теперь у каждого своя переменная i
};

