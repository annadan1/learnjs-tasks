const firstTask = () => {
  /*
    
    У нас есть дерево, структурированное как вложенные списки ul/li.

    Напишите код, который выведет каждый элемент списка <li>:

    Какой в нём текст (без поддерева) ?
    Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ? */
  const ul = document.querySelector("ul");
  const allLi = ul.querySelectorAll("li");
  allLi.forEach((li) =>
    console.log(
      li.firstChild.textContent.trim(),
      ":",
      li.querySelectorAll("li").length
    )
  );
};

firstTask();

// четвертая задача
/*
Объектом какого класса является document? document - HTMLDocument

Какое место он занимает в DOM-иерархии? // HTMLDocument - Document - Node

Наследует ли он от Node или от Element, или может от HTMLElement? от Node
*/
