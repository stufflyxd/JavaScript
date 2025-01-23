// Loop 1
const lista = ["JavaScript", "HTML", "CSS"];
const body = document.querySelector("body");

for (let index = 0; index < lista.length; index++) {
  console.log(lista[index]);
  body.innerHTML += "<li>" + lista[index] + "</li>";
}

// Loop 2
function adicionarBody(item) {
  body.innerHTML += "<li>" + item + "</li>";
}

const lista2 = ["Pedro", "Alvares", "Cabral"];
lista2.forEach(adicionarBody); // Loop reduzido que pega apenas os itens

// queryAll
const links = document.querySelectorAll("nav a");

function logHref(item) {
  const href = item.href;
  console.log(href);
}

links.forEach(logHref);

console.log(links[links.length - 1]);
