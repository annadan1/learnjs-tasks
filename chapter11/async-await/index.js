const firstTask = () => {
  /*
    Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
    */

  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return await response.json();
    } else {
      throw new Error(response.status);
    }
  }

  loadJson("no-such-user.json") // (3)
    .catch(console.log); // Error: 404

  //https://plnkr.co/edit/5ju9HK96flCi7qgx
};

const secondTask = () => {
  /*
    Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
    В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.
  */

  class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = "HttpError";
      this.response = response;
    }
  }

  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return await response.json();
    } else {
      throw new HttpError(response);
    }
  }

  // Запрашивать логин, пока github не вернёт существующего пользователя.
  async function demoGithubUser() {
    let user;
    while (!user) {
      try {
        let name = prompt("Введите логин?", "iliakan");
        user = await loadJson(`https://api.github.com/users/${name}`);
        alert(`Полное имя: ${user.name}.`);
        return user;
      } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert(
            "Такого пользователя не существует, пожалуйста, повторите ввод."
          );
        } else {
          throw err;
        }
      }
    }
  }
  demoGithubUser();
  //https://plnkr.co/edit/df8KNNx6TmLwatjd
};

const thirdTask = () => {
  async function wait() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return 10;
  }

  function f() {
    wait().then(alert);
    // ...что здесь написать?
    // чтобы вызвать wait() и дождаться результата "10" от async–функции
    // не забывайте, здесь нельзя использовать "await"
  }

  f();
};
