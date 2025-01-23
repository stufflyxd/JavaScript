const elemento = document.querySelector("p");
const texto = elemento.innerText

console.log(texto)

if (elemento || document.querySelector("body")) {
  console.log("teste");
}

"JavaScript" === "javascript";
"20" === 20;
30 !== 30;

document.querySelector(".texto") !== null;

if (texto.toUpperCase() === 'HTML'){
    console.log("Execute o código")
}