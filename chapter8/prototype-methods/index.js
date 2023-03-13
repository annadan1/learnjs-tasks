const firstTask = () => {
  /*
    Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.
    Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. 
    Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
    Вот так это должно работать:
    */
  let dictionary = Object.create(null);

  // ваш код, который добавляет метод dictionary.toString
  Object.defineProperty(dictionary, "toString", {
    value() {
      return Object.keys(this).join(",");
    },
  });

  // добавляем немного данных
  dictionary.apple = "Apple";
  dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

  // только apple и __proto__ выведены в цикле
  for (let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
  }

  // ваш метод toString в действии
  console.log(dictionary.toString()); // "apple,__proto__"
};

const secondTask = () => {
  //Давайте создадим новый объект rabbit:
  function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function () {
    console.log(this.name);
  };

  let rabbit = new Rabbit("Rabbit");
  //Все эти вызовы делают одно и тоже или нет?
  rabbit.sayHi(); // Rabbit
  Rabbit.prototype.sayHi(); //undefined, у Rabbit нет this.name
  Object.getPrototypeOf(rabbit).sayHi(); // undefined  - мы получаем свойство от объекта Rabbit, у него нет своего this.name
  rabbit.__proto__.sayHi();  // undefined - тоже что и сверху, вызываем sayHi у объекта Rabbit, у которого нет this.name
};

secondTask();
