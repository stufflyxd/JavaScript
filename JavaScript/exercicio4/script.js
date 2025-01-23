const navegacao = document.querySelectorAll("nav a");

function ativarLink(item) {
  const href = item.href;

  if (href === document.location.href) {
    item.style.background = "black";
    item.style.color = "white";
  }
}

navegacao.forEach(ativarLink);
