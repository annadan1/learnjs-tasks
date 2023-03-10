const tasks = () => {
  alert(null || 2 || undefined); // 2
  alert(alert(1) || 2 || alert(3)); //1 -> 2
  alert(1 && null && 2); // null
  alert(alert(1) && alert(2)); // alert(1) -> undefined
  alert(null || (2 && 3) || 4); // 3

  /*
    Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
    «Включительно» означает, что значение переменной age может быть равно 14 или 90.
    */
  let age = 14;
  if (age >= 14 && age <= 90) {
    console.log("age находится в диапазоне между 14 и 90 включительно");
  }

  /*
   Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
   Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
   */
  if (!(age >= 14 && age <= 90)) {
    console.log("age НЕ находится в диапазоне между 14 и 90 включительно");
  }
  if (age <= 14 || age >= 90) {
    console.log("age НЕ находится в диапазоне между 14 и 90 включительно");
  }

  /*
  Какие из перечисленных ниже alert выполнятся?
  Какие конкретно значения будут результатами выражений в условиях if(...)?
  */
  if (-1 || 0) alert("first"); // -1 будет true
  if (-1 && 0) alert("second"); // не выполнится, false (тут оба должны быть true)
  if (null || (-1 && 1)) alert("third"); // выполнится, (-1 && 1) = true

  let login = prompt("Введите ваш логин", "");
  if (!login) {
    alert("Отменено");
  } else if (login === "Админ") {
    let password = prompt("Введите ваш пароль", "");
    if (!password) {
      alert("Отменено");
    } else {
      password === "Я главный"
        ? alert("Здравствуйте!")
        : alert("Неверный пароль");
    }
  } else {
    alert("Я вас не знаю");
  }
};

tasks();
