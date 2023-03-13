const mouse = document.getElementById("mouse");
document.body.style.overflow = "hidden";
mouse.style.position = "absolute";
mouse.tabIndex = 0;

let focused = false;

mouse.addEventListener("click", () => {
  mouse.focus();
  focused = true;
});

mouse.addEventListener("keydown", (e) => {
  if (!focused) return;
  const mouseHeigth = mouse.clientHeight;
  const mouseWidth = mouse.clientWidth;
  const coords = mouse.getBoundingClientRect();

  if (e.key == "ArrowDown") {
    mouse.style.top = coords.top + mouseHeigth + "px";
  }
  if (e.key == "ArrowLeft") {
    mouse.style.left = coords.left - mouseWidth + "px";
  }
  if (e.key == "ArrowRight") {
    mouse.style.left = coords.left + mouseWidth + "px";
  }
  if (e.key == "ArrowUp") {
    mouse.style.top = coords.top - mouseHeigth + "px";
  }
});
