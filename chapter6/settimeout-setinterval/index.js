const firstTask = () => {
  /*
    Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
    Сделайте два варианта решения.
    Используя setInterval.
    Используя рекурсивный setTimeout.
    */
  const printNumbers = (from, to) => {
    let count = from;
    let timerId = setInterval(() => {
      count > to ? clearInterval(timerId) : (console.log(count), (count += 1));
    }, 1000);
  };

  //   const printNumbers = (from, to) => {
  //     let count = from;
  //     let timerId = setTimeout(function tick() {
  //       if (count === to) {
  //         console.log(count);
  //       } else {
  //         console.log(count);
  //         count += 1;
  //         timerId = setTimeout(tick, 1000);
  //       }
  //     }, 1000);
  //   };

  printNumbers(1, 10);
};

const secondTask = () => {
  /*
    В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.
    Когда будет выполнена запланированная функция?
    После цикла.
    Перед циклом.
    В начале цикла.
    Что покажет alert?
*/
  let i = 0;

  setTimeout(() => console.log(i), 100); // 100000000

  // предположим, что время выполнения этой функции > 100 мс
  for (let j = 0; j < 100000000; j++) {
    i++;
  }
  // функция будет выполнена после цикла, будет показано число 100000000
  // т.к. таймеры выполняются после кода, 
  // забегая наперед - они выполняются в макротасках после того как стек вызовов и микротаски будут выполнены и очередь будет пустая
};

secondTask();
