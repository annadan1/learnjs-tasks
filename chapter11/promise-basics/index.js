const firstTask = () => {
  //Можно ли "перевыполнить" промис?
  let promise = new Promise(function (resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000); // не выполнится, потому что промис выполняет только один вызов resolve, reject
  });

  promise.then(console.log);
  //(1);
};

const secondTask = () => {
  function delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), ms);
    });
  }
  delay(3000).then(() => console.log("выполнилось через 3 секунды"));
};

const thirdTask = () => {
  const showCircleButton = document.querySelector(".showCircleButton");

  function showCircle(cx, cy, radius) {
    let div = document.createElement("div");
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + "px";
    div.style.top = cy + "px";
    div.className = "circle";
    document.body.append(div);

    return new Promise((resolve) => {
      setTimeout(() => {
        div.style.width = radius * 2 + "px";
        div.style.height = radius * 2 + "px";

        div.addEventListener("transitionend", function handler() {
          div.removeEventListener("transitionend", handler);
          resolve(div);
        });
      }, 0);
    });
  }

  const show = () => {
    showCircle(150, 150, 100).then(div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
  };

  showCircleButton.onclick = () => show();
};

thirdTask();
