const firstTask = () => {
  /*
    Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
    Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
    Если объект salaries пуст, то результат должен быть 0.
    */
  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };
  const sumSalaries = (salaries) =>
    Object.values(salaries).reduce((acc, count) => acc + count, 0);
  console.log(sumSalaries({})); // 0
  console.log(sumSalaries(salaries)); // 650
};

const secondTask = () => {
  //Напишите функцию count(obj), которая возвращает количество свойств объекта:
  let user = {
    name: "John",
    age: 30,
  };
  const count = (user) => Object.entries(user).length;

  console.log(count(user)); // 2
};
secondTask();
