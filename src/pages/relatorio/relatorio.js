exigirLogin();
const dadosRelatorio = localStorage.getItem('emprestimos');
const emprestimos = JSON.parse(dadosRelatorio) || [];

console.log(emprestimos);

const total = document.getElementById('total-emprestimos');
total.textContent = "Total de empréstimos: " + emprestimos.length;

const lista = document.getElementById('lista-relatorio');

if (emprestimos.length === 0) {
    total.textContent = "Nenhum empréstimo registrado.";
}

for (let i = 0; i < emprestimos.length; i++) {
    const emprestimo = emprestimos[i];

    const item = document.createElement('li');

    item.textContent = emprestimo.titulo + " - Autor: " + emprestimo.autor;

    lista.appendChild(item);
}