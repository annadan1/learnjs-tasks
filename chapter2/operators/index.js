const firstTask = () => {
  let a = 1,
    b = 1;
  let c = ++a; // ? c = 2, a = 2
  let d = b++; // ? d = 1, b = 2
  console.log(a, b, c, d);
};

const secondTask = () => {
  //Чему будут равны переменные a и x после исполнения кода в примере ниже?
  let a = 2;
  let x = 1 + (a *= 2);
  // a=4, x=5
  console.log(a, x);
};
const thirdTask = () => {
  //Какой результат будет у выражений ниже?
 const questions = ["" + 1 + 0, "" - 1 + 0, true + false, 6 / "3", "2" * "3", 4 + 5 + "px", "$" + 4 + 5, 
  "4" - 2, "4px" - 2, "  -9  " + 5, "  -9  " - 5, null + 1, undefined + 1, " \t \n" - 2]
 const answers = ['"" + 1 + 0 = 10', '"" - 1 + 0 = -1', 'true + false = 1', '6 / "3" = 2', '"2" * "3" = 6', '4 + 5 + "px" = 9px', 
 '"$" + 4 + 5 = $45', '"4" - 2 = 2', '"4px" - 2 = NaN', '"  -9  " + 5 =  -9 5', '"  -9  " - 5 = -14', 'null + 1 = 1', 'undefined + 1 = NaN', '" \t \n" - 2 = -2']
 questions.forEach((el) => console.log(el));
 answers.forEach((el) => console.log(el));
};

firstTask();
secondTask();
thirdTask();


let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); 

