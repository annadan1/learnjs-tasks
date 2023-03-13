const firstTask = () => {
  /*
    Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
    После этого должен работать такой код:
    */
  function f() {
    console.log("Hello!");
  }

  Function.prototype.defer = function (ms) {
    setTimeout(() => this(), ms);
  };

  f.defer(1000); // выведет "Hello!" через 1 секунду
};

const secondTask = () => {
  //Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
  //Например, должно работать так:
  function f(a, b) {
    console.log(a + b);
  }

  Function.prototype.defer = function (ms) {
    let func = this;
    return function (a,b) {
      setTimeout(() => func(a,b), ms);
    };
  };

  f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
};

