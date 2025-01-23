function logCurso(nome, horas) {
  console.log(nome, horas);
  return nome + " " + horas
}

logCurso("nome", "horas")
logCurso("Luiz", "20")
logCurso("Pedro", "60")

const retorno = logCurso("Eita", "40")

function pedro(nome, cpf){
    console.log(nome, cpf, "oi")

    return {
        nomeTeste: nome,
        stringCPF: cpf
    }
}

const ret = pedro("Pedro", "759812364")

console.log(ret.stringCPF)

