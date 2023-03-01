const firstTask = () => {
  //Выведется ли alert? да, так как строка не пустая
  if ("0") {
    alert("Привет");
  }
};
const secondTask = () => {
  /*
    Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
    Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
    */
  let myAnswer = prompt("Какое «официальное» название JavaScript?", "");
  if (myAnswer === "ECMAScript") {
    alert("Верно!");
  } else {
    alert("Не знаете? ECMAScript!");
  }
};
const thirdTask = () => {
  /*
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.
*/
  let myAnswer = prompt("Введите какую нибудь цифру", "");
  if (myAnswer > 0) {
    alert("1, значение больше нуля");
  } else if (myAnswer < 0) {
    alert("-1, значение меньше нуля");
  } else {
    alert("0, значение равно нулю.");
  }
};

const fourthTask = (a, b) => {
  //Перепишите конструкцию if с использованием условного оператора '?':
  let result;
  result = a + b < 4 ? "Мало" : "Много";
  console.log(result);
};

const fifthTask = (login) => {
  //Перепишите if..else с использованием нескольких операторов '?'.
  let message;
  message =
    login === "Сотрудник"
      ? "Привет"
      : login === "Директор"
      ? "Здравствуйте"
      : login === ""
      ? "Нет логина"
      : "";
  console.log(message);
};

firstTask();
secondTask();
thirdTask();
fourthTask(1, 2);
fifthTask('Директор');