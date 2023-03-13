const firstTask = () => {
  /*
    Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
    Каждый вызов должен сохраняться как массив аргументов.
    */
  function work(a, b) {
    console.log(a + b); // произвольная функция или метод
  }

  const spy = (func) => {
    function spyWrapper(...args) {
      spyWrapper.calls.push(args);
      return func.apply(this, args);
    }

    spyWrapper.calls = [];

    return spyWrapper;
  };

  work = spy(work);

  work(1, 2); // 3
  work(4, 5); // 9

  for (let args of work.calls) {
    console.log("call:" + args.join()); // "call:1,2", "call:4,5"
  }
};

const secondTask = () => {
  /*
    Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
    */
  function f(x) {
    console.log(x);
  }

  const delay = (func, ms) => {
    function decorator(arg) {
      setTimeout(() => func.call(this, arg), ms);
    }
    return decorator;
  };

  // создаём обёртки
  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);

  f1000("test"); // показывает "test" после 1000 мс
  f1500("test2"); // показывает "test2" после 1500 мс
  /*
  Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».
    В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.
  */
};

const thirdTask = () => {
  /*
    Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. 
    Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.
    */
  let f = debounce(console.log, 1000);
  function debounce(func) {
    let isReady = true;
    function wrapper(...arg) {
      if (isReady) {
        isReady = !isReady;
        func.apply(this, arg);
        setTimeout(() => (isReady = !isReady), 400);
      }
    }
    return wrapper;
  }

  f(1); // выполняется немедленно
  f(2); // проигнорирован

  setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
  setTimeout(() => f(4), 1100); // выполняется
  setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
};

const fourthTask = () => {
  //Тормозящий (throttling) декоратор
  function f(a) {
    console.log(a);
  }

  const throttle = (func) => {
    let isReady = true;

    function decorator() {
      decorator.arg = arguments;
      decorator.this = this;

      if (isReady) {
        func.apply(this, arguments);
        isReady = false;
        setTimeout(() => {
          isReady = true;
          if (decorator.arg) {
            decorator.apply(decorator.this, decorator.arg);
          }
          decorator.this = null;
          decorator.arg = null;
        }, 1000);
      }
    }

    decorator.arg = null;
    decorator.this = null;
    return decorator;
  };

  // f1000 передаёт вызовы f максимум раз в 1000 мс
  let f1000 = throttle(f, 1000);

  f1000(1); // показывает 1
  f1000(2); // (ограничение, 1000 мс ещё нет)
  f1000(3); // (ограничение, 1000 мс ещё нет)
  // когда 1000 мс истекли ...
  // ...выводим 3, промежуточное значение 2 было проигнорировано
};