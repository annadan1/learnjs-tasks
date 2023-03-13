/*
    Если elem – произвольный узел DOM-элемента…
    Правда, что elem.lastChild.nextSibling всегда равен null?
    Правда, что elem.children[0].previousSibling всегда равен null ?
*/

//1 правда. lastChild - всегда последний элемент, у него нет следующего соседа
//2 нет, потому что перед children[0] может стоять текстовый элемент. previousElementSibling нужно использовать, чтобы получить именно элемент

const thirdTask = () => {
  //Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
  //Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
  let table = document.body.firstElementChild;
  for (let i = 0; i <= 5; i += 1) {
    table.rows[i].cells[i].style.backgroundColor = "red";
  }
};

thirdTask();
