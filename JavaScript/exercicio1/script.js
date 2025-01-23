// function livro(nome, ano, autor){

//     const nome_upper = nome.toUpperCase()
//     const ano_lancamento = 2050 - Number(ano)
//     const frase = nome + " por " + autor

//     const atributos_livro = {
//         nome: nome_upper,
//         ano: ano_lancamento,
//         frase: frase
//     }

//     return atributos_livro
// }

function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    ano: 2050 - Number(ano),
    frase: nome + " por " + autor,
  };
}

const livroRetorno = livro("O senhor dos Anéis", "1954", "J. R. R. Tolkien");

console.log(livroRetorno);
