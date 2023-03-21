//Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

//не выполнится, чтобы поймать асинхронную ошибку, нужно использовать reject
//reject(new Error("Whoops!"));

new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error("Whoops!"));
  }, 1000);
}).catch(alert);