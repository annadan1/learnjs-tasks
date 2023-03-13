const firstTask = () => {
  //Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
  /*Например:
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
Пример работы вашей функции:
*/

  /*
 //цикл
  const sumTo = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i += 1) {
        result += i;
    }
    return result;
  };
  */

  //рекурсия
  const sumTo = (n) => {
    return n === 0 ? n : n + sumTo(n - 1);
  };

  /*
  const sumTo = (n) => {
    return n * (n + 1) / 2;
  }
  */

  console.log(sumTo(100)); // 5050

  /*
    P.S. Какой вариант решения самый быстрый? Самый медленный? Почему? 
    Самый быстрый последний, решение по формуле требует меньше всего действий, 
    а самый медленный рекурсия, т.к. использует много памяти, каждый вызов хранит свой контекст. 

    P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)? Нет, будет ошибка что стек переполнен.
*/
};

const secondTask = () => {
  /*
Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

Определение факториала можно записать как:

n! = n * (n - 1) * (n - 2) * ...*1
Примеры значений для разных n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
*/

  const factorial = (n) => (n >= 1 ? n * factorial(n - 1) : 1);
  console.log(factorial(5)); // 120
};

const thirdTask = () => {
  /*
Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

Пример работы
*/

  function fib(n) {
    const result = [1, 1];
    while (result.length !== n) {
      let i = result.length - 1;
      result.push(result[i] + result[i - 1]);
    }
    return result[n - 1];
  }

  console.log(fib(3)); // 2
  console.log(fib(7)); // 13
  console.log(fib(77)); // 5527939700884757
  //P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.
  //рекурсия не дала бы нам менее одной секунды
};

const fourthTask = () => {
  /*
    Напишите функцию printList(list), которая выводит элементы списка по одному.
    Сделайте два варианта решения: используя цикл и через рекурсию.
    */
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };
  /*
  const printList = (list) => {
    list.next === null
      ? console.log(list.value)
      : (console.log(list.value), printList(list.next));
  };
  */

  const printList = (list) => {
    let currentList = list;
    while (currentList) {
      console.log(currentList.value);
      currentList = currentList.next;
    }
  };

  printList(list);
  //Как лучше: с рекурсией или без? цикл более эффективный, меньше ресурсов тратится
};

const fifthTask = () => {
  /*
    Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
    Сделайте два решения: с использованием цикла и через рекурсию.
    */
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };

  //   const printList = (list) => {
  //     let reverstList = [];
  //     let currentList = list;
  //     while (currentList) {
  //       reverstList.push(currentList.value);
  //       currentList = currentList.next;
  //     }
  //     reverstList.reverse().forEach((el) => console.log(el));
  //   };

  const printList = (list) => {
    if (list.next) {
      printList(list.next);
    }
    console.log(list.value);
  };

  printList(list);
};

