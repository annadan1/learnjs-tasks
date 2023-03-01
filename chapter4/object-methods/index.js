const firstTask = () => {
  /*
  Здесь функция makeUser возвращает объект.
  Каким будет результат при обращении к свойству объекта ref? Почему?
*/
  function makeUser() {
    return {
      name: "John",
      ref: this,
    };
  }

  let user = makeUser();

  alert(user.ref.name); // ошибка, ref не является методом
};

const secondTask = () => {
  /*Создайте объект calculator (калькулятор) с тремя методами:
    read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
    sum() (суммировать) возвращает сумму сохранённых значений.
    mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/
  const calculator = {
    x: 1,
    y: 1,
    read() {
      this.x = +prompt("x?", this.x);
      this.y = +prompt("y?", this.y);
    },
    sum() {
      return this.x + this.y;
    },
    mul() {
      return this.x * this.y;
    },
  };

  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());
};

const thirdTask = () => {
  /*
   У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

  let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
    }
  };
  Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

  ladder.up();
  ladder.up();
  ladder.down();
  ladder.showStep(); // 1
  ladder.down();
  ladder.showStep(); // 0
  Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
  */
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert(this.step);
      return this;
    },
  };

  ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
};

thirdTask();
