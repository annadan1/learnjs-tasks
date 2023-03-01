const firstTask = () => {
  ////Возможно ли создать функции A и B, чтобы new A() == new B()?
  let someObj = {};
  function A() {
    return someObj;
  }
  function B() {
    return someObj;
  }

  let a = new A();
  let b = new B();

  alert(a == b); // true
};

const secondTask = () => {
  /*
    Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
    read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
    sum() возвращает сумму этих свойств.
    mul() возвращает произведение этих свойств.
 */
  function Calculator() {
    this.read = function () {
      this.x = +prompt("x?", this.x);
      this.y = +prompt("y?", this.y);
    };
    this.sum = function () {
      return this.x + this.y;
    };
    this.mul = function () {
      return this.x * this.y;
    };
  }
  let calculator = new Calculator();
  calculator.read();

  alert("Sum=" + calculator.sum());
  alert("Mul=" + calculator.mul());
};

const thirdTask = () => {
  /*
    Создайте функцию-конструктор Accumulator(startingValue).
    Объект, который она создаёт, должен уметь следующее:
    Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
    Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
    Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
    */
  function Accumulator(value=1) {
    this.value = value;
    this.read = function () {
      this.value += (+prompt("какое число прибавить?", 0));
    };
  }
  let accumulator = new Accumulator(1); // начальное значение 1

  accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
  accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

  alert(accumulator.value);
};
