const firstTas = () => {
  /*
    Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

    counter() должен возвращать следующее значение (как и раньше).
    counter.set(value) должен устанавливать счётчику значение value.
    counter.decrease() должен уменьшать значение счётчика на 1.
    Посмотрите код из песочницы с полным примером использования.

    P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.
    */
  //   function makeCounter() {
  //     let count = 0;
  //     function counter() {
  //       return count++;
  //     }
  //     counter.set = function (value) {
  //       count = value;
  //     };
  //     counter.decrease = function () {
  //       count--;
  //     };
  //     return counter;
  //   }

  function makeCounter() {
    function counter() {
      return counter.count++;
    }
    counter.count = 0;
    counter.set = function (value) {
      counter.count = value;
    };
    counter.decrease = function () {
      counter.count--;
    };
    return counter;
  }

  let counter = makeCounter();

  console.log(counter()); // 0
  console.log(counter()); // 1

  counter.set(10); // установить новое значение счётчика

  console.log(counter()); // 10

  counter.decrease(); // уменьшить значение счётчика на 1

  console.log(counter()); // 10 (вместо 11)
};

const secondTask = () => {
  const sum = (a) => {
    let count = a;
    function otherSum(b) {
      count += b;
      return otherSum;
    }
    otherSum.toString = function () {
      let curCount = count;
      count = 0;
      return curCount;
    };
    return otherSum;
  };
  //Напишите функцию sum, которая бы работала следующим образом:
  console.log(JSON.parse(sum(1)(2))); //== 3; // 1 + 2
  console.log(JSON.parse(sum(1)(2)(3))); //== 6; // 1 + 2 + 3
  console.log(JSON.parse(sum(5)(-1)(2))); //== 6;
  console.log(JSON.parse(sum(6)(-1)(-2)(-3))); //== 0;
  console.log(JSON.parse(sum(0)(1)(2)(3)(4)(5))); //== 15;
  //JSON.parse чтоб результат отображался в консоли
};

