// ...ваш код...
// Заметьте: <textarea> должен иметь class="edit"
// my.css содержит стиль, чтобы <textarea> и <div> были одного размера

const view = document.querySelector(".view");
let textarea = null;

view.addEventListener("click", () => {
  getEdit();
});

const getEdit = () => {
  textarea = document.createElement("textarea");
  textarea.value = view.textContent;
  textarea.className = "edit";

  textarea.onblur = function () {
    getView();
  };

  textarea.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      textarea.blur();
    }
  });

  view.replaceWith(textarea);
  textarea.focus();
};

const getView = () => {
  view.textContent = textarea.value;
  textarea.replaceWith(view);
};
