const firstTask = () => {
  /*
    Следующая функция возвращает true, если параметр age больше 18.
    В ином случае она запрашивает подтверждение через confirm и возвращает его результат:
*/
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm("Родители разрешили?");
    }
  }
  //Будет ли эта функция работать как-то иначе, если убрать else?

  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    return confirm("Родители разрешили?");
  }
  //Есть ли хоть одно отличие в поведении этого варианта?
  // Нет, и тот и другой вариант работают одинаково
};

const secondTask = () => {
  /*
    Следующая функция возвращает true, если параметр age больше 18.
    В ином случае она задаёт вопрос confirm и возвращает его результат.

    function checkAge(age) {
        if (age > 18) {
        return true;
        } else {
        return confirm("Родители разрешили?");
        }
    }

    Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
    Сделайте два варианта функции checkAge:
    Используя оператор ?
    Используя оператор ||
    */
   const checkAgeFirstOption = (age) => age > 18 ? true : confirm("Родители разрешили?");
   const checkAgeSecondOption = (age) => age > 18 || confirm("Родители разрешили?");
   checkAgeFirstOption(11);
   checkAgeSecondOption(12);
};

const thirdTask= (a,b) => {
    const min = () => a < b ? a : b;
    console.log(min());
};

const fourthTask = () =>    {
    let x = prompt("x?", '');
    let y = prompt("n?", '');
    const pow = () => {
        if (x < 1 || y < 1) {
            return alert('Укажите натуральное число');
        }
        alert(x ** y);
    };
    pow();
}

fourthTask();
thirdTask(1,2)
