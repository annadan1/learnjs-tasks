const firstTask = () => {
  /*
    В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
    Сначала у нас есть такой код:
    */
  const first = () => {
    //Добавим одну строчку (выделенную в коде ниже). Что вызов console.log покажет нам сейчас?
    function Rabbit() {}
    Rabbit.prototype = {
      eats: true,
    };

    let rabbit = new Rabbit();

    console.log(rabbit.eats); // true

    Rabbit.prototype = {};

    console.log(rabbit.eats); // true;  
    // Rabbit.prototype = {}; тут мы пересоздаем  Rabbit.prototype, но т.к. rabbit все еще ссылается на прошлый объект, 
    // который был в Rabbit.prototype, значение остается true;
  };
  const second = () => {
    //…А если код такой (заменили одну строчку)?
    function Rabbit() {}
    Rabbit.prototype = {
      eats: true,
    };

    let rabbit = new Rabbit();

    Rabbit.prototype.eats = false;

    console.log(rabbit.eats); // т.к. объекты присваиваются по ссылке, если мы меняем что-то в прототипе, то и данные в rabbit будут изменены
  };

  const third = () => {
    //Или такой (заменили одну строчку)?
    function Rabbit() {}
    Rabbit.prototype = {
      eats: true,
    };

    let rabbit = new Rabbit();

    delete rabbit.eats;

    console.log(rabbit.eats); // ? true, значение осталось в прототипе
  };
  const fourth = () => {
    ////Или, наконец, такой:
    function Rabbit() {}
    Rabbit.prototype = {
      eats: true,
    };

    let rabbit = new Rabbit();

    delete Rabbit.prototype.eats;

    console.log(rabbit.eats); // undefined, т.к. в объекте, от которого наследуется rabbit больше нет значения eats
  };

  first();
  second();
  third();
  fourth();
};

const secondTask = () => {
  /*
    Представьте, что у нас имеется некий объект obj, 
    созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.
    Можем ли мы сделать так?
    */
  function Obj(objName) {
    this.objName = objName;
  }
  let obj = new Obj("obj");
  //Приведите пример функции-конструктора для объекта obj,
  //с которой такой вызов корректно сработает.
  let obj2 = new obj.constructor("obj2");
  console.log(obj2.objName); // obj2

  //И пример функции-конструктора, с которой такой код поведёт себя неправильно.
  Obj.prototype = null;
  let obj3 = new Obj("obj3");
  let obj4 = new obj3.constructor("obj4");
  console.log(obj4.objName); // будет undefined
};

