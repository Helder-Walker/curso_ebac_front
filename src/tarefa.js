const alunos = [
    {nome: 'João', nota: 7},
    {nome: 'Maria', nota: 5},
    {nome: 'Pedro', nota: 8},
    {nome: 'Ana', nota: 4},
    {nome: "Carlos", nota: 6}
];

function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6)
}

const alunosAprovadosArray = alunosAprovados(alunos);
console.log("Alunos aprovados:")
console.log(alunosAprovadosArray)