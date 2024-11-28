class Aluno {
  constructor(nome, idade, nota) {
      this.nome = nome;
      this.idade = idade;
      this.nota = nota;
  }
}

let alunos = [];

function cadastraAlunos(nome, idade, nota, array) {
  let novoAluno = new Aluno(nome, idade, nota);
  if (!array.some(aluno => aluno.nome === nome)) {
      array.push(novoAluno);
  }
  return novoAluno;
}

function ordenarPorNota(array) {
  array.sort((a, b) => a.nota - b.nota);
  return array;
}

function ordenarPorIdade(array) {
  array.sort((a, b) => a.idade - b.idade);
  return array;
}

function ordenarPorNome(array) {
  array.sort((a, b) => {
      let nomeA = a.nome.toUpperCase();
      let nomeB = b.nome.toUpperCase();
      if (nomeA < nomeB) return -1;
      if (nomeA > nomeB) return 1;
      return 0;
  });
  return array;
}

function calcularMedia(array) {
  if (array.length === 0) return 0;
  let somaNotas = 0;
  array.forEach(aluno => {
      somaNotas += Number(aluno.nota);
  });
  return somaNotas / array.length;
}

cadastraAlunos("João", 20, 8.5, alunos);
cadastraAlunos("Maria", 22, 9.0, alunos);
cadastraAlunos("Ana", 19, 7.5, alunos);

console.log("Ordenados por nome:");
console.table(ordenarPorNome(alunos));

console.log("Ordenados por idade:");
console.table(ordenarPorIdade(alunos));

console.log("Ordenados por nota:");
console.table(ordenarPorNota(alunos));

console.log("Média das notas:", calcularMedia(alunos));
