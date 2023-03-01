const firstTask = () => {
  //Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
  const ucFirst = (str) => str[0].toUpperCase() + str.slice(1);
  console.log(ucFirst("вася") == "Вася");
};

const secondTask = () => {
  //Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
  const checkSpam = (str) => {
    str = str.toLowerCase();
    if (str.includes("viagra") || str.includes("xxx")) {
      return true;
    }
    return false;
  };
  console.log(
    checkSpam("buy ViAgRA now") == true,
    checkSpam("free xxxxx") == true,
    checkSpam("innocent rabbit") == false
  ); // true true true
};

const thirdTask = () => {
  /*
    Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, 
    если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
    Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
    */

  const truncate = (str, maxlength) => {
    let result = "";
    if (str.length > maxlength) {
      result = str.slice(0, maxlength - 1) + "…";
    } else {
      result = str;
    }
    return result;
  };

  console.log(
    truncate("Всем привет!", 20) == "Всем привет!",
    truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) ==
      "Вот, что мне хотело…"
  ); // true true
};
const fourthTask = () => {
  /*
  Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
  Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
  */
  const extractCurrencyValue = (str) => Number(str.slice(1));
  console.log(extractCurrencyValue("$120") === 120);
};
