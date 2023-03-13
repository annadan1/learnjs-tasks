"use strict";
const firstTsk = () => {
  //Что выведет функция?
  function f() {
    console.log(this); // мы не передаем контекст, а передаем null, поэтому null
  }
  let user = {
    g: f.bind(null),
  };

  user.g();
};

const secondtask = () => {
  //Можем ли мы изменить this дополнительным связыванием?
  //Что выведет этот код?
  function f() {
    console.log(this.name);
  }

  f = f.bind({ name: "Вася" }).bind({ name: "Петя" }); // запоминает первый аргумент, будет выведено Вася

  f();
};

const thirdTask = () => {
  //В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
  function sayHi() {
    console.log(this.name);
  }
  sayHi.test = 5;

  let bound = sayHi.bind({
    name: "Вася",
  });

  console.log(bound.test); // что выведет? почему?
  console.log(bound()); // Вася -  bound.name нам покажет sayHi
  /*
    выводит undefined, т.к. контекстом является объект name: Вася; bound является функцией sayHi
  */
};

const fourthTask = () => {
  /*
    Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
    Однако, его вызов приводит к ошибке. Почему?
    Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).
    */
  function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
  }

  let user = {
    name: "Вася",

    loginOk() {
      alert(`${this.name} logged in`);
    },

    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  };

  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
  //ошибка происходила, потому что нет доступа к name, нужно указать контекст методам
};

const fifthtask = () => {
  /*
    Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".
    Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
    Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) 
    как ok и функцию user.login(false) как fail?
*/
  function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
  }

  let user = {
    name: "John",

    login(result) {
      alert(this.name + (result ? " logged in" : " failed to log in"));
    },
  };

  askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
};

fifthtask();
