const dados = localStorage.getItem('emprestimos');
const emprestimos = JSON.parse(dados) || [];

console.log(emprestimos);

const total = document.getElementById('total-emprestimos');
total.textContent = "Total de empréstimos: " + emprestimos.length;

const lista = document.getElementById('lista-relatorio');

if (emprestimos.lenght === 0) {
    total.textContent = "Nenhum empréstimo registrado.";
}

for (let i = 0; i < emprestimos.length; i++) {
    const emprestimo = emprestimos[i];

    const item = document.createElement('li');

    item.textContent = emprestimo.titulo + " - Autor: " + emprestimo.autor;

    lista.appendChild(item);
}