const f = () => {
  /*
  Напишите код, как получить…
    элемент <div>?
    <ul>?
    второй <li> (с именем Пит)?
  */
  alert(document.body.children[0]);
  alert(document.body.children[1]);
  alert(document.body.children[1].children[1].textContent);
};
f();
