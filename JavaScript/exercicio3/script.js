const sum = document.querySelector("button");
const zero = document.querySelector("div");

function handleClickSomar() {

  soma = Number(zero.innerText) + 1;
  if (soma < 10) zero.innerText = soma;
  else console.log("Não é possível mais adicionar.");
}

if (sum) {
  sum.addEventListener("click", handleClickSomar);
}
