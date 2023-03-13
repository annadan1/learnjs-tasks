const promptFormContainer = document.getElementById("prompt-form-container");
const modalOpenButton = document.querySelector(".modalOpenButton");
const form = document.getElementById("prompt-form");
let value = null;

const showModal = () => {
  promptFormContainer.style.display = "block";
  const input = form.querySelector("input");
  input.focus();
};

const buttonCancel = form.querySelectorAll("input")[2];

const closeModal = () => {
  promptFormContainer.style.display = "none";
  alert(value);
  form.text.value = "";
  document.body.style.overflowY = '';
};

modalOpenButton.addEventListener("click", () => {
  showModal();
  document.body.style.overflowY = 'hidden';
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.text.value) value = form.text.value;
  closeModal();
});

buttonCancel.addEventListener("click", () => {
  value = null;
  closeModal();
});

form.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    value = null;
    closeModal();
  }
});
