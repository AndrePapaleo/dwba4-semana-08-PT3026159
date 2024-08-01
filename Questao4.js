class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

const alunos = [
    new Aluno("João", "da Silva", 7, 8.5),
    new Aluno("Maria", "dos Santos", 9, 7.3),
    new Aluno("Carlos", "Oliveira", 6, 8.9),
    new Aluno("Ana", "Lima", 5, 7.0),
    new Aluno("Paulo", "Souza", 8, 6.5)
];

function mostrarDadosAlunos() {
    alunos.forEach(aluno => {
        alert(`Nome Completo: ${aluno.nomeCompleto()}\nMédia: ${aluno.media()}\nSituação: ${aluno.situacao()}`);
    });
}

// Executar a função para mostrar os dados dos alunos
mostrarDadosAlunos();
