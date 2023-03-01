const firstTask = () => {
  /*
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/
  const user = {};
  user.name = "John";
  user.surname = "Smith";
  user.name = "Pete";
  delete user.name;
};

const secondTask = () => {
  /*
    Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
  */

  const isEmpty = (obj) => {
    for (let _ in obj) {
      return false;
    }
    return true;
  };

  let schedule = {};

  alert(isEmpty(schedule)); // true

  schedule["8:30"] = "get up";

  alert(isEmpty(schedule)); // false
};

/*
const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";

Да, будет, т.к. объекты хранятся по ссылке, мы же меняем не ссылку, а значение в объекте
*/

const fourthTask = () => {
  //У нас есть объект, в котором хранятся зарплаты нашей команды:
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
  };
  /*
      Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
      Если объект salaries пуст, то результат должен быть 0.
  */
  let sumSalaries = 0;
  for (let prop in salaries) {
    sumSalaries += salaries[prop];
  }
  return sumSalaries;
};

const fifthTask = () => {
  // Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

  const multiplyNumeric = (menu) => {
    for (let prop in menu) {
      if (Number(menu[prop])) {
        menu[prop] = menu[prop] * 2;
      }
    }
  };
  let menu = {
    width: 200,
    height: 300,
    title: "My menu",
  };
  console.log(menu);
  multiplyNumeric(menu);
  console.log(menu);
};

firstTask();
secondTask();
fourthTask();
fifthTask();
