const firestTask = () => {
    //Взгляните на следующий код:

    let str = "Привет";
    
    str.test = 5;
    
    console.log(str.test);
    //Как вы думаете, это сработает? Что выведется на экран?
    //я думаю, что это не сработает, т.к. str не является объектом и мы не можем добавить метод примитиву
};
