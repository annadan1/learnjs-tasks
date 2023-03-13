const firstTask = () => {
  /*
    Вот документ с таблицей и формой.
    Как найти?…

    Таблицу с id="age-table".
    Все элементы label внутри этой таблицы (их три).
    Первый td в этой таблице (со словом «Age»).
    Форму form с именем name="search".
    Первый input в этой форме.
    Последний input в этой форме.
    Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.
    */
  //1
  let table = document.getElementById("age-table");
  console.log("1", table);
  //2
  console.log("2", table.querySelectorAll("label"));
  //3
  console.log("3", table.querySelector("td"));
  //4
  let form = document.querySelector('form[name="search"]');
  console.log("4", form);
  //5
  form.querySelector("input");
  console.log("5", form.querySelector("input"));
  //6
  let inputs = form.querySelectorAll("input");
  console.log("6", inputs[inputs.length - 1]);
};

firstTask();
