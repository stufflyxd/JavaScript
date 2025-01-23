// Métodos

const curso = {
    nome: "JavaScript",
    completar(){
        console.log("Curso")
    },
    nome_curso(){
        console.log(this.nome);
    }
}

console.log(curso.nome)
curso.completar()
curso.nome_curso()

// Evento 
const ativar = document.querySelector('.ativar')
/**@param {MouseEvent} event */ // Diz ao VSCODE que é um evento, e agora ele irá autocompletar
function handleClick(event) {
    console.log(event.timeStamp)
    console.log(event.currentTarget) // Está usando tudo o que está dentro da função sem precisar pegar ao que está fora.
}

ativar.addEventListener('click', handleClick)

console.log(ativar)