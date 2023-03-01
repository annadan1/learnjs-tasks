const firstTask = () => {
  //Что выведет следующий код?
  let fruits = ["Яблоки", "Груша", "Апельсин"];

  // добавляем новое значение в "копию"
  let shoppingCart = fruits;
  shoppingCart.push("Банан");

  // что в fruits? "Яблоки", "Груша", "Апельсин", "Банан"
  console.log(fruits.length); // 4
};

const secondTask = () => {
  /*
  Давайте произведём 5 операций с массивом.
  Создайте массив styles с элементами «Джаз» и «Блюз».
  Добавьте «Рок-н-ролл» в конец.
  Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
  Удалите первый элемент массива и покажите его.
  Вставьте Рэп и Регги в начало массива.
  Массив по ходу выполнения операций:
    Джаз, Блюз
    Джаз, Блюз, Рок-н-ролл
    Джаз, Классика, Рок-н-ролл
    Классика, Рок-н-ролл
    Рэп, Регги, Классика, Рок-н-ролл
*/

  const styles = ["Джаз", "Блюз"];
  console.log(styles); // Джаз, Блюз
  styles.push("Рок-н-ролл");
  console.log(styles); // Джаз, Блюз, Рок-н-ролл
  styles[Math.ceil((styles.length - 1) / 2)] = "Классика";
  console.log(styles); // Джаз, Классика, Рок-н-ролл
  styles.shift();
  console.log(styles); // Классика, Рок-н-ролл
  styles.unshift("Рэп", "Регги");
  console.log(styles); // Рэп, Регги, Классика, Рок-н-ролл
};

const thirdTask = () => {
  //Каков результат? Почему?
  let arr = ["a", "b"];

  arr.push(function () {
    console.log(this);
  });

  arr[2](); // [ 'a', 'b', [Function (anonymous)] ], т.к. массивы являются пронумерованным объектом, а контекством у функции является объект
};

const fourthTask = () => {
  /*
    Напишите функцию sumInput(), которая:
    Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
    Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
    Подсчитывает и возвращает сумму элементов массива.
    P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
    */
  const sumInput = () => {
    const resultObj = [];
    let result = 0;
    while (true) {
      let value = prompt("Введите число", 0);
      if (!isFinite(value) || value === "" || value === null) break;
      resultObj.push(value);
    }
    for (const iterator of resultObj) {
      result += Number(iterator);
    }
    return result;
  };
  sumInput();
};

const fifthTask = () => {
  /*
    На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
    Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
    Функция getMaxSubSum(arr) должна возвращать эту сумму.
    */
  const getMaxSubSum = (arr) => {
    let result = 0;
    let currentSum = 0;
    for (let i = 0; i < arr.length - 1; i += 1) {
      currentSum += arr[i];
      if (currentSum > result) result = currentSum;
      if (currentSum < 0) {
        currentSum = 0;
      }
    }
    return result;
  };
  console.log(getMaxSubSum([1, -2, 3, 4, -9, 6])); //7
  console.log(getMaxSubSum([1, -2, 3, 4, 3, -9, 6])); //10
  console.log(getMaxSubSum([100, -9, 2, -3, 5])) //100
  console.log(getMaxSubSum([2, -1, 2, 3, -9])) //6
};

