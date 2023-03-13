let table = document.getElementById("bagua-table");
let editElem = document.createElement("textarea");
editElem.className = "edit";
let edittable = false;
let currentValue = "";

table.addEventListener("click", (e) => {
  const currentTd = e.target.closest("td");
  if (edittable || !currentTd) return;
  startEdit(currentTd);
});

const createButton = (text, action, parent) => {
  const button = document.createElement("button");
  button.dataset.action = action;
  button.textContent = text;
  parent.append(button);
};

const getButtons = (currentTd, editElem) => {
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttonsContainer";
  createButton("Ок", "submit", buttonsContainer);
  createButton("Отмена", "cancel", buttonsContainer);

  currentTd.append(buttonsContainer);

  buttonsContainer.addEventListener("click", (e) => {
    const { action } = e.target.dataset;
    if (action === "cancel") {
      endEdit(currentTd, buttonsContainer);
    } else if (action === "submit") {
      currentValue = editElem.value;
      endEdit(currentTd, buttonsContainer);
    }
  });
};

const startEdit = (currentTd) => {
  edittable = true;
  editElem.contentEditable = true;
  editElem.value = currentTd.innerHTML;
  currentValue = currentTd.innerHTML;

  editElem.style.width = currentTd.clientWidth + "px";
  editElem.style.height = currentTd.clientHeight + "px";
  currentTd.classList.add("edit-td");

  currentTd.textContent = "";
  currentTd.append(editElem);
  getButtons(currentTd, editElem);
  editElem.focus();
};

const endEdit = (currentTd, buttonsContainer) => {
  edittable = false;
  editElem.remove();
  currentTd.classList.remove("edit-td");
  currentTd.innerHTML = currentValue;
  buttonsContainer.remove();
};
