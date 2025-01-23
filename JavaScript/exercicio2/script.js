const circulo = document.querySelector("#circulo");

/**@param {MouseEvent} event*/
function handleMouse(event) {

  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", handleMouse);
