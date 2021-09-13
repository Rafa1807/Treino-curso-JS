

function criarAluno (nome, n1, n2) {

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2
        }
    }
}

var turma = [
    criarAluno("Igor", 9, 10),
    criarAluno("Joao", 3, 5),
    criarAluno("Mariana", 10, 10)
]

var aluno = turma[1];

console.log(aluno);
console.log(aluno.media());