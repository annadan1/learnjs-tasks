const firstTask = () => {
  /*
    В приведённом ниже коде создаются и изменяются два объекта.
    Какие значения показываются в процессе выполнения кода?
    */
  let animal = {
    jumps: null,
  };
  let rabbit = {
    __proto__: animal,
    jumps: true,
  };

  console.log(rabbit.jumps); // ? (1) true

  delete rabbit.jumps;

  console.log(rabbit.jumps); // ? (2) null

  delete animal.jumps;

  console.log(rabbit.jumps); // ? (3) undefined
};

const secondTask = () => {
  // Задача состоит из двух частей. У нас есть объекты:
  let head = {
    glasses: 1,
  };

  let table = {
    pen: 3,
    __proto__: head,
  };

  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
  };

  let pockets = {
    money: 2000,
    __proto__: bed,
  };
  /*
  1.С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: 
    pockets → bed → table → head. 
    Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
    */
  console.log(pockets.pen); //3
  console.log(bed.glasses); //1
  /*
  2.Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? 
    При необходимости составьте цепочки поиска и сравните их.
  */
  // я думаю, head.glasses - т.к. glasses содержится именно в этом объекте и ему не нужно идти по цепочке прототипов
  // но особой разницы во времени не будет
};

const thirdTask = () => {
  /*
    Объект rabbit наследует от объекта animal.
    Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
    */
  let animal = {
    eat() {
      this.full = true;
    },
  };

  let rabbit = {
    __proto__: animal,
  };

  rabbit.eat();
  // rabbit получит свойство full
  console.log("rabbit ->", rabbit, "animal ->", animal);
};

const fourthTask = () => {
  /*
  У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
    Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
    */
  let hamster = {
    eat(food) {
      if (this.stomach) {
        this.stomach.push(food);
      } else {
        this.stomach = [];
        this.stomach.push(food);
      }
    },
  };

  let speedy = {
    __proto__: hamster,
  };

  let lazy = {
    __proto__: hamster,
  };

  // Этот хомяк нашёл еду
  speedy.eat("apple");
  console.log("животик хомяка speedy ->", speedy.stomach); // apple

  // У этого хомяка тоже есть еда. Почему? Исправьте
  lazy.eat("avocado");
  lazy.eat("green");
  console.log("животик хомяка lazy ->", lazy.stomach); // apple
};

