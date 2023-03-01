const task = () => {
  //Каким будет результат этих выражений?
  const questions = [
    5 > 4,
    "ананас" > "яблоко",
    "2" > "12",
    undefined == null,
    undefined === null,
    null == "\n0\n",
    null === +"\n0\n",
  ];
  const answers = [
    true,
    false,
    true,
    true,
    false,
    false,
    false,
  ];

  questions.forEach((el, i) => {console.log(`${el} = ${answers[i]}`)})
};

task();
