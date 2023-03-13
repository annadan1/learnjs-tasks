const form = document.querySelector("form");
const moneyBefore = document.querySelector("#money-before");
const moneyAfter = document.querySelector("#money-after");
const heightAfter = document.getElementById("height-after");

const calculator = {
  money: 10000,
  months: 12,
  interest: 5,
  result: 0,
};

const getResult = () =>
  Math.round(
    calculator.money *
      (1 + calculator.interest / 100) ** (calculator.months / 12)
  );
  
calculator.result = getResult();

const updateForm = () => {
  moneyBefore.textContent = calculator.money;
  moneyAfter.textContent = calculator.result;
  heightAfter.style.height =
    (calculator.result / calculator.money) * 100 + "px";
};

updateForm();

form.money.addEventListener("input", (e) => {
  calculator.money = Number(e.target.value);
  calculator.result = getResult();
  updateForm();
});

form.interest.addEventListener("input", (e) => {
  calculator.interest = Number(e.target.value);
  calculator.result = getResult();
  updateForm();
});

form.months.addEventListener("change", (e) => {
  calculator.months = Number(e.target.value);
  calculator.result = getResult();
  updateForm();
});
