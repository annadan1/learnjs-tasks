const firstTask = () => {
  /*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.
*/
  const camelize = (str) =>
    str
      .split("-")
      .map((el, index) => {
        if (index !== 0) {
          el = el[0].toUpperCase() + el.slice(1);
        }
        return el;
      })
      .join("");
  console.log(camelize("background-color") == "backgroundColor");
  console.log(camelize("list-style-image") == "listStyleImage");
  console.log(camelize("-webkit-transition") == "WebkitTransition");
};

const secondTask = () => {
  /*
    Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
    Функция должна возвращать новый массив и не изменять исходный.
    */
  let arr = [5, 3, 8, 1];
  const filterRange = (arr, a, b) => arr.filter((el) => el >= a && el <= b);
  let filtered = filterRange(arr, 1, 4);

  console.log(filtered); // 3,1 (совпадающие значения)
  console.log(arr); // 5,3,8,1 (без изменений)
};

const thirdTask = () => {
  /*
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, 
которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
*/
  let arr = [5, 3, 8, 1];
  const filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] < a || arr[i] > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  };
  filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

  console.log(arr); // [3, 1]
};

const fourthTask = () => {
  // сортировать по убыванию
  let arr = [5, 2, 1, -10, 8];
  arr.sort((a, b) => b - a);
  console.log(arr); // 8, 5, 2, 1, -10
};

const fifthTask = () => {
  /*
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
    Создайте функцию copySorted(arr), которая будет возвращать такую копию.
    */
  let arr = ["HTML", "JavaScript", "CSS"];
  const copySorted = (arr) => [...arr].sort((a, b) => a.localeCompare(b));

  let sorted = copySorted(arr);

  console.log(sorted); // CSS, HTML, JavaScript
  console.log(arr); // HTML, JavaScript, CSS (без изменений)
};

const sixthTask = () => {
  //Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
  function Calculator() {
    this.methods = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
    };
    this.calculate = function (str) {
      let [a, operator, b] = str.split(" ");
      if (isNaN(a) || isNaN(b) || !this.methods[operator]) {
        console.log("Введите верное значение");
      }
      return this.methods[operator](+a, +b);
    };
    this.addMethod = function (name, func) {
      this.methods[name] = func;
    };
  }

  let calc = new Calculator();

  console.log(calc.calculate("3 + 7")); // 10

  let powerCalc = new Calculator();
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);

  let result = powerCalc.calculate("2 ** 3");
  console.log(result); // 8
};

const seventhTask = () => {
  /*
    У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
    */
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };

  let users = [vasya, petya, masha];

  let names = users.map((el) => el.name);

  console.log(names); // Вася, Петя, Маша
};

const eighthTask = () => {
  /*
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
*/
  let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
  let petya = { name: "Петя", surname: "Иванов", id: 2 };
  let masha = { name: "Маша", surname: "Петрова", id: 3 };

  let users = [vasya, petya, masha];

  let usersMapped = users.reduce((acc, el) => {
    const fullName = el.name + " " + el.surname;
    const id = el.id;
    acc.push({ fullName, id });
    return acc;
  }, []);
  console.log(usersMapped[0].id); // 1
  console.log(usersMapped[0].fullName); // Вася Пупкин
};

const ninthTask = () => {
  /*
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
*/
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };

  let arr = [vasya, petya, masha];
  const sortByAge = (arr) => {
    arr.sort((a, b) => a.age - b.age);
  };

  sortByAge(arr);

  // теперь: [vasya, masha, petya]
  console.log(arr[0].name); // Вася
  console.log(arr[1].name); // Маша
  console.log(arr[2].name); // Петя
};

const tenthTask = () => {
  /*
    Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
    Многократные прогоны через shuffle могут привести к разным последовательностям элементов.
    */
  let arr = [1, 2, 3];
  const shuffle = (array) => {
    for (let i = 0; i < array.length; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  };
  console.log(shuffle(arr));
  // arr = [3, 2, 1]
  console.log(shuffle(arr));
  // arr = [2, 1, 3]
  console.log(shuffle(arr));
  // arr = [3, 1, 2]
};

const eleventhTask = () => {
  /*
    Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
    Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
    */
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 29 };

  let arr = [vasya, petya, masha];
  const getAverageAge = (arr) =>
    arr.reduce((acc, el) => acc + el.age, 0) / arr.length;

  console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
};

const twelfthTask = () => {
  /*
    Пусть arr – массив строк.
    Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/
  const unique = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (!result.includes(arr[i])) result.push(arr[i]);
    }
    return result;
  };

  let strings = [
    "кришна",
    "кришна",
    "харе",
    "харе",
    "харе",
    "харе",
    "кришна",
    "кришна",
    ":-O",
  ];

  console.log(unique(strings)); // кришна, харе, :-O
};

const thirteenthTask = () => {
  /*
    Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
    Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
    */
  let users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
  ];

  const groupById = (users) =>
    users.reduce((acc, el) => {
      acc[el.id] = el;
      return acc;
    }, {});

  let usersById = groupById(users);

  console.log(usersById);
  /*
      usersById = {
        john: {id: 'john', name: "John Smith", age: 20},
        ann: {id: 'ann', name: "Ann Smith", age: 24},
        pete: {id: 'pete', name: "Pete Peterson", age: 31},
      }
      */
};

thirteenthTask();
